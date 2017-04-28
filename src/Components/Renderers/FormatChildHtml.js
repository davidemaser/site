/**
 * Created by David Maser on 18/04/2017.
 */
import React, {Component} from 'react';
import DOMPurify from 'dompurify';

class FormatChildHtml extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        };
    }

    parseContent(){
        console.log(this.state.data);
        let Obj = this.state.data;
        let ObjectTemplate = '<{-type-} {-id-} {-class-}>{-content-}</{-type-}>';
        let ObjectArray = [];
        for(let o in Obj){
            let objClass = Obj[o].class !== undefined && Obj[o].class !== null ? 'class="'+Obj[o].class+'"' : '';
            let objId = Obj[o].id !== undefined && Obj[o].id !== null ? 'id="'+Obj[o].id+'"' : '';
            ObjectTemplate = ObjectTemplate
                .replace(/{-type-}/g,Obj[o].type)
                .replace(/{-class-}/g,objClass)
                .replace(/{-id-}/g,objId)
                .replace(/{-content-}/g,Obj[o].content);
            ObjectArray.push(ObjectTemplate);
        }
        return(
            ObjectArray
        )
    }

    render(){
        console.log(this.state.data);
        let renderObject = DOMPurify.sanitize(this.parseContent());
        renderObject = renderObject.replace(',',''); //dirty fix
        return(
            <div className="object-wrapper" dangerouslySetInnerHTML={{__html: renderObject}} />
        )
    }
}

export default FormatChildHtml;
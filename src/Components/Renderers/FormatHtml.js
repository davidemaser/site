/**
 * Created by David Maser on 18/04/2017.
 */
import React, {Component} from 'react';
import DOMPurify from 'dompurify';

class FormatHtml extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data,
            root: 'blocks',
            object:{
                template:'<{-type-} {-id-} {-class-}>{-content-}</{-type-}>'
            }
        };
    }

    parseChildObject(obj){
        let childObject;
        if(typeof obj === 'object'){
            childObject = '';
            for(let o in obj){
                let objClass = obj[o].class !== undefined && obj[o].class !== null ? 'class="'+obj[o].class+'"' : '';
                let objId = obj[o].id !== undefined && obj[o].id !== null ? 'id="'+obj[o].id+'"' : '';
                let objContent = this.parseChildObject(obj[o].content) !== undefined ? this.parseChildObject(obj[o].content) : '';
                let ObjectTemplate = this.state.object.template
                    .replace(/{-type-}/g,obj[o].type)
                    .replace(/{-class-}/g,objClass)
                    .replace(/{-id-}/g,objId)
                    .replace(/{-content-}/g,objContent);
                childObject+=ObjectTemplate;
            }
        }else{
            childObject=obj;
        }
        if(childObject !== ''){
            return(childObject)
        }
    }

    parseJson(){
        let Obj = this.state.data[this.state.root];
        let ObjectArray = [];
        for(let o in Obj){
            let objClass = Obj[o].class !== undefined && Obj[o].class !== null ? 'class="'+Obj[o].class+'"' : '';
            let objId = Obj[o].id !== undefined && Obj[o].id !== null ? 'id="'+Obj[o].id+'"' : '';
            let objContent = this.parseChildObject(Obj[o].content) !== undefined ? this.parseChildObject(Obj[o].content) : '';
            let ObjectTemplate = this.state.object.template
                .replace(/{-type-}/g,Obj[o].type)
                .replace(/{-class-}/g,objClass)
                .replace(/{-id-}/g,objId);
            ObjectTemplate = objContent !== undefined ? ObjectTemplate.replace(/{-content-}/g,objContent) : ObjectTemplate.replace(/{-content-}/g,'');
            ObjectArray.push(ObjectTemplate);
        }
        return(
            ObjectArray
        )
    }

    render(){
        let renderObject = DOMPurify.sanitize(this.parseJson());
        renderObject = renderObject.replace(',',''); //dirty fix
        return(
            <div className="object-wrapper" dangerouslySetInnerHTML={{__html: renderObject}} />
            )
    }
}

export default FormatHtml;
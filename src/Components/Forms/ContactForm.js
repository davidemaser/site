/**
 * Created by DAVIM on 26/04/2017.
 */
import React,{Component} from 'react';
import DOMPurify from 'dompurify';

class UserForm extends Component{
    constructor(props){
        super(props);
        this.state={
            origin:'self',
            destination:'mail'
        }
    }

    returnObjects(){
        let formArray = [];
        let formClosure = ['input'];
        let ObjectTemplate = '<{-tag-} {-type-} {-name-} {-id-} {-class-} {-placeholder-}';
        let formFrame=[
            {
                "tag":"input",
                "type":"text",
                "length":25,
                "name":"First Name",
                "placeholder":"First Name"
            },
            {
                "tag":"input",
                "type":"text",
                "length":25,
                "name":"Last Name",
                "placeholder":"Last Name"
            },
            {
                "tag":"textarea",
                "type":"text",
                "length":25,
                "name":"Last Name",
                "placeholder":"Last Name"
            }
        ];

        for(let f in formFrame){
            let objClass = formFrame[f].class !== undefined && formFrame[f].class !== null ? 'class="'+formFrame[f].class+'"' : '';
            let objId = formFrame[f].id !== undefined && formFrame[f].id !== null ? 'id="'+formFrame[f].id+'"' : '';
            let objType = formFrame[f].type !== undefined && formFrame[f].type !== null ? 'type="'+formFrame[f].type+'"' : '';
            let objName = formFrame[f].name !== undefined && formFrame[f].name !== null ? 'name="'+formFrame[f].name+'"' : '';
            let objPlaceholder = formFrame[f].placeholder !== undefined && formFrame[f].placeholder !== null ? 'placeholder="'+formFrame[f].placeholder+'"' : '';
            let OutputTemplate = ObjectTemplate
                .replace(/{-tag-}/g,formFrame[f].tag)
                .replace(/{-type-}/g,objType)
                .replace(/{-name-}/g,objName)
                .replace(/{-class-}/g,objClass)
                .replace(/{-id-}/g,objId)
                .replace(/{-placeholder-}/g,objPlaceholder);
            if(formClosure.indexOf(formFrame[f].tag)){
                OutputTemplate += ' />';
            }else{
                OutputTemplate = OutputTemplate+'></'+formFrame[f].tag+'>';
            }
            formArray.push(OutputTemplate);
        }

        return(
            formArray
        )
    }

    render(){
        let renderObject = DOMPurify.sanitize(this.returnObjects());
        renderObject = renderObject.replace(',',''); //dirty fix
        return(
            <div className="user-form">
                <form dangerouslySetInnerHTML={{__html: renderObject}} ></form>
            </div>
        )
    }
}

export default UserForm;
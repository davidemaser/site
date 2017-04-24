/**
 * Created by DAVIM on 21/04/2017.
 */
import React,{Component} from 'react';

class DoSomeMath extends Component{
    constructor(props){
        super(props);
        this.state = {
            a:parseInt(this.props.a,10),
            b:parseInt(this.props.b,10),
            type:this.props.method,
            operand:this.props.operand
        }
    }
    calculate(){
        let returnValue;
        let type = this.state.type;
        let a = this.state.a;
        let b = this.state.b;
        switch (type){
            case 'sum':
                returnValue = a+b;
                break;
            case 'multi':
                returnValue = a*b;
                break;
            case 'divi':
                returnValue = a/b;
                break;
            default:
                returnValue = a+b;
        }
        function applyOperand(val,op){
            let calcValue;
            switch (op){
                case 'ceil':
                    calcValue = Math.ceil(val);
                    break;
                case 'floor':
                    calcValue = Math.floor(val);
                    break;
                case 'round':
                    calcValue = Math.round(val);
                    break;
                default:
                    calcValue = val;
            }
            return calcValue;
        }
        return applyOperand(returnValue,this.state.operand);
    }

    render(){
        return(
            <div>
                {this.calculate()}
            </div>
        )
    }
}

export default DoSomeMath;
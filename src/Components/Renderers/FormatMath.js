/**
 * Created by DAVIM on 21/04/2017.
 */
import React,{Component} from 'react';

class DoSomeMath extends Component{
    constructor(props){
        super(props);
        this.state = {
            x:parseInt(this.props.x,10),
            y:parseInt(this.props.y,10),
            type:this.props.method,
            operand:this.props.operand
        }
    }
    calculate(){
        let returnValue;
        let type = this.state.type;
        let x = this.state.x;
        let y = this.state.y;
        switch (type){
            case 'sum':
                returnValue = x+y;
                break;
            case 'multi':
                returnValue = x*y;
                break;
            case 'divi':
                returnValue = x/y;
                break;
            default:
                returnValue = x+y;
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
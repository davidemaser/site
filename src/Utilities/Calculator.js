/**
 * Created by David Maser on 27/04/2017.
 */
import React,{Component} from 'react';
let calcView = [
    {
        'row':{
            'view':['result','clear','correct']
        }
    },
    {
        'row':[7,8,9],
        'func':'divide'
    },
    {
        'row':[4,5,6],
        'func':'times'
    },
    {
        'row':[1,2,3],
        'func':'minus'
    },
    {
        'row':[0],
        'func':['point','plus','equals']
    }
];
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state={
            calcView:''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(){
        document.getElementById('result-view').value = this.state.calcView;
    }

    handleClick(event){
        if(event.target.innerText === '='){
            this.setState({calcView:eval(this.state.calcView)})
        }else if(event.target.innerText === 'C'){
            this.setState({calcView:''})
        }else if(event.target.innerText === 'CE'){
            let formInput = document.getElementById('result-view');
            let formInputLength = formInput.value.length;
            this.setState({calcView:formInput.value.substr(0,formInputLength-1)})
        }else{
            this.setState({calcView:this.state.calcView+=event.target.innerText})
        }
    }

    renderFunc(obj){
        let funcArray = [];
        let symbolMap = {
            divide:'/',
            times:'*',
            minus:'-',
            point:'.',
            equals:'=',
            plus:'+'
        };
        if(typeof obj === 'object'){
            let o;
            for(o in obj){
                funcArray.push(<div key={o} itemProp="func" onClick={this.handleClick}>{symbolMap[obj[o]]}</div>);
            }
        }else{
            funcArray.push(symbolMap[obj]);
        }
        return(funcArray);
    }

    renderRow(obj){
        let rowArray = [];
        if(obj.row !== undefined && Array.isArray(obj.row)){
            let r;
            let row = obj.row;
            for(r in row){
                rowArray.push(<div itemProp="numeric" key={r} onClick={this.handleClick}>{row[r]}</div>)
            }
        }else{
            if(typeof obj.row === 'object'){
                let rowView = obj.row.view;
                for(let r in rowView){
                    if(rowView[r] === 'result'){
                        rowArray.push(<div itemProp="result"><input id="result-view" type="text"/></div>)
                    }else if(rowView[r] === 'clear'){
                        rowArray.push(<div itemProp="func" title="CLEAR" onClick={this.handleClick}>C</div>)
                    }else if(rowView[r] === 'correct'){
                        rowArray.push(<div itemProp="func" title="CORRECTION" onClick={this.handleClick}>CE</div>)
                    }
                }
            }

        }
        if(obj.func !== undefined){
            Array.isArray(obj.func) ?
                rowArray.push(<div className="funcGroup" itemProp="func">{this.renderFunc(obj.func)}</div>):
                rowArray.push(<div itemProp="func" onClick={this.handleClick}>{this.renderFunc(obj.func)}</div>);
        }
        return(
            rowArray
        )
    }

    renderView(){
        let c;
        let calcArray = [];
        for(c in calcView){
            calcArray.push(<div className="calc-row" key={c}>{this.renderRow(calcView[c])}</div>);
        }

        return(
            calcArray
        )
    }

    render(){
        return(<div>
            {this.renderView()}
            </div>
        )
    }
}

export default Calculator;
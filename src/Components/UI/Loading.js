/**
 * Created by DAVIM on 25/04/2017.
 */
import React,{Component} from 'react';
import './StyleSheets/LoadingComp.css';

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:this.props.color,
            background:this.props.background,
            opacity:'dark',
            show:this.props.show
        };

        this.showComp = this.showHideComp.bind(this);
    }

    showHideComp(){
        this.state.show === true ? this.setState({show:false}) : this.setState({show:true});
    }
    render(){
        let parentStyle = {
            backgroundColor:this.props.background
        };
        let childStyle = {
            borderLeftColor:this.props.color
        };
        let loaderBlock = this.state.show ? <div className="page-loading" style={parentStyle} onClick={this.showComp}>
            <div className="loader" style={childStyle} />
        </div> : <div className="page-loading-is-off"></div> ;
        return(
            loaderBlock
        )
    }
}

export default Loading;
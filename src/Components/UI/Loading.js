/**
 * Created by David Maser on 25/04/2017.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:this.props.color,
            background:this.props.background,
            show:this.props.show,
            error:this.props.error
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
            borderLeftColor:this.props.color,
            color:this.props.color
        };
        let loadInternal = this.state.error ? <div className="loader error" style={childStyle}><h1 style={childStyle}>Woops. Something went wrong.</h1></div> : <div className="loader" style={childStyle} />;
        let loaderBlock = this.state.show ? <div className="page-loading" style={parentStyle} onClick={this.showComp}>
            {loadInternal}
        </div> : null ;
        return(
            loaderBlock
        )
    }
}

Loading.propTypes = {
    background:PropTypes.string.isRequired,
    borderLeftColor:PropTypes.string,
    color:PropTypes.string.isRequired
};
Loading.defaultProps  = {
    background:'#000',
    borderLeftColor:'#fff',
    color:'#fff',
    show:true,
    error:false
};

export default Loading;
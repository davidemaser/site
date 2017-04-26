/**
 * Created by DAVIM on 24/04/2017.
 */
import React,{Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import './StyleSheets/BoxMarquee.css';

class BoxMarquee extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            drag:false
        };

        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render(){
        return(
        <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div className="BoxMarquee-Container">
                <RaisedButton className="BoxMarquee-Toggle" label="Toggle" onClick={this.changeState} />
                <div className="BoxMarquee" data-state={this.state.visible}>
                    <h1 className="BoxMarquee-Header">{this.props.title}</h1>
                    <p className="BoxMarquee-Content">{this.props.content}</p>
                    {this.props.children}
                </div>
            </div>
        </CSSTransitionGroup>
        )
    }
}

BoxMarquee.propTypes = {
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired
};

export default BoxMarquee;
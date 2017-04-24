/**
 * Created by DAVIM on 24/04/2017.
 */
import React,{Component} from 'react';

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
        <div className="box-marquee" data-state={this.state.visible} onClick={this.changeState}>
            <div className="box-marquee-header">{this.props.title}</div>
            <div className="box-marquee-content">{this.props.content}</div>
        </div>
        )
    }
}

export default BoxMarquee;
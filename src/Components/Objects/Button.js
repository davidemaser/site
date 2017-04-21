/**
 * Created by DAVIM on 20/04/2017.
 */
import React, {Component} from 'react';

class DaveButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            view:'up'
        }
    }

    render(){
        return(
            <button style={this.props.style}>{this.props.label}</button>
        )
    }
}

export default DaveButton;
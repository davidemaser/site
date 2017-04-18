/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component} from 'react';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            node:this.props.node
        }
    }
    render(){
        return (
            <nav>Here's the nav</nav>
        )
    }
}

export default Nav;
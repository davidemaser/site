/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component} from 'react'
import Nav from "./Nav";
import Search from "./Search";
import FormatHtml from "./Renderers/FormatHtml";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            node:this.props.node
        }
    }
    render(){
        return(
            <header>
                <FormatHtml data={this.state.data[this.state.node]}/>
                This is the header
                <Nav data={this.state.data} node="nav"/>
                <Search/>
            </header>
        )
    }
}

export default Header;
/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component} from 'react'
import Nav from "./Nav";
import Search from "./Search";

class Header extends Component{
    render(){
        return(
            <header>
                This is the header
                <Nav/>
                <Search/>
            </header>
        )
    }
}

export default Header;
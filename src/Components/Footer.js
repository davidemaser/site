/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component} from 'react';
import FormatHtml from "./Renderers/FormatHtml";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            node:this.props.node
        }
    }
    render(){
        return(
            <footer>
                <FormatHtml data={this.state.data[this.state.node]}/>
                THis is the footer
            </footer>
        )
    }
}

export default Footer;
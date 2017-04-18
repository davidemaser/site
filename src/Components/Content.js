/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component} from 'react';
import FormatHtml from "./Renderers/FormatHtml";

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            node:this.props.node
        }
    }
    render(){
        return(
            <section>
                <FormatHtml data={this.state.data[this.state.node]}/>
                Here's the core content
            </section>
        )
    }
}

export default Content;
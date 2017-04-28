/**
 * Created by David Maser on 17/04/2017.
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
        let dataSet = this.state.data[this.state.node];
        let dataArray = [];
        for(let d in dataSet){
            dataArray.push(
                <div key={d} className="NavItem">
                    <a href={dataSet[d].link} data-click={dataSet[d].prop}>{dataSet[d].label}</a>
                </div>
            )
        }

        return (
            <nav className="NavBlock">
                {dataArray}
            </nav>
        )
    }
}

export default Nav;
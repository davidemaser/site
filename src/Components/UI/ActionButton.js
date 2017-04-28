/**
 * Created by David Maser on 18/04/2017.
 */
import React, {Component} from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Popover from "material-ui/Popover/Popover";
import {Menu, MenuItem} from "material-ui/Menu";

class ActionButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            anchorOrigin: {
                horizontal: 'left',
                vertical: 'bottom',
            },
            targetOrigin: {
                horizontal: 'left',
                vertical: 'top',
            },
        };
    }
    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render(){
        const style = {
            marginRight: 20,
            marginBottom:20,
            position:'absolute',
            bottom:0,
            right:0
        };

        return(
            <div>
                <FloatingActionButton style={style} onTouchTap={this.handleTouchTap}>
                    <ContentAdd />
                </FloatingActionButton>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={this.state.anchorOrigin}
                    targetOrigin={this.state.targetOrigin}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help &amp; feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </Menu>
                </Popover>
            </div>
        )
    }
}

export default ActionButton;

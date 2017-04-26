/**
 * Created by David Maser on 26/04/2017.
 * This component will wrap all it's children
 * in a section with specific background and
 * text color
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
/*
* See colors in getColorFromComp function to add
* or use existing colors.
* */
class BlockView extends Component{
    constructor(props){
        super(props);
        this.state={
            bgColor:this.props.background,
            txtColor:this.props.color
        };

    }

    getColorFromComp(col){
        let colorChoice;
        const colors = {
            1:'#525564',
            2:'#74828f',
            3:'#96c0ce',
            4:'#beb9b5',
            5:'#c25b56',
            6:'#fef6eb',
            7:'#ededed'
        };
        if(isNaN(col)){
            colorChoice = col;
        }else{
            colorChoice = colors[col]
        }
        return colorChoice;
    }

    render(){
        const style = {
            backgroundColor:this.getColorFromComp(this.props.background),
            color:this.getColorFromComp(this.props.color)
        };
        return(
            <section className="block-view" style={style}>
                {this.props.children}
            </section>
        )
    }
}
BlockView.propTypes = {
    background:PropTypes.any,
    color:PropTypes.any
};
export default BlockView;
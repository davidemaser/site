/**
 * Created by DAVIM on 21/04/2017.
 */
import React,{Component} from 'react';
import DataList from '../../Data/Table.json';

class TableView extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            dataList:DataList.table
        }
    }

    buildHeader(data){
        let headParams = {
            id:data.id || '',
            class:data.class || '',
            style:data.style || ''
        };
        let headRows = data.rows;
        let headArray = [];
        let h;
        for(h in headRows){
            headArray.push(
                <tr key={h} className={headRows[h].class} style={headRows[h].style}>{this.buildColumn(headRows[h].columns)}</tr>
            )
        }

        return(
            <thead id={headParams.id} className={headParams.class} style={headParams.style}>
            {headArray}
            </thead>
        )
    }

    buildFooter(data){
        let footParams = {
            id:data.id || '',
            class:data.class || '',
            style:data.style || ''
        };
        let footRows = data.rows;
        let footArray = [];
        let f;
        for(f in footRows){
            footArray.push(
                <tr key={f} className={footRows[f].columns} style={footRows[f].style}>{this.buildColumn(footRows[f].columns)}</tr>
            )
        }

        return(
            <tfoot id={footParams.id} className={footParams.class} style={footParams.style}>
            {footArray}
            </tfoot>
        )
    }

    buildRow(data){
        let rows = data;
        let rowArray = [];
        let r;
        for(r in rows){
            rowArray.push(
                <tr key={r} className={rows[r].class} style={rows[r].style}>{this.buildColumn(rows[r].columns)}</tr>
            )
        }

        return (
            <tbody>
            {rowArray}
            </tbody>
        )
    }

    buildColumn(content){
        let columnArray = [];
        let c;
        if(typeof content === 'object'){
            let column = content;
            for(c in column){
                columnArray.push(
                    <td key={c}>{column[c].content}</td>
                )
            }
        }
        return columnArray;
    }

    render(){
        return(
            <table className={this.state.dataList.class} style={this.state.dataList.style}>
                {this.buildHeader(this.state.dataList.header)}
                {this.buildRow(this.state.dataList.rows)}
                {this.buildFooter(this.state.dataList.footer)}
            </table>
        )
    }
}

export default TableView;
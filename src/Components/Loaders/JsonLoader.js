/**
 * Created by DAVIM on 21/04/2017.
 */
import React,{Component} from 'react';
import Request from 'react-http-request';
import TableView from "../Renderers/TableView";

class LoadJson extends Component{

    render(){
        return(
            <Request
                url={this.props.url}
                method={this.props.method}
                accept='application/json'
                verbose={false}
                timeout={5000}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <div>loading...</div>;
                        }else if (error) {
                            return <div>Woops....</div>
                        } else {
                            let data = result.body[this.props.target];
                            return <TableView data={data}/>
                        }
                    }
                }
            </Request>
        )
    }
}

export default LoadJson;
/**
 * Created by David Maser on 21/04/2017.
 */
import React,{Component} from 'react';
import Request from 'react-http-request';
import TableView from "../Renderers/TableView";
import Loading from "../UI/Loading";

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
                            return <Loading background="rgba(0, 0, 0, 0.85)" color="#fff" show={true} error={false} />
                        }else if (error) {
                            return <Loading background="rgba(0, 0, 0, 0.85)" color="#fff" show={true} error={true} />
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
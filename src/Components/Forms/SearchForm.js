/**
 * Created by DAVIM on 26/04/2017.
 */
import React,{Component} from 'react';

class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state={
            async:true
        };
        this.processChange = this.processChange.bind(this);
    }

    processChange(event, index, value){
        console.log(event.target.value,index);
        this.setState({term:event.target.value})
    }

    render(){
        return(
            <div className="search-form">
                <input id="search-form-input" type="text" maxLength={25} onKeyUp={this.processChange} />
                {this.state.async ?
                    <div className="search-form-results">

                    </div> :
                    null
                }
            </div>
        )
    }
}

export default SearchForm;
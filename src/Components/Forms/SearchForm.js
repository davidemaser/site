/**
 * Created by DAVIM on 26/04/2017.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state={
            async:this.props.async,
            term:''
        };
        this.processChange = this.processChange.bind(this);
    }

    processChange(event){
        this.setState({term:event.target.value});
        console.log(event.target.value,this.state.term !== undefined ? this.state.term.length : '');
    }

    render(){
        return(
            <div className="search-form">
                <input id="search-form-input" type="text" placeholder={this.props.placeholder} maxLength={25} onKeyUp={this.processChange} />
                {this.state.async ?
                    <div className="search-form-results">

                    </div> :
                    null
                }
            </div>
        )
    }
}

SearchForm.propTypes = {
    placeholder:PropTypes.string,
    async:PropTypes.any.isRequired
}

export default SearchForm;
/**
 * Created by David Maser on 27/04/2017.
 */
import React,{Component} from 'react';

class SearchResults extends Component{
    render(){
        return(
            <div id="search-results">
                {this.props.keys}
            </div>
        )
    }
}

export default SearchResults;
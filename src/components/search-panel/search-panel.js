import React, {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component{

    onChangeHandler = (event)=>{
        this.props.onSearch(event.target.value)
    }

    render(){
        return(
            <input
                className="search-input form-control"
                placeholder={"Type here to search"}
                onChange={this.onChangeHandler}
                value={this.props.searchData}
            />
        );
    }
}

export default SearchPanel;
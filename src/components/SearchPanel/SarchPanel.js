import React, {Component} from 'react';
import './searchPanel.css';

const SarchPanel  = ({onSearch, searchData}) => {
    const onChangeHandler = (event)=>{
        onSearch(event.target.value)
    }

    return(
        <input
            className="search-input form-control"
            placeholder={"Type here to search"}
            onChange={onChangeHandler}
            value={searchData}
        />
    );
}

export default SarchPanel;
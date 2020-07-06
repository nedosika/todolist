import React from 'react';
import './searchPanel.css';

const SearchPanel  = ({onSearch, searchData}) => {
    const onChangeHandler = (event)=>{
        onSearch(event.target.value)
    }

    return(
        <input
            className="searchInput form-control"
            placeholder={"Type here to search"}
            onChange={onChangeHandler}
            value={searchData}
        />
    );
}

export default SearchPanel;
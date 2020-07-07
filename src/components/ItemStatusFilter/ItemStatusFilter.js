import React from 'react';

import "./itemStatusFilter.css"

const ItemStatusFilter = ({onChangeFilter, currentFilter}) => {
    const onClickHandler = (e) => {
        onChangeFilter(e.target.textContent);
    }

    let btnAllClassName = "btn btn-outline-secondary";
    let btnActiveClassName = "btn btn-outline-secondary";
    let btnInfoClassName = "btn btn-outline-secondary";

    switch (currentFilter) {
        case "All":
            btnAllClassName = "btn btn-info";
            break;
        case "Active":
            btnActiveClassName = "btn btn-info";
            break;
        case "Info":
            btnInfoClassName = "btn btn-info";
            break;
        default:
            break;
    }

    return (
        <div className="btn-group" onClick={onClickHandler}>
            <button type="button" className={btnAllClassName}>All</button>
            <button type="button" className={btnActiveClassName}>Active</button>
            <button type="button" className={btnInfoClassName}>Done</button>
        </div>
    );
}

export default ItemStatusFilter;
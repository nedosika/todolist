import React, {Component} from 'react';

import "./item-status-filter.css"

class ItemStatusFilter extends Component{
    onClickHandler = (e)=>{
        const {onChangeFilter} = this.props;

        onChangeFilter(e.target.textContent);
    }

    render() {
        let btnAllClassName = "btn btn-outline-secondary";
        let btnActiveClassName = "btn btn-outline-secondary";
        let btnInfoClassName = "btn btn-outline-secondary";

        const {currentFilter} = this.props;

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

        return(
            <div className="btn-group" onClick={this.onClickHandler}>
                <button type="button" className={btnAllClassName}>All</button>
                <button type="button" className={btnActiveClassName}>Active</button>
                <button type="button" className={btnInfoClassName}>Done</button>
            </div>
        );
    }
}

export default ItemStatusFilter;
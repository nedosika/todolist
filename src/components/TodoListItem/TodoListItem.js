import React from 'react';
import './todoListItem.css';

const TodoListItem = ({label, onDelete, onToggleImportant, onToggleDone, done, important}) => {
    let styleLabel = "todoListItemLabel";
    let styleItem = "todoListItem";

    if(done)
        styleItem += " done";
    if(important)
        styleLabel += " important"

    return(
        <span className={styleItem} >
            <span
                className={styleLabel}
                onClick={onToggleDone}
            >{label}</span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}>
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
}

export default TodoListItem;
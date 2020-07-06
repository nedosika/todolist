import React from 'react';
import TodoListItem from '../TodoListItem';
import './todoList.css';

const TodoList = ({todoData, onDelete, onToggleImportant, onToggleDone}) => {
    const elements = todoData.map(item => {
        const {id, ...itemProps} = item;

        return (
            <li className="listGroupItem" key={id}>
                <TodoListItem {...itemProps}
                              onDelete={() => onDelete(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleDone = {() => onToggleDone(id)}
                              todoData={todoData}
                />
            </li>
        );
    });

    return(
    <ul className="listGroup todoList">
        {elements}
    </ul>
    );
}

export default TodoList;
import React, {Component} from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

class TodoList extends Component{

    render() {
        const {todoData, onDelete, onToggleImportant, onToggleDone} = this.props;

        const elements = todoData.map(item => {

            const {id, ...itemProps} = item;

            return (
                <li className="list-group-item" key={id}>
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
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    }
}

export default TodoList;
import React from 'react';
import Timer from '../Timer';
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";
import AddItemForm from "../AddForm";

import './app.css';

const App = () => {
    const [todoData, setTodoData] = React.useState([
        {id: 0, label: "Learn React", important: true, done: false},
        {id: 1, label: "Learn JavaScript", important: false, done: false},
        {id: 2, label: "Learn HTML and CSS", important: false, done: true},
        {id: 3, label: "Learn Bootstrap", important: false, done: false}
    ]);
    const [searchData, setSearchData] = React.useState("");
    const [filter, setFilter] = React.useState("All");

    const removeItem = (id) =>{
        setTodoData( (todoData) => [...todoData.filter(item => item.id !== id)]);
    }

    const addItem = (label) => {
        const newItem = {id: todoData.length, label: label, important: false};
        setTodoData( (todoData) => [...todoData, newItem]);
    }

    const toggleProperty = (id, propName) => {
        const index = todoData.findIndex(element=> element.id === id);
        const oldItem = todoData[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        setTodoData(
            (todoData) => [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)]
        );
    }

    const toggleImportant = (id) => {
        toggleProperty(id, "important");
    }

    const toggleDone = (id) => {
        toggleProperty(id, "done");
    }

    const searchItems = (items, term) => {
        return items.filter(element =>
            element.label.toLowerCase().includes(term.toLowerCase())
        );
    }

    const filterItems = (items, filter) => {
        switch (filter) {
            case "Active":
                return  items.filter(element => !element.done);
            case "Done":
                return items.filter(element => element.done);
            default:
                return items;
        }
    }


    const doneCount = todoData.filter(element => element.done).length;

    let renderData = filterItems(searchItems(todoData, searchData), filter);

    return(
        <div className="app">
            <Timer/>
            <Header todo={todoData.length - doneCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel
                    onSearch={setSearchData}
                    searchData={searchData}
                />
                <ItemStatusFilter
                    onChangeFilter={setFilter}
                    currentFilter={filter}
                />
            </div>
            <TodoList
                todoData={renderData}
                onDelete={removeItem}
                onToggleImportant={toggleImportant}
                onToggleDone={toggleDone}
            />
            <AddItemForm onAdd={addItem}/>
        </div>
    );
}

export default App;
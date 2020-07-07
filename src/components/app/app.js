import React, {Component} from 'react';
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../TodoList";
import AddItemForm from "../add-form";

import './app.css';

class App extends Component{
    state = {
        todoData :[
            {id: 0, label: "Learn React", important: true, done: false},
            {id: 1, label: "Learn JavaScript", important: false, done: false},
            {id: 2, label: "Learn HTML and CSS", important: false, done: true},
            {id: 3, label: "Learn Bootstrap", important: false, done: false}
        ],
        searchData: "",
        filter: "All"
    }

    removeItem = (id) =>{
        this.setState(({todoData}) =>{
            //let index = todoData.findIndex(el => el.id === id);
            return(
                {
                    //todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)]
                    todoData: [...todoData.filter(item => item.id !== id)]
                }
            );
        })
    }

    addItem = (label) => {
        this.setState(({todoData}) => {

            const newItem = {id: todoData.length, label: label, important: false};

            return(
                {
                    todoData: [...todoData, newItem]
                }
            );
            }
        )
    }

    toggleProperty(id, propName){
        this.setState(({todoData}) => {
            const index = todoData.findIndex(element=> element.id === id);
            const oldItem = todoData[index];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            return(
                {
                    todoData: [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)]
                }
            );
        })
    }

    toggleImportant = (id) => {
        this.toggleProperty(id, "important");
    }

    toggleDone = (id) => {
        this.toggleProperty(id, "done");
    }

    onSearchItem = (text) =>{
        this.setState(
            {
                searchData: text
            }
        )
    }

    changeFilter = (filter) =>{
        this.setState({ filter })
    }

    searchItems(items, term){
        return items.filter(element =>
            element.label.toLowerCase().includes(term.toLowerCase())
        );
    }

    filterItems(items, filter){
        switch (filter) {
            case "Active":
                return  items.filter(element => !element.done);
            case "Done":
                return items.filter(element => element.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData, searchData, filter} = this.state;

        const doneCount = todoData.filter(element => element.done).length;

        let renderData = this.filterItems(this.searchItems(todoData, searchData), filter);

        return(
            <div className="app">
                <span>{(new Date()).toString()}</span>
                <Header todo={todoData.length - doneCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearch={this.onSearchItem}
                        searchData={searchData}
                    />
                    <ItemStatusFilter
                        onChangeFilter={this.changeFilter}
                        currentFilter={this.state.filter}
                    />
                </div>
                <TodoList
                    todoData={renderData}
                    onDelete={this.removeItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}
                />
                <AddItemForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
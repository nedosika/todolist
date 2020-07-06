import React, {Component} from 'react';
import "./add-form.css"

class AddItemForm extends Component{

    state = {
        inputLabel: ""
    }

    onChangeHandler = (event)=>{
        //console.log(event.target.value)
        this.setState({
            inputLabel: event.target.value
        });
    }

    onClickHandler = () =>{
        const {onAdd} = this.props;
        onAdd(this.state.inputLabel);
        this.setState({
            inputLabel: ""
        });
    }

    render(){

        return(
            <div className="add-form btn-group">
                <input
                    type="text"
                    className="search-input form-control"
                    onChange={this.onChangeHandler}
                    value={this.state.inputLabel}
                    placeholder={"Type here to create new task"}
                />
                <button className="btn btn-info" onClick={this.onClickHandler}>Add</button>
            </div>
        );
    }
}

export default AddItemForm;
import React from 'react';
import "./addForm.css"

const AddItemForm = ({onAdd}) =>{
    const [inputLabel, setInputLabel] = React.useState("");

    const onChangeHandler = (event) => {
        setInputLabel(event.target.value);
    }

    const onClickHandler = () =>{
        onAdd(inputLabel);
        setInputLabel("");
    }

    return(
        <div className="add-form btn-group">
            <input
                type="text"
                className="search-input form-control"
                onChange={onChangeHandler}
                value={inputLabel}
                placeholder={"Type here to create new task"}
            />
            <button className="btn btn-info" onClick={onClickHandler}>Add</button>
        </div>
    );
}

export default AddItemForm;
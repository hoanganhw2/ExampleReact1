import React, { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState('');

    const handleClick = () => {
        if (valueInput.trim() !== '') {
            props.addNewTodo(valueInput);
            setValueInput('');
        }
    }

    const handleOnChange = (event) => {
        setValueInput(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                placeholder='Add a new task'
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
                value={valueInput}
            />
            <button onClick={handleClick}>Add</button>
            <div>My text input: {valueInput}</div>
        </div>
    );
};

export default TodoNew;
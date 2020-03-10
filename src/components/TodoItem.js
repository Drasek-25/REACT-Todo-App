import React, { useState } from 'react';
import RefreshButton from './RefreshButton';
import DeleteButton from './DeleteButton';
import TodoValueSwitch from './TodoValueSwitch';

function TodoItem({ value, index, deleteTodo, updateTodo }) {

    const [toggle, setToggle] = useState(false);

    const toggleSwitch = () => {
        setToggle(!toggle)
    }

    return (
        <div className='row todoItem'>
            <TodoValueSwitch value={value} index={index} toggle={toggle} updateTodo={updateTodo} toggleSwitch={toggleSwitch} />
            <RefreshButton index={index} toggleSwitch={toggleSwitch} />
            <DeleteButton index={index} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoItem;
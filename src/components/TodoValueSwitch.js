import React from 'react';

function TodoValueSwitch({ index, value, toggle, updateTodo, toggleSwitch }) {
    function handleClick(e) {
        if (e.key === 'Enter') {
            toggleSwitch()
        }
    }

    let mySpan = <span
        className='todoText'
        id={index}
    >{value}</span>;

    let myInput = <input
        autoFocus='true'
        onFocus={e => e.currentTarget.select()}
        className='todoText'
        type='text'
        value={value}
        onChange={(e) => updateTodo(e.target.value, index)}
        onKeyDown={(e) => handleClick(e)}
    ></input>;

    return (
        <>
            {toggle === false ? mySpan : myInput}
        </>
    );

}

export default TodoValueSwitch;

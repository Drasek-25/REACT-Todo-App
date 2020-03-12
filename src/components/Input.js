import React from 'react'

function Input({addTodo, setInputText, defaultValue, inputText}){

    function handleClick(e) {
        if (e.key === 'Enter') {
            e.target.blur()
            addTodo(inputText)
            setInputText(defaultValue)
        }
    }

    return(
        <input
        onFocus={e => e.currentTarget.select()}
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleClick(e)}
    ></input>
    );
}

export default Input;
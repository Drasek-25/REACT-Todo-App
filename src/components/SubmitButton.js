import React from 'react'

function SubmitButton({addTodo, inputText, defaultValue, setInputText}){
    return(
        <button 
        type='submit' 
        className='largeButton submit'
        onClick={()=>{
            addTodo(inputText);
            setInputText(defaultValue);
        }}
        >Submit</button>
    );
}

export default SubmitButton;
import React, {useState} from 'react'
import SubmitButton from './SubmitButton'
import Input from './Input'

function Additem({ title, addTodo }) {
    const defaultValue = 'Add a new Todo' 
    const [inputText, setInputText] = useState(defaultValue);

    return (
        <div className='col addItem'>
            <h3 className='addTodo'>{title}</h3>
            <div className='row inputSubmitRow'>
                <Input 
                inputText={inputText} 
                defaultValue={defaultValue} 
                addTodo={addTodo} 
                setInputText={setInputText}/>
                <SubmitButton 
                addTodo={addTodo}
                inputText={inputText} 
                defaultValue={defaultValue}
                setInputText={setInputText} />
            </div>
        </div>
    );
}
export default Additem;
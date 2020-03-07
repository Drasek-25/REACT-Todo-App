import React from 'react'
import SubmitButton from './SubmitButton'
import Input from './Input'

function Additem(){
    return(
        <div className='col addItem'>
        <h3>Add Todo</h3>
        <div className='row inputSubmitRow'>
            <Input />
            <SubmitButton/>
        </div>
        </div>
    );
}
export default Additem;
import React from 'react'
import SubmitButton from './SubmitButton'
import Input from './Input'

function Additem({ title }) {
    return (
        <div className='col addItem'>
            <h3>{title}</h3>
            <div className='row inputSubmitRow'>
                <Input />
                <SubmitButton />
            </div>
        </div>
    );
}
export default Additem;
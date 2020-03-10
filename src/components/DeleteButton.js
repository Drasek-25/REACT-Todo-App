import React from 'react';

function DeleteButton({ index, deleteTodo }) {
    return (
        <button
            type='submit'
            className='button smallButton deleteButton'
            onClick={() => deleteTodo(index)}
        >X</button>
    );
}

export default DeleteButton;
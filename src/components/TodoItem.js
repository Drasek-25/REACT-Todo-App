import React from 'react';
import RefreshButton from './RefreshButton';
import DeleteButton from './DeleteButton';

function TodoItem({ value }) {
    return (
        <div className='row todoItem'>
            <span className='todoText'>{value}</span>
            <RefreshButton />
            <DeleteButton />
        </div>
    );
}

export default TodoItem;
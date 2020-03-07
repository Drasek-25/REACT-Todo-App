import React from 'react';
import RefreshButton from './RefreshButton';
import DeleteButton from './DeleteButton';

function TodoItem(){
    return(
        <div className='row todoItem'>
            <span className='todoText'>Item 1</span>
            <RefreshButton/>
            <DeleteButton/>
        </div>
    );
}

export default TodoItem;
import React from 'react';
import TodoItem from './TodoItem';

function Todo(){
    return(
        <div className='col todos'>
            <h2>Todos</h2>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            
        </div>
    );
}

export default Todo;
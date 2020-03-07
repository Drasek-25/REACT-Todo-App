import React from 'react';
import TodoItem from './TodoItem';

function Todo() {
    const todoList = ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4']
    return (
        <div className='col todos'>
            <h2>Todos</h2>
            {todoList.map(val => (
                <TodoItem value={val} />
            ))}
        </div>
    );
}

export default Todo;
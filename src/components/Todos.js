import React from 'react';
import TodoItem from './TodoItem';

function Todo({ todos, deleteTodo, updateTodo }) {
    return (
        <div className='col todos'>
            <h2>Todos</h2>
            {todos.map((obj) => (
                < TodoItem value={obj.value} index={obj.id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </div>
    );
}

export default Todo;
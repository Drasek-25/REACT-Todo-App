import React, { useState } from 'react';
import TodoItem from './TodoItem';

function Todo() {

    const [todos, setTodos] = useState(
        ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4']
    );

    // [
    //     {'0': 'List Item 1'},
    //     {'1': 'List Item 2'},
    //     {'': 'List Item 3'},
    //     {'0': 'List Item 4'}
    // ]


    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const updateTodo = (value, index) => {
        const newTodos = [...todos];
        newTodos[index] = value;
        setTodos(newTodos)
    }

    return (
        <div className='col todos'>
            <h2>Todos</h2>
            {todos.map((value, index) => (
                < TodoItem value={value} index={index} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </div>
    );
}

export default Todo;
import React, { useState } from 'react';
import AddItem from './AddItem'
import Todos from './Todos'

function MainContent() {

    const [todos, setTodos] = useState(
        [
            { id: 1, value: 'List Item 1' },
            { id: 2, value: 'List Item 2' },
            { id: 3, value: 'List Item 3' },
            { id: 4, value: 'List Item 4' }
        ]
    );

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        const changeTodo = newTodos.filter(obj => obj.id !== index);
        setTodos(changeTodo);
    }
    const updateTodo = (value, index) => {
        const newTodos = [...todos];
        const changeTodo = newTodos.filter(obj => obj.id === index);
        changeTodo[0].value = value;
        setTodos(newTodos)
    }
    const addTodo = (value) => {
        let newId = 0;
        todos[0] && (newId = todos[todos.length - 1].id)
        newId++;
        const newTodo = { id: newId, value: value };
        setTodos([...todos, newTodo])
    }

    return (
        <div className='col mainContent'>
            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            <AddItem title='Add Todo' addTodo={addTodo} />
        </div>
    );
}
export default MainContent;
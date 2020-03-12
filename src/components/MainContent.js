import React, { useState } from 'react';
import AddItem from './AddItem'
import Todos from './Todos'

function MainContent() {

    const [todos, setTodos] = useState(
        ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4']
    );


    // [
    //     {id:1, value:'List Item 1'},
    //     {id:2, value:'List Item 2'},
    //     {id:3, value:'List Item 3'},
    //     {id:4, value:'List Item 4'}
    // ]

    // const [todos, setTodos] = useState(
    // [{id:1, label: 'list item 1',} 'List Item 2', 'List Item 3', 'List Item 4']
    // );

    // updateTodo(value) {
    //    setTodos([...todos.filter(x => x.id !== value.id), ...value])
    // }

    // const updateTodo = (value, orgValue) => {
    //     const newTodos = [...todos.filter(x => x.id !== orgValue.id), ...orgValue];
    //     setTodos(newTodos)
    // }

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
        <div className='col mainContent'>
            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            <AddItem title='Add Todo' />
        </div>
    );
}
export default MainContent;
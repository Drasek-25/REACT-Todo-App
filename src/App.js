import React from 'react';
import './App.css';
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <div className='col header'>
        <h1>Todo App</h1>
      </div>
      <div className="shadow" />
      <MainContent />
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import ToDoList from './components/toDoList';


function App() {

  return (
    <div className="App">
      <header>
            <h1>To Do's</h1>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;

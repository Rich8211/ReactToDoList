import React, { useState, useEffect, useReducer } from 'react'
import { reducer } from './reducer/reducer'
import './App.css';
import { ItemContext } from './context/Context';
import ToDoList from './components/toDoList';


function App() {

  const [toDoItems, setToDoItems] = useState([]);
  
  useEffect(() => {
    if (localStorage.getItem('todos') !== null) 
      setToDoItems(JSON.parse(localStorage.getItem('todos'))); 
  },[])

  const [items,dispatch] = useReducer(reducer, 
    {items: toDoItems});

  return (
    <div className="App">
      <header>
            <h1>To Do's</h1>
      </header>
      <ItemContext.Provider value={items, dispatch, reducer}>
        <ToDoList />
      </ItemContext.Provider>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react'
import ToDoItem from './todoItem'

import './toDoList.css'

const ToDoList = () => {

    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');
    const [toDoItems, setToDoItems] = useState([]);
  
    useEffect(() => {
        if (localStorage.getItem('toDoItems') !== null) 
        setToDoItems(JSON.parse(localStorage.getItem('toDoItems'))); 
    },[])

    useEffect(() => {
        localStorage.setItem('toDoItems',JSON.stringify(toDoItems))
    }, [toDoItems])

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setToDoItems(toDoItems => [...toDoItems, input]);
            setInput('')
        }
        else window.alert("Please fill out a to-do item");
        // localStorage.setItem('toDoItems',JSON.stringify(toDoItems));
        // console.log(toDoItems);
        // console.log(JSON.parse(localStorage.getItem('toDoItems')));
    }

    const deleteToDo = (index) => {
        setToDoItems(toDoItems.filter((item, i) => i !== index));
        localStorage.setItem('toDoItems',JSON.stringify(toDoItems));
    }

    const changeFilter = (e) => {
        setFilter(e.target.value)
    };
    
    return (
        <>
            <form action="">
                <input type="text" className="todo-input" placeholder="Add to do" onChange={(e) => setInput(e.target.value)} value={input}/>
                <button className="todo-button" type="submit" onClick={addTodo}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-to-do" onChange={changeFilter} value={filter}>
                        <option value="all">All</option>
                        <option value="complete">Completed</option>
                        <option value="not-complete">Not Complete</option>
                    </select>
                </div>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {[...toDoItems]?.map((item, index) => 
                       <ToDoItem handleDelete={() => deleteToDo(index)} filter={filter} item={item} index={index} key={index} />
                    )}
                </ul>
            </div>
        </>
        
    )
}

export default ToDoList;
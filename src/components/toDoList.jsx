import React, {useState, useContext} from 'react'
import ToDoItem from './todoItem'
import { ItemContext } from '../context/Context'

import './toDoList.css'

const ToDoList = () => {
    
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');
    const {items, dispatch} = useContext(ItemContext);

    const addTodo = () => {
        if (input.trim() === '') return;
        dispatch({type: 'ADD_ITEM', payload: input});
        localStorage.setItem('todos',JSON.stringify(items));
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    console.log(items)
    
    return (
        <>
            <form action="">
                <input type="text" className="todo-input" placeholder="Add to do" onChange={handleChange}/>
                <button className="todo-button" type="submit" onClick={addTodo(input)}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-to-do" onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="not-completed">Not Complete</option>
                    </select>
                </div>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {items.map((item, index) => {
                       <ToDoItem filter={filter} item={item} index={index} key={index} />
                    })}
                </ul>
            </div>
        </>
        
    )
}

export default ToDoList;
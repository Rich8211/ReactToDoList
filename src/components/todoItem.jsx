import React, {useState} from 'react';
import './todoItem.css';

const ToDoItem = ({item, filter, index, handleDelete}) => {

    const [status, setStatus] = useState('not-complete')

    const changeStatus = (e) => {
        e.preventDefault();
        setStatus(status === 'not-complete' ? 'complete': 'not-complete')
    }

    return (
        <>
            {
                filter === 'all' ? 
                <div className={status === 'complete' ? 'todo complete' : 'todo'}>
                    <li className="todo-item">
                        {item}
                    </li>
                    <button 
                        onClick={changeStatus}
                        className={'complete-btn'}>
                        <i className="fa fa-check"/>
                    </button>
                    <button className="trash-btn" onClick={handleDelete}>
                        <i className="fa fa-trash" />
                    </button>
                </div> 
                :
                (filter === status) && 
                <div className="todo">
                    <li className="todo-item">
                        {item}
                    </li>
                    <button 
                        onClick={() => setStatus(status === 'not-complete' ? 'complete': 'not-complete')} 
                        className={status === 'complete' ? 'complete-btn complete' : 'complete-btn'}>
                        <i className="fa fa-check"/>
                    </button>
                    <button className="trash-btn" onClick={handleDelete}>
                        <i className="fa fa-trash" />
                    </button>
                </div> 
            }
        </>    
    )
}

export default ToDoItem;
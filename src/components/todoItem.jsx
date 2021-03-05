import React, {useState, useContext} from 'react'
import { ItemContext } from '../context/Context'

const ToDoItem = ({item, filter, index}) => {

    const [status, setStatus] = useState('not-complete')

    const {items, dispatch} = useContext(ItemContext);

    const handleDelete = () => {
        dispatch({type: 'DELETE_ITEM', payload: index});
        localStorage.setItem('todos',JSON.stringify(items));
    }

    return (
        <>
            {
                filter === 'all' ? 
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
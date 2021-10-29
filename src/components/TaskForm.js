import React, { useContext,useState,useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
const TaskForm = () => {
   
    const {addTask,clearList,editTask,editItem}=useContext(TaskListContext)
    const [title,setTitle]=useState('')

    
    const handleSubmit=(e)=>{
        e.preventDefault();
       if(!editItem){
           addTask(title)
           setTitle('')
       }else{
           editTask(title,editItem.id)
       }
    }
    const handleChange=(e)=>{
        setTitle(e.target.value)
        
    }
    useEffect(()=>{
       if(editItem){
           setTitle(editItem.title)
       }else{
           setTitle('')
       }
    },[editItem])
    return (
       <form onSubmit={handleSubmit} className="form">
       <input type="text" 
       className="task-input" 
       onChange={handleChange}
       value={title}
       required
       placeholder="Add task.."
       />
       <div className="buttons">
       <button type="submit" className="btn add-task-btn">
         {editItem ? 'Edit Task':'Add Task'}
       </button>
       <button className="btn clear-btn"
       onClick={clearList}
       > 
        clear
       </button>
       </div>
       </form>
    )
}

export default TaskForm

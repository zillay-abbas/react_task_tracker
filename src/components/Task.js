import { FaTimes } from "react-icons/fa";

const Task = ({ task , onDel, onTogg }) => {
    return (
        <div className = {`task ${task.reminder ? 
        'reminder': ''}`} 
        onDoubleClick = {()=>onTogg(task.id)}>
            <h3>
                {task.text} 
                <FaTimes style = {{color : 'red',
                 cursor : 'pointer'}} onClick = {() => onDel(task.id)}  
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

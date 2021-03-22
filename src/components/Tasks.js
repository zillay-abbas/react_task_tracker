import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <div>
            {tasks.map( (task)=> (
                <Task key = {task.id} task = {task}
                 onDel = {onDelete} onTogg = {onToggle}/>               
            ))}
        </div>
    )
}

export default Tasks

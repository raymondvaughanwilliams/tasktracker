import {FaTimes} from 'react-icons/fa'
const Task = ({task , onDelete, onToggle, onComplete}) => {
  return (
    <div className={ `task ${task.reminder ? 'reminder' :''  }`} onDoubleClick={()=> onToggle(task.id)}>
      
        <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id)} style={{color:'red', cursor :'pointer'}}/></h3>
        <p >{task.completed ? "Completed" : "Incomplete"}  <FaTimes onClick={()=> onComplete(task.id)} style={{color:'red', cursor :'pointer'}}/></p>


    </div>
  )
}

export default Task
{/* <p >{task.completed ? "Completed" : "Incomplete"}  <FaTimes onClick={()=> onComplete(task.id)} style={{color:'red', cursor :'pointer'}}/></p> */}

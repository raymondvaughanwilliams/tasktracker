import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState , useEffect} from 'react';
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);


  const [tasks, setTasks] = useState([])



// fetch tasks from local storage
useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }

  getTasks()
}, [])

// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:3001/tasks')
  const data = await res.json()

  return data
}



const addTask = (task,text, date,completed,reminder) => {
  const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
}


const deleteTask = async (id) => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',

  })
  setTasks(tasks.filter(task => task.id !== id))

}

const toggleReminder = (id) => {
  setTasks(tasks.map(task => {
    if(task.id === id) {
      return {
        ...task,
        reminder: !task.reminder
      }   
    } else {
    return task;}
  }))
  console.log('toggleReminder')
}
  
const toggleCompleted = (id) => {
  setTasks(tasks.map(task => {
    if(task.id === id) {
      return {
        ...task,
        completed: !task.completed
      }
    } else {
    return task;}
  }))

  console.log('toggleCompleted')
}



  const name = 'React';
  return (
    <div className="container">
<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
{showAddTask && <AddTask onAdd={addTask}/>}
{tasks.length > 0 ?
<Tasks 
   tasks={tasks}
    onAdd={addTask}
     onDelete={deleteTask}
      onToggle={toggleReminder}
       onComplete ={toggleCompleted} /> :
        <p>No tasks</p>}
    </div>
  );
}

export default App;

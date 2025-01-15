import './App.css';
import { useState , useRef, useEffect } from 'react';
import DetailOfTaskComponent from './Components/DetailsOfTaskComponent';


let App = () => {
  let [name, setName] = useState("")
  let [place, setPlace] = useState("");
  let [priority, setPriority] = useState(0);

let [taskSelected, setTaskSelected] = useState({});

  let [task, setTasks] = useState([
    {
      name: "Task1",
      place: "School",
      priority: 0
    },
    {
      name: "Clean",
      place: "House",
      priority: 0
    },
  ])
  
let addTask = () => {
  let newTask = {
    name: name,
      place: place,
      priority: priority
  }
  setTasks([...task, newTask])
  setName("")
  setPlace("")
  setPriority("")
}

let onClickSelectedTask = (name) => {
  let foundTask =  task.find( t => t.name == name)
  setTaskSelected(foundTask)
}

  return ( 
    <div className='container'>
        <h1>List of Task</h1>
        <ul className='task-list'>
        { task.map( t =>
          <li key={t.name} onClick={ () => {onClickSelectedTask(t.name)} }> {t.name}</li>) }
          </ul>

          <div className='task-form'>
          <h2>Add task</h2>
          <input type="text" placeholder='name' value={name} onChange={(e) => { setName(e.currentTarget.value)}}></input>
          <input type="text" placeholder='place'  value={place} onChange={(e) => { setPlace(e.currentTarget.value)}}></input>
          <input type="number" placeholder='priority' value={priority} onChange={(e) => { setPriority(parseInt(e.currentTarget.value))}}></input>
          <button onClick={addTask}>Add task</button>
          </div>

          <DetailOfTaskComponent task={taskSelected}/>
      </div>

  )
  ;
}

export default App;

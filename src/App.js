import './App.css';
import { useState , useRef, useEffect } from 'react';
import DetailOfTasksComponent from './Components/DetailsOfTasksComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';

let App = () => {
  let [name, setName] = useState("")
  let [place, setPlace] = useState("");
  let [priority, setPriority] = useState(0);

let [taskSelected, setTaskSelected] = useState({});

  let [tasks, setTasks] = useState([
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
  setTasks([...tasks, newTask])
  setName("")
  setPlace("")
  setPriority("")
}

  return ( 
    <div className="container">
      <ListOfTasksComponent tasks={tasks} setTaskSelected={setTaskSelected}/>

          <div className="task-form">
          <h2>Add task</h2>
          <input type="text" placeholder='name' value={name} onChange={(e) => { setName(e.currentTarget.value)}}></input>
          <input type="text" placeholder='place'  value={place} onChange={(e) => { setPlace(e.currentTarget.value)}}></input>
          <input type="number" placeholder='priority' value={priority} onChange={(e) => { setPriority(parseInt(e.currentTarget.value))}}></input>
          <button onClick={addTask}>Add task</button>
          </div>

          <DetailOfTasksComponent task={taskSelected}/>
      </div>

  )
  ;
}

export default App;

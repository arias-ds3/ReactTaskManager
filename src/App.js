import './App.css';
import { useState, useRef, useEffect } from 'react';

let App = () => {
  let [name, setName] = useState("");
  let [place, setPlace] = useState("");
  let [priority, setPriority] = useState(0);

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
  
let addTaks = () => {
  let newTask = {
    name: name,
    place: place,
    priority: priority
  }
  setTasks([...tasks, newTask])
}
  
  return (
    <div>
      <h2>Add tasks</h2>
      <input type='text' placeholder='name' onChange={(e) => {setName(e.currentTarget.value)}}></input>
      <input type='text' placeholder='place' onChange={(e) => {setPlace(e.currentTarget.value)}}></input>
      <input type='number' placeholder='priority' onChange={(e) => {setPriority(parseInt)(e.currentTarget.value)}}></input>
       <button onClick={addTaks}>ADD Task</button>


      <ul>
        { tasks.map( t => 
          <li>
            <b>{ t.name} </b>
            <div>Priority: {t.priority} </div>
            <div>{t.place} </div>
          </li> )}
      </ul>
    </div>
  )
  ;
}

export default App;

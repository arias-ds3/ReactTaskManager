import './App.css';
import { useState , useRef, useEffect } from 'react';

function App() {
  let [name, setName] = useState("")
  let [place, setPlace] = useState("");
  let [priority, setPriority] = useState(0);

let nameRef = useRef("");
let placeRef = useRef("");
let priorityRef = useRef(0);

let formRef = useRef()

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

let addTaskWithRefs = () => {
  let newTask = {
    name: nameRef.current.value,
      place: placeRef.current.value,
      priority: priorityRef.current.value
  }
  setTasks([...task, newTask])
  nameRef.current.value = "";
  placeRef.current.value = "";
  priorityRef.current.value = ""

}

let addTaskWithformRef = () => {
   let formData = new FormData(formRef.current);
   
   let newTask = {
    name: formData.get("name"),
    place: formData.get("place"),
    priority: formData.get("priority")
  }
  setTasks([...task, newTask])
}

  return ( 
    <div>
      <h2>Add task</h2>
      <input type="text" placeholder='name' value={name} onChange={(e) => { setName(e.currentTarget.value)}}></input>
      <input type="text" placeholder='place'  value={place} onChange={(e) => { setPlace(e.currentTarget.value)}}></input>
      <input type="number" placeholder='priority' value={priority} onChange={(e) => { setPriority(parseInt(e.currentTarget.value))}}></input>
      <button onClick={addTask}>Add task</button>

      <h2>add task Ref</h2>
      <input ref={nameRef} type="text" placeholder='name' ></input>
      <input ref={placeRef} type="text" placeholder='place' ></input>
      <input ref={priorityRef} type="number" placeholder='priority' ></input>
      <button onClick={addTaskWithRefs}>Add task</button>

      <h2>add task Form Ref</h2>
      <form ref={formRef}>
        <input name='name' type="text" placeholder='name' ></input>
        <input name='place' type="text" placeholder='place' ></input>
        <input name='priority' type="number" placeholder='priority' ></input>
      </form>
      <button onClick={addTaskWithformRef}>Add task</button>


        <ul>
        { task.map( t =>
          <li>
            <b>{t.name}</b>
            <div>Priority: {t.priority}</div>
            <div> {t.place} </div>
          </li>) }
          </ul>
      </div>

  )
  ;
}

export default App;

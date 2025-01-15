import './App.css';
import { useState , useRef, useEffect } from 'react';
import DetailOfTasksComponent from './Components/DetailsOfTasksComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';

let App = () => {

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
  

  return ( 
    <div className="container">
      <ListOfTasksComponent tasks={tasks} setTaskSelected={setTaskSelected}/>

      <CreateTaskComponent tasks={tasks} setTasks={setTasks} />

      <DetailOfTasksComponent task={taskSelected}/>
      </div>

  )
  ;
}

export default App;

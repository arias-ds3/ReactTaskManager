import './App.css';
import { useState, useRef } from 'react';
import DetailOfTasksComponent from './Components/DetailsOfTasksComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import { Route, Routes } from 'react-router-dom';

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
    <div className='container'>
      <Routes>
        <Route path='/' element={
          <ListOfTasksComponent setTasks={setTasks} tasks={tasks} setTaskSelected={setTaskSelected}/>
        } ></Route>
        <Route path='/createTask' element={
          <CreateTaskComponent tasks={tasks} setTasks={setTasks} />
        } >
        </Route>
        <Route path='/detailsTask' element={
          <DetailOfTasksComponent task={taskSelected} />
        } >
        </Route>
      </Routes>


      

      

      
    </div>
  )
  ;
}

export default App;

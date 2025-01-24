import './App.css';
import { useState, useRef } from 'react';
import DetailOfTasksComponent from './Components/DetailsOfTasksComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import { Link, Route, Routes } from 'react-router-dom';

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
      <nav>
        <ul className='navbar'>
          <li><Link to='/'>Tasks</Link> </li>
          <li><Link to='/createTask'>Add Tasks</Link></li>
        </ul>
      </nav>
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

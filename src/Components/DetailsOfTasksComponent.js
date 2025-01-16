
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListOfTasksComponent from "./ListOfTasksComponent";

let DetailOfTasksComponent = (props) => {
    let { tasks } = props
    let { name } = useParams();
    let [task,setTask] = useState(null)

    useEffect( () => {
        let findtask = tasks.find( t => t.name == name)
        if (findtask != null){
            setTask(findtask)
        }
    })


    return (
        <div className="task-details">
            <h2>Details of Task </h2>
            <p>Name:{task?.name} </p>
            <p>Place:{task?.place} </p>
            <p>Priority:{task?.priority} </p>
        </div>
    )
}

export default DetailOfTasksComponent;
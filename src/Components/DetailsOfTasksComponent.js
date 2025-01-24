
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


let DetailOfTasksComponent = (props) => {
    let { tasks } = props
    let { name } = useParams();
    let [task,setTask] = useState(null)

    useEffect( () => {
        let findTask = tasks.find( t => t.name == name)
        if (findTask != null){
            setTask(findTask)
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
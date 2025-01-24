import { Link } from "react-router-dom"

let ListOfTasksComponent = (props) => {
    let { tasks, setTasksSelected } = props

let onClickDeleteTask = (name) => {
    let foundTask = tasks.filter(t => t.name != name)
    setTasksSelected(foundTask)
}
    return (
        <div>
            <h1>List of Tasks</h1>
            <ul className='task-list'>
            { tasks.map( t =>
                <li key={ t.name} >
                    <Link to={"/DetailsOfTask/"+t.name} >
                        {t.name}
                    </Link>
                    <button className="delete-button"
                     onClick={ () => { onClickDeleteTask(t.name)}}>Delete</button>
                </li>) }
            </ul>
        </div>
    )
}
export default ListOfTasksComponent;
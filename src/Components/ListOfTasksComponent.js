
let ListOfTasksComponent = (props) => {
    let { tasks, setTaskSelected} = props

    let onClickSelectedTask = (name) => {
        let foundTask =  tasks.find( t => t.name == name)
        setTaskSelected(foundTask)
      }

    return (
        <div>
            <h1>List of Tasks</h1>
            <ul className='task-list'>
            { tasks.map( t =>
            <li key={ t.name} onClick={ () => {onClickSelectedTask(t.name)} } >{t.name}</li>) }
            </ul>
        </div>
    )
}
export default ListOfTasksComponent;
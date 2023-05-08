import TaskItem from './TaskItem'; // Código adicionado
import './TaskList.css';

function TaskList({ tasks, change }) {

    return (<div className="TaskList">
        <ul>
            {
                tasks.map(task => {
                    return <TaskItem taskName={task.name} taskDone={task.done} change={change} key={task.name} />
                })

            }
        </ul>
    </div>)
}

export default TaskList
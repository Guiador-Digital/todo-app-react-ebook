import { useContext } from 'react';
import TaskItem from './TaskItem'; // Código adicionado
import './TaskList.css';
import { TasksContext } from './contexts/TaskListContext';

function TaskList({ type }) {

    let { tasks } = useContext(TasksContext)

    switch (type) {
        case 'pending':
            tasks = tasks.filter(task => task.done === false)
            break;

        case 'done':
            tasks = tasks.filter(task => task.done === true)
            break;

        default:
            tasks = tasks.filter(task => task.done === false)
            break;
    }

    const onChange = () => {

    }


    return (<div className="TaskList">
        <ul>
            {
                tasks.map(task => {
                    return <TaskItem taskName={task.name} taskDone={task.done} change={onChange} key={task.name} />
                })

            }
        </ul>
    </div>)
}

export default TaskList
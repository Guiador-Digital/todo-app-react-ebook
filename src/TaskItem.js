import { useContext, useState } from 'react';
import { TasksContext } from './contexts/TaskListContext';

function TaskItem({ taskName, taskDone }) {
    const [checked, setChecked] = useState(taskDone);
    const { tasks, setTasks } = useContext(TasksContext)

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);

        const tasksChanged = tasks.map(task => {
            if (task.name === event.target.name) {
                return {
                    name: event.target.name,
                    done: event.target.checked
                }
            }

            return task
        })

        setTasks(tasksChanged)

    };

    return (
        <li style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input type="checkbox" name={taskName} checked={checked} onChange={handleCheckboxChange} /> {taskName}
        </li>
    );
}

export default TaskItem;
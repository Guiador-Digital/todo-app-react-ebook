import { useState } from 'react';

function TaskItem({ taskName, change, taskDone }) {
    const [checked, setChecked] = useState(taskDone);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);

        change({
            name: event.target.name,
            done: event.target.checked
        })
    };

    return (
        <li style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input type="checkbox" name={taskName} checked={checked} onChange={handleCheckboxChange} /> {taskName}
        </li>
    );
}

export default TaskItem;
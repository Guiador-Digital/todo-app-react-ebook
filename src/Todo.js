import { useState } from 'react'
import TaskList from './TaskList'

function Todo() {
    const [tasks, setTasks] = useState([
        {
            name: 'Task 1',
            done: false
        },
        {
            name: 'Task 2',
            done: false
        },
        {
            name: 'Task 3',
            done: false
        },
        {
            name: 'Task 4',
            done: false
        },
    ])

    const tasksPendentes = tasks.filter(task => task.done === false)
    const tasksConcluidas = tasks.filter(task => task.done === true)

    const handleToggleDone = (data) => {
        setTasks(tasks.map(task => {
            if (task.name === data.name) {
                return data
            } else {
                return task
            }
        }))
    }

    return (
        <>
            <h1>
                Todo List
            </h1>

            <h2>Tasks pendentes {
                tasksPendentes.length > 0 && <span> ({tasksPendentes.length})</span>
            }</h2>
            <TaskList tasks={tasksPendentes} change={handleToggleDone} />

            <h2>Tasks Concluídas {
                tasksConcluidas.length > 0 && <span> ({tasksConcluidas.length})</span>
            }</h2>
            <TaskList tasks={tasksConcluidas} change={handleToggleDone} />
        </>
    )
}

export default Todo
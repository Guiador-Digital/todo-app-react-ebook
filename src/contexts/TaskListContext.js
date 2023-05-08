import { createContext, useState } from 'react'

export const TasksContext = createContext()

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([
        {
            name: 'Task 1',
            done: false,
        },
        {
            name: 'Task 2',
            done: false,
        },
        {
            name: 'Task 3',
            done: false,
        },
        {
            name: 'Task 4',
            done: false,
        },
    ])

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    )
}

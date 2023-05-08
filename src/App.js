import './App.css';

import Todo from './Todo'// Linha adicionada neste passo
import { TasksProvider } from './contexts/TaskListContext';

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Todo />
      </TasksProvider>
    </div>
  );
}

export default App;
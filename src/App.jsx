import TaskForm from "./components/TaskForm";
import Tasklist from "./components/Tasklist";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";
/* import { PropTypes } from "prop-types"; */

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <Tasklist tasks={tasks} />
    </>
  );
}

export default App;

import TaskCards from "./TaskCards";

function Tasklist({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas Aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Tasklist;

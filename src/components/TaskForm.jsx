import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault(); // previene el comportamiento por defecto, "En este caso el reinicio de la pagina"
    createTask({
      title,
      description,
    });
    setTitle('')
    setDescription('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe una descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Crear</button>
    </form>
  );
}

export default TaskForm;

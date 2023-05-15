import React from "react";

export default function TodoItem({ todo, onDeleteHandler }) {
  /* const [todo, setTodo] = useState(item); */

  
  
  

  return (
    <div className="todo-item">
      {todo.progress === "done" ? <div className="green"></div> : null}
      {todo.progress === "in-progress" ? <div className="blue"></div> : null}
      {todo.progress === "not-started" ? <div className="red"></div> : null}
      <div>{todo.title}</div>
      <div>{todo.date}</div>
      <div>{todo.progress}</div>
      <button type="button" onClick={() => onDeleteHandler(todo.id)}>Delete</button>
    </div>
  );
}

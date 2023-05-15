import React from "react";

export default function TodoItem({ todo, onDeleteHandler }) {
  const { title, date, progress } = todo;

  if (title === "" && date === "" && progress === "") {
    return null;
  } else {
    return (
      <div className="todo-item">
        {todo.progress === "done" ? <div className="green"></div> : null}
        {todo.progress === "in-progress" ? <div className="blue"></div> : null}
        {todo.progress === "not-started" ? <div className="red"></div> : null}
        <div className="title">{todo.title}</div>
        <div className="date">{todo.date}</div>
        <div className="progress">{todo.progress}</div>
        <button
          type="button"
          onClick={() => {
            onDeleteHandler(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

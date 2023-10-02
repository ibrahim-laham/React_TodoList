import React from "react";

import Button from 'react-bootstrap/Button';

export default function TodoItem({ todo, onDeleteHandler }) {
  const { title, date, progress } = todo;

  if (title === "" || date === "" || progress === "") {
    return null;
  } else {
    return (
      <div className="todo-item">
        <div className={todo.progress}></div>
        <div className="title">{todo.title}</div>
        <div className="date">{todo.date}</div>
        <div className="progress">{todo.progress}</div>
        <Button 
          variant="danger"
          onClick={() => {
            onDeleteHandler(todo.id);
          }}
          
        >
          Delete
        </Button>
      </div>
    );
  }
}

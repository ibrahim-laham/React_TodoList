import React from "react";

import TodoItem from "./TodoItem";


export default function TodoList({ submit, setSubmit }) {
  

  function onDeleteHandler (todoId) {
    setSubmit(submit.filter((todo) => todo.id !== todoId));
  };
  
  return (
    <div>
      {submit.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onDeleteHandler={onDeleteHandler} submit={submit} />
      ))}
    </div>
  );
}

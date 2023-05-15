import React, { useState } from "react";

import UserInput from "./UserInput";
import TodoList from "./TodoList";

export default function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("");

  let inputObject = {
    title: title,
    date: date,
    progress: progress,
  };

  const [submit, setSubmit] = useState([]);

  function onChangeHandlerTitle(event) {
    let newInput = event.target.value;
    setTitle(newInput);
  }

  function onChangeHandlerDate(event) {
    let newInput = event.target.value;
    setDate(newInput);
  }

  function onChangeHandlerProgress(event) {
    let newInput = event.target.value;
    setProgress(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit([...submit, { ...inputObject }]);
  }


  console.log(submit);

  return (
    <form target="_self" onSubmit={handleSubmit}>
      <UserInput
        onChangeHandlerTitle={onChangeHandlerTitle}
        onChangeHandlerDate={onChangeHandlerDate}
        onChangeHandlerProgress={onChangeHandlerProgress}
      />
      <button type="submit">Submit</button>
      <TodoList submit={submit} />
    </form>
  );
}

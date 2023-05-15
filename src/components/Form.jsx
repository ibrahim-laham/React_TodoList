import React, { useState } from "react";

import UserInput from "./UserInput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: purple[100],
      },
    },
  });

  let objectId = uuidv4();

  let inputObject = {
    id: objectId,
    title: title,
    date: date,
    progress: progress,
  };

  const [submit, setSubmit] = useState([]);
  const [unique, setUnique] = useState([]);

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

  /* function filterTitle () {
    submit.filter
  }; */

  

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit([...submit, { ...inputObject }]);
  };

  function handleUnique () {
    
      submit.map((item) => {
        if(inputObject.title !== item.title) { return item}
        else{item.title=""
      return alert("title should be unique") }
      })
    
  };
  /* [...submit, { ...inputObject }] */
  console.log(submit, "submit");
  
  return (
    <form target="_self" onSubmit={(e) => {
      handleSubmit(e);
      handleUnique();
    }}>
      <UserInput
        onChangeHandlerTitle={onChangeHandlerTitle}
        onChangeHandlerDate={onChangeHandlerDate}
        onChangeHandlerProgress={onChangeHandlerProgress}
      />
      <ThemeProvider theme={theme}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </ThemeProvider>
      <TodoList submit={submit} setSubmit={setSubmit} />
    </form>
  );
}

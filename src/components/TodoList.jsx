import React from "react";

import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({submit}) {
  return (
    <div>
     {
      submit.map((todo) => <TodoItem todo={todo} key={uuidv4()} />)
     }
    </div>
  );
}

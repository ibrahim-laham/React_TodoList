import React from "react";

export default function UserInput({onChangeHandlerTitle, onChangeHandlerDate, onChangeHandlerProgress}) {
  return (
    <div>
      <div className="user-input">
        <label>
          Title:
          <input type="text" name="title" onChange={onChangeHandlerTitle} />
        </label>
        <label>
          Date:
          <input type="date" name="Date" onChange={onChangeHandlerDate}  />
        </label>
        <label>
          Progress:
          <input list="progressStatus" placeholder="Choose the status" onChange={onChangeHandlerProgress}  />
        </label>
        <datalist id="progressStatus">
          <option value="in-progress" />
          <option value="done" />
          <option value="not-started" />
        </datalist>
      </div>
    </div>
  );
}
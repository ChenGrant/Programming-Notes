import React, { useState, useEffect, useRef } from "react";
import styles from './Task.module.scss'
const ENTER_KEY_CODE = 13;

const Task = (props) => {
  const [edit, setEdit] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [edit]);

  const handleOnChange = (event) => {
    setInputVal(event.target.value);
  };

  const submitEdit = () => {
    const newVal = inputVal;
    if (newVal === "") return;
    props.updateTask(newVal, props.toDo.id);
    setInputVal("");
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <div>
      <input type="checkbox" onClick={() => props.toggle(props.toDo.id)} />
      {props.toDo.task}
      {edit ? null : <button onClick={handleEdit}>Edit</button>}
      {edit ? (
        <>
          <input
            ref={inputRef}
            onKeyDown={(event) => event.key === "Enter" && submitEdit()}
            value={inputVal}
            onChange={handleOnChange}
            className = {styles.inputField}
          />
          <button className = {styles.submit} onClick={submitEdit}>Submit Edit</button>
        </>
      ) : null}
    </div>
  );
};

export default Task;

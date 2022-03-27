import React from "react";
import Task from "./Task";

const ToDoList = (props) => {
  const renderToDos = props.toDo.map((todo) => (
    <Task
      key={todo.id}
      toDo={todo}
      toggle={props.toggle}
      updateTask={props.updateTask}
    ></Task>
  ));

  return <ul>{renderToDos}</ul>;
};

export default ToDoList;

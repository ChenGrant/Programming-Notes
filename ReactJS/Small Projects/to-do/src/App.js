import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";
import Notes from "./Notes";

const ENTER_KEY_CODE = 13;

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const addButtonRef = useRef();

  useEffect(() => {
    setToDo(JSON.parse(localStorage.getItem("ToDos")));
    inputRef.current.addEventListener("keydown", function (event) {
      event.keyCode === ENTER_KEY_CODE && addButtonRef.current.click();
    });
  }, []);

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddToDo = () => {
    if (input === "") return;
    setToDo((prevToDo) => {
      const prev = [...prevToDo];
      prev.push({
        id: uuidv4(),
        task: input,
        completed: false,
      });
      localStorage.setItem("ToDos", JSON.stringify(prev));
      return prev;
    });
    setInput("");
  };

  const toggleCompletion = (targetID) => {
    const toDoCopy = [...toDo];
    for (let i = 0; i < toDoCopy.length; i++) {
      if (toDoCopy[i].id == targetID) {
        toDoCopy[i].completed = !toDoCopy[i].completed;
      }
    }
    setToDo(toDoCopy);
  };

  const clearCompleted = () => {
    const newToDos = [...toDo].filter((item) => !item.completed);
    setToDo(newToDos);
  };

  const clearAll = () => {
    setToDo([]);
  };

  const updateTask = (task, id) => {
    const toDoCopy = [...toDo];
    for (let i = 0; i < toDoCopy.length; i++) {
      if (toDoCopy[i].id == id) {
        toDoCopy[i].task = task;
      }
    }
    setToDo(toDoCopy);
  };

  return (
    <div>
      <input
        value={input}
        ref={inputRef}
        onChange={handleOnChange}
        placeholder="Add To Do"
      />
      <button ref={addButtonRef} onClick={handleAddToDo}>
        Add To Do
      </button>
      <ToDoList toDo={toDo} toggle={toggleCompletion} updateTask={updateTask} />
      <Notes />
      <button onClick={clearAll}>Clear All To-Dos</button>
      <button onClick={clearCompleted}>Clear Completed To-Dos</button>
    </div>
  );
};

export default App;

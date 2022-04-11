import { deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useState, useRef } from "react";
import { useUser } from "../../contexts/AuthContext";
import { useTodo } from "../../contexts/TodoContext";
import { db, storage } from "../../firebase";

const EditTodo = ({ editId, setEditId }) => {
  console.log(editId);
  const user = useUser();
  const todos = useTodo();
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const docRef = doc(db, "todos", user.uid, "todos", editId);

  const editTodoEnterHandler = (event) => {
    if (event.key !== "Enter") return;
    const editedTodo = inputRef.current.value;
    if (editedTodo.trim() === "") return;
    updateDoc(docRef, {
      todo: editedTodo,
      lastEdited: serverTimestamp(),
    }).then(() => setEditId());
  };

  const removeTodoHandler = async () => {
    await deleteDoc(doc(db, "todos", user.uid, "todos", editId));

    const files = todos.filter(({ user }) => user === editId).files;

    if (files) {
      const fileStorageRef = ref(storage, `${user.uid}/${files[0].name}`);
      deleteObject(fileStorageRef).then(() => console.log("deleted"));
    }
    setEditId();
    console.log(todos);
  };

  return (
    <div>
      <div>
        <label>Edit Todo: </label>
        <input
          value={input}
          ref={inputRef}
          onChange={() => {
            setInput(inputRef.current.value);
          }}
          onKeyDown={editTodoEnterHandler}
        />
        <button onClick={() => editTodoEnterHandler({ key: "Enter" })}>
          Submit Edit
        </button>
      </div>
      <div>
        <label>Edit File</label>
      </div>
      <div>
        <button onClick={() => setEditId()}>Cancel Edit</button>
      </div>
      <button onClick={removeTodoHandler}>Remove Todo</button>
    </div>
  );
};

export default EditTodo;

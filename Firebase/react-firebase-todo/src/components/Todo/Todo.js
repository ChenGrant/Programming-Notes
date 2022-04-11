import { useEffect, useState } from "react";
import { TodoProvider } from "../../contexts/TodoContext";
import { db } from "../../firebase";
import AddTodo from "./AddTodo";
import ClearTodos from "./ClearTodos";
import RenderTodos from "./RenderTodos";
import { useUser } from "../../contexts/AuthContext";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { snapshotToTodo, hasTimeProperty } from "../../modules/TodoFunctions";
import EditTodo from "./EditTodo";
import Logout from "../Authentication/Logout";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState();
  const user = useUser();

  useEffect(() => {
    const todosColRef = collection(db, "todos", user.uid, "todos");
    const todosQuery = query(todosColRef, orderBy("createdAt"));
    const unsubQuery = onSnapshot(todosQuery, (snapshot) => {
      if (!hasTimeProperty(snapshot)) return;
      setTodos(snapshotToTodo(snapshot));
    });

    return unsubQuery;
  }, [user.uid]);

  return (
    <TodoProvider value={todos}>
      <ul>
        <li>make form code more reusable</li>
        <li>have option to edit file</li>
        <li>when editing file, make it autofill</li>
        <li>add multiple files</li>
        <li>
          have option to remove specific todo, make sure to remove its files
        </li>
        <li>make clear all remove all of the user's files as well </li>
        <li>clean up database</li>
      </ul>
      <hr />
      <h1>Display Name: {user.displayName}</h1>
      <h1>Email: {user.email}</h1>
      <RenderTodos editHandler={(id) => setEditId(id)} />
      {editId && (
        <EditTodo
          editId={editId}
          setEditId={setEditId}
        />
      )}
      {!editId && <AddTodo />}
      <ClearTodos cancelEditHandler={setEditId} />
      <Logout />
    </TodoProvider>
  );
};

export default Todo;

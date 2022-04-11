import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React from "react";
import { useUser } from "../../contexts/AuthContext";
import { db } from "../../firebase";

const ClearTodos = ({ cancelEditHandler }) => {
  const user = useUser();

  const clearTodosHandler = () => {
    const todosColRef = collection(db, "todos", user.uid, "todos");
    getDocs(todosColRef).then((snapshot) => {
      snapshot.docs.forEach((todo) => {
        const docRef = doc(db, "todos", user.uid, "todos", todo.id);
        deleteDoc(docRef);
      });
    });
    cancelEditHandler();
  };

  return <button onClick={clearTodosHandler}>Clear All Todos</button>;
};

export default ClearTodos;

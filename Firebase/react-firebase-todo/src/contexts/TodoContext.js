import React, { useContext } from "react";

const TodoContext = React.createContext();
const TodoProvider = TodoContext.Provider;
const useTodo = () => useContext(TodoContext);

export { TodoContext, TodoProvider, useTodo };

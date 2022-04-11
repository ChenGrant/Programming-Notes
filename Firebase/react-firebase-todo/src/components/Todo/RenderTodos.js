import { useTodo } from "../../contexts/TodoContext";
import RenderFiles from "./RenderFiles";

const RenderTodos = ({ editHandler }) => {
  const todos = useTodo();
  const todosList = todos.map((todo) => (
    <li key={todo.id}>
      <span onClick={() => editHandler(todo.id)}>{todo.todo}</span>
      <RenderFiles files={todo.files} />
    </li>
  ));
  return (
    <div>
      <h1>Todos</h1>
      <p>Click on todo to edit</p>
      <ul>{todosList}</ul>
    </div>
  );
};

export default RenderTodos;

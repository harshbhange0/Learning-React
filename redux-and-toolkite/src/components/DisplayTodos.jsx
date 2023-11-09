import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";
function DisplayTodos() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todo.map((todo) => (
          <li key={todo?.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTodos;

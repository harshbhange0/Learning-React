import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoslice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="container bg-red-100 max-h-[500px] max-w-[500px]">
      <form onSubmit={handleAddTodo} className="flex">
        <div className="flex justify-between items-center flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">add Task</button>
      </form>
    </div>
  );
}

export default AddTodo;

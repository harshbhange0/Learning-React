import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === "" || input === undefined) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-1">
      <input
        type="text"
        className="bg-transparent outline-none py-2 px-3 focus:bg-[#0B2447] bg-[#0e3163]"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#0B2447] active:bg-[#3A1078] py-2 px-3 rounded-md"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;

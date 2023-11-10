import React from "react";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-blue-950">
      <div className="max-w-2xl bg-[#19376D] text-white p-4 rounded-md overflow-hidden shadow-md shadow-[#4477CE] flex justify-center flex-col items-center">
       
        <AddTodo />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;

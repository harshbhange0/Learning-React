import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoS: [{ id: 1, text: "this is a test", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid,
        text: action.payload.text,
        completed: action.payload.completed,
      };
      state.todoS.push(todo);
    },
    removeTodo: (state, action) => {
      state.todoS = state.todoS.filter(
        (todo) => state.todoS.id !== action.payload.id
      );
    },
    ifComplete: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setAllTodo: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    toggleTodoStore: (state, action) => {
      const index = state.todos.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.todos[index] = action.payload;
    },
  },
});

export const { setAllTodo, addTodo, toggleTodoStore } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todos;

export default todoSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TodosType } from "../api/types";

interface TodosState {
  todos: TodosType[];
}

const initialState: TodosState = {
  todos: [] as any,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setAllTodo: (state, action: PayloadAction<any>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<any>) => {
      state.todos.unshift(action.payload);
    },
  },
});

export const { setAllTodo, addTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;

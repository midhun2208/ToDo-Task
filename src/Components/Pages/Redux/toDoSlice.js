import { createSlice } from "@reduxjs/toolkit";
import { fakeToDo } from "./fakeTodo";

const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    items: [fakeToDo],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      const idToDelete = action.payload;
      state.items = state.items.filter((item) => item.id !== idToDelete);
    },
    markCompleted: (state, action) => {
      const { id } = action.payload;
      const todoItem = state.items.find((item) => item.id === id);
      if (todoItem) {
        todoItem.completed = true;
      }
    },
    markFavorite: (state, action) => {
      const { id } = action.payload;
      const todoItem = state.items.find((item) => item.id === id);
      if (todoItem) {
        todoItem.favorite = true;
      }
    },
  },
});

export default toDoSlice.reducer;
export const { addItem, deleteItem, markCompleted, markFavorite } =
  toDoSlice.actions;

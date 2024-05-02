import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoSlice";
const toDoStore = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
export default toDoStore;

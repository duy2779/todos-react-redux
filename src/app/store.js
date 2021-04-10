import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
import filterReducer from '../features/filterSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer
  },
});

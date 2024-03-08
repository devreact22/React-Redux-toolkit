import { configureStore } from '@reduxjs/toolkit';
import todosSlice  from './notes/todoSlice'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

// Tipizzazione dello stato globale
export type RootState = ReturnType<typeof store.getState>;

export default store;
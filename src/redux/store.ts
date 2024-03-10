import { configureStore  } from '@reduxjs/toolkit';
import todosSlice  from './notes/todoSlice'
import citiesSlice  from './cities/citiesSlice'


const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    cities: citiesSlice.reducer,
  }
});

// Tipizzazione dello stato globale
export type RootState = ReturnType<typeof store.getState>;

export default store;
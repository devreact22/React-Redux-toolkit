import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definizione dello stato iniziale
type TodoState = string[];

// Creazione di uno slice che include reducer e azioni
const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        }
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice;

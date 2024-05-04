import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlics"

const store = configureStore({
    reducer: todoReducer
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('todos', JSON.stringify(state.todos));
})

export { store };

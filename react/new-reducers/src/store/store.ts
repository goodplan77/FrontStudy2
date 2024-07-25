import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import todoListSlice from "../features/todoListSlice"

let store = configureStore({
    reducer : {
        counter : counterSlice,
        // member : memberSlice
        // board : boardSlice ...
        todolist : todoListSlice
    }
})
export default store;

export type RootState = ReturnType<typeof store.getState>
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import todoSlice from "../features/todoSlice"

let store = configureStore({
    reducer : {
        counter : counterSlice,
        // member : memberSlice
        // board : boardSlice ...
        todolist : todoSlice
    }
})
export default store;

export type RootState = ReturnType<typeof store.getState>
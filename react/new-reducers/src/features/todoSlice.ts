import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    list:string[];
}
const init:Todo = {list:["asdf","1111"]};

const todoSlice = createSlice({
    name : 'todolist', // reducer 이름
    initialState : init,
    reducers : {
        todoInput : (state) => {
            console.log(state);
            return ;
        },
        underLineTodo : (state , action:PayloadAction<number>) => {
            return {list : state.list.filter((value,index) => index != action.payload)};
        },
        addTodoList : (state , action:PayloadAction<string>) => {
            return {list : [...state.list , action.payload]}
        },
        deleteTodo : (state , action:PayloadAction<number>) => {
            return {list : state.list.filter((value,index) => index != action.payload)};
        }
    }
})
export const {todoInput , underLineTodo , addTodoList , deleteTodo} = todoSlice.actions;

export default todoSlice.reducer; // 'counter'
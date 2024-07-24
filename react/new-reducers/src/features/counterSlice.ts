import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Counter = {
    value:number;
}
const init:Counter = {value:0};

const counterSlice = createSlice({
    name : 'counter', // reducer 이름
    initialState : init,
    reducers : {
        increment : (state) => {
            return {...state ,  value : state.value +1}
        },
        decrement : (state) => {
            return {...state , value : state.value -1}
        },
        increByAmount : (state , action:PayloadAction<number>) => {
            return {...state , value : state.value + action.payload}
        }
    }
})
export const {increment , decrement , increByAmount} = counterSlice.actions;

export default counterSlice.reducer; // 'counter'
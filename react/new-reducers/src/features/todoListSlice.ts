import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoItem = {
    text : string;
    isDone : boolean;
    id : number;
}
const init:{todos:TodoItem[] , id:number} = {todos : [] , id:0};

const todoSlice = createSlice({
    name : 'todolist', // reducer 이름
    initialState : init,
    reducers : {
        addTodos : (state , action:PayloadAction<string>) => {
            let newId = state.id+1;
            
            let newTodo:TodoItem = {
                id : newId,
                isDone : false,
                text : action.payload
            }

            return {...state , todos : [...state.todos , newTodo] , id : newId}
        },
        deleteTodos : (state , action:PayloadAction<number>) => {
            let filteredList = state.todos.filter(value => value.id !== action.payload)
            return {...state , todos:filteredList};
        },
        checkTodos : (state , action:PayloadAction<number>) => {
            let mappedList = state.todos.map((value) => {
                if(value.id == action.payload){
                    let newTodo = {
                        ...value,
                        isDone : !(value.isDone)
                    }
                    return newTodo;
                }
                return value;
            })
            return {...state , todos:mappedList};
            // let todoItem = state.todos.find(value => value.id !== action.payload)
            // if(todoItem){
            //     todoItem.isDone = !(todoItem.isDone); // 직접 변경을 막음?
            // }
            // state 에 대한 직접적인 조작은 하지 않음
        }
    }
})
export const {addTodos , deleteTodos , checkTodos} = todoSlice.actions;

export default todoSlice.reducer; // 'counter'
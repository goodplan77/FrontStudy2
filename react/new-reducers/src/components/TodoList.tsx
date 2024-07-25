import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import {addTodos , deleteTodos , checkTodos} from "../features/todoListSlice"
import { useState } from "react";

export default function TodoList(){
    // const state = useSelector((state:RootState) => state.todolist);
    // console.log(state);

    // const dispatch = useDispatch();
    
    // return (
    //     <div>
    //         <div>
    //             <input type="text" onInput={() => {dispatch(todoInput())}}></input>
    //             <button onClick={() => {dispatch(addTodoList('1234'))}}>Add</button>
    //             {
    //                 state.list.map((value,index) => (
    //                     <tr>
    //                         <th onClick={(e) => {
    //                             e.stopPropagation();
    //                             dispatch(underLineTodo(index)
    //                             )}}>{value}</th>
    //                         <button onClick={(e) => {
    //                             e.stopPropagation();
    //                             dispatch(deleteTodo(index)
    //                             )}}>❌</button>
    //                     </tr>
    //       n          ))
    //             }
    //         </div>
    //     </div>
    // )

    let [input , setInput] = useState('');

    const {todolist} = useSelector((state:RootState) => state);

    const dispatch = useDispatch();

    const textDeco = {textDecoration : 'line-through'};

    return (
        <div>
            <h2>Todo List</h2>
            <input type = 'text' value = {input} onChange={(e)=> {
                setInput(e.target.value);
            }}></input>
            <button onClick={() => {dispatch(addTodos(input))}}>Add</button>
            <ul>
                {
                    todolist.todos.map((todoItem)=> {
                        return (
                            <li key={todoItem.id} style ={{listStyle:"none"}}>
                                <span style = {
                                    todoItem.isDone ? textDeco : {}
                                }
                                onClick={() => {
                                    dispatch(checkTodos(todoItem.id));
                                    }}>{todoItem.text}</span>
                                <span onClick={() => {
                                    dispatch(deleteTodos(todoItem.id));
                                    }}>❌</span>
                            </li>
                        )
                    })
                }
                <li style ={{listStyle:"none"}}>할일이 없음 ❌</li>
            </ul>
        </div>
    )
}
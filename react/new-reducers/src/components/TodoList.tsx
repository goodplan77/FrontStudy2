import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import {todoInput , underLineTodo , addTodoList , deleteTodo} from "../features/todoSlice"

export default function TodoList(){
    const state = useSelector((state:RootState) => state.todolist);
    console.log(state);

    const dispatch = useDispatch();
    
    return (
        <div>
            <div>
                <input type="text" onInput={() => {dispatch(todoInput())}}></input>
                <button onClick={() => {dispatch(addTodoList('1234'))}}>Add</button>
                {
                    state.list.map((value,index) => (
                        <tr>
                            <th onClick={(e) => {
                                e.stopPropagation();
                                dispatch(underLineTodo(index)
                                )}}>{value}</th>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deleteTodo(index)
                                )}}>삭제</button>
                        </tr>
                    ))
                }
            </div>
        </div>
    )
}
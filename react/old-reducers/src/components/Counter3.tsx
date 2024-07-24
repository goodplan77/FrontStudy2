import { useState ,useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

function Counter(){

    const counterState = useSelector((state:RootState) => state); // store에 저장된 state를 꺼내는 함수.
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch({type:'decrease'})}> - 버튼 </button>
            {counterState.count}
            <button onClick={() => dispatch({type:'increase'})}> + 버튼 </button>
        </>
    )

}
export default Counter;
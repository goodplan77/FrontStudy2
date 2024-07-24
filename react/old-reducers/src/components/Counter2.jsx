import { useState ,useReducer } from "react";

function Counter(){
    const reducer = (state , action) => { // action {type:string(메서드명) , payload?:any(파라미터)}
        switch(action.type){
            case 'plusOne' : //
                return {count : state.count+1} //setCount(값)
            case 'plusTen' : //
                return {count : state.count+10}
            case 'minusOne' : //
                return {count : state.count-1}
            case 'minusTen' : //
                return {count : state.count-10}
            case 'multie100' : //
            return {count : state.count * 100}
        }
    }

    const [state , dispatch] = useReducer(reducer , {count : 0})
   

    return (
        <>
            <button onClick={() => dispatch({type:'minusTen'})}> -10 버튼 </button>
            <button onClick={() => dispatch({type:'minusOne'})}> - 버튼 </button>
            {state.count}
            <button onClick={() => dispatch({type:'plusOne'})}> + 버튼 </button>
            <button onClick={() => dispatch({type:'plusTen'})}> +10 버튼 </button>
        </>
    )

}
export default Counter;
// state 초기값
// 1) state 타입 지정
type Counter =  {
    count : number;
}

const initalState:Counter = {count : 0};
// reducer 함수 정의

// 2) action 타입 지정
type CounterAction = {
    type : string
    payload : any
}
function reducer(state = initalState , action:CounterAction){
    switch(action.type){
        case 'increase' :
            return {count : state.count + 1};
        case 'decrease' :
            return {count : state.count - 1};
        default :
            return state;
    }
}
export default reducer;
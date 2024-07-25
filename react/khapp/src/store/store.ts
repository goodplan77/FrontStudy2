import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";


 // store 정의 함수
let store = configureStore({
    reducer : {
        user : userSlice
    }
})

// index.js(ts) 에서 활용 하기위해 export
export default store;

// 각 reducer 반환 타입들을 한번에 관리하기 위함?
export type RootState = ReturnType<typeof store.getState>;
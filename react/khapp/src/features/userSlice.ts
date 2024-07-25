import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../type/userType";

const user:User = {
    email : 'rudals@iei.or.kr',
    nickname : 'mkm',
    profile : '/images/user3.jpg'
};

let userSlice = createSlice({
    name : 'user',
    initialState : user,
    reducers : {
        login : (state , action:PayloadAction<User>) => {
            return action.payload;
        },
        logout : (state) => {
            return {email : '',nickname : '',profile : ''}
        },
        randomProfile : (state) => {
            let random = Math.floor(Math.random() * 6);
            // user.profile = `/images/user${random}.jpg`
            // 직접 state 값을 수정하는 것은 금지
            let user = {...state , profile : `/images/user${random}.jpg`}
            return user;
        }
    }

})

export const {login , logout , randomProfile} = userSlice.actions;
export default userSlice.reducer;
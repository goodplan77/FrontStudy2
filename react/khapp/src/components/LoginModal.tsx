import { ChangeEvent, useState } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { login , logout , randomProfile } from '../features/userSlice';
import { User } from "../type/userType";


export default function LoginModal(props:{setLoginModalState:any}){
    
    const {setLoginModalState} = props;

    const [userInfo ,setUserInfo] = useState<User>({
        email:'', nickname:'', profile : '/images/user3.jpg'
    })

    const inputChangeHandler = (e:ChangeEvent) => {
        if(e.target){
            const {name,value} = e.target as HTMLInputElement;
            setUserInfo ({
                ...userInfo,
                [name] : value
            });
        }
    }

    const dispatch  = useDispatch();

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => {setLoginModalState(false)}}>&times;</span>
                <div className="login-form">
                    <label>이메일 : 
                        <input type = "text" 
                        value={userInfo.email}
                        name="email"
                        onChange={inputChangeHandler}
                        /></label>
                    <label>닉네임 : 
                        <input type = "text" 
                        value={userInfo.nickname}
                        name="nickname"
                        onChange={inputChangeHandler}
                        /></label>
                    <button onClick={() => {
                        dispatch(login(userInfo));
                        setLoginModalState(false);
                        }}>로그인</button>
                </div>
            </div>
        </div>
    )
}
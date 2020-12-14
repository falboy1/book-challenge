import React, {useCallback, useState }from 'react';
import {TextBox, PrimaryButton} from '../components/UIkit';
import {useDispatch} from 'react-redux';
import {resetPassword} from '../reducks/users/operation'
import { Link } from 'react-router-dom';


const Reset = () => {
    const dispatch = useDispatch();

    // Hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // callback
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail]);
    


    return (
        <div className={'center'}>
            <div className={'vertical-space-40'} />
            <h2>パスワードをリセット</h2>
            <TextBox 
                label={"メールアドレス"}
                required={true}
                type={'email'} 
                placeholder={'you@example.com'}
                value={email}
                onChange={inputEmail}
                width={'300px'}/>
            <div className={'vertical-space-20'}/>
            <div>
                <PrimaryButton 
                    label={"メールを送信"}  
                    onClick={() => dispatch(resetPassword(email))}
                    padding={'15px 10px'}
                    width={'300px'} 
                />
            </div>
        
        </div>
    );
}

export default Reset;
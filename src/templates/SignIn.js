import React, {useCallback, useState }from 'react';
import {TextBox, PrimaryButton} from '../components/UIkit';
import {useDispatch} from 'react-redux';
import {signIn} from '../reducks/users/operation'


const SingIn = () => {
    const dispatch = useDispatch();

    // Hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // callback
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail]);
    
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword]);


    return (
        <div className={'center'}>
            <div className={'vertical-space-40'} />
            <h2>Mindokuにログイン</h2>
            <TextBox 
                label={"メールアドレス"}
                required={true}
                type={'email'} 
                placeholder={'you@example.com'}
                value={email}
                onChange={inputEmail}
                width={'300px'}/>
            <TextBox 
                label={"パスワード"}
                required={true}
                type={'password'}
                value={password}
                onChange={inputPassword}
                width={'300px'}
            />
            <div className={'vertical-space-20'}/>
            <div>
                <PrimaryButton 
                    label={"ログイン"}  
                    onClick={() => dispatch(signIn(email, password))}
                    padding={'15px 10px'}
                    width={'300px'} 
                />
            </div>
        </div>
    );
}

export default SingIn;
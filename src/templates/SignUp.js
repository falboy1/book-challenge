import React , {useCallback, useState} from 'react';
import {TextBox, PrimaryButton} from '../components/UIkit';
import {signUp} from '../reducks/users/operation';
import {useDispatch} from 'react-redux';
import {push } from 'connected-react-router';


const SignUp = () => {
    const dispatch = useDispatch()

  // Hook 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // callback
    const inputUsername = useCallback((event)=> {
        setUsername(event.target.value)
    }, [setUsername]);

    const inputEmail = useCallback((event)=> {
        setEmail(event.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((event)=> {
        setPassword(event.target.value)
    }, [setPassword]);

    const inputConfirmPassword = useCallback((event)=> {
        setConfirmPassword(event.target.value)
    }, [setConfirmPassword]);
  

  return (
        <div className={'center'}>
            <div className={'vertical-space-40'} />
            <h2>新規会員登録</h2>
            <form noValidate autoComplete="off">
                <TextBox 
                  label={"メールアドレス"}
                  value={email}
                  required={true}
                  onChange={inputEmail}
                  type={'email'}
                  width={'300px'}
                />
                <TextBox 
                  label={"ユーザ名"}
                  value={username}
                  required={true}
                  placeholder={'半角英数字6文字以上'}
                  onChange={inputUsername}
                  type={'text'}
                  width={'300px'}
                />
                <TextBox
                  label={"パスワード"}
                  value={password}
                  required={true}
                  placeholder={'半角英数字6文字以上'}
                  onChange={inputPassword}
                  type={'password'}
                  width={'300px'}
                />
                <TextBox
                  label={"パスワード（再確認）"}
                  value={confirmPassword}
                  required={true}
                  placeholder={'半角英数字6文字以上'}
                  onChange={inputConfirmPassword}
                  type={'password'}
                  width={'300px'}
                />
                <div className={'vertical-space-20'}/>
                <div>
                  <PrimaryButton 
                    label={"登録する"}
                    width={'300px'} 
                    padding={'15px 10px'}
                    onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
                  />
                </div>
                <p onClick={() => dispatch(push('/signin'))}>アカウントを既にお持ちの方はこちら</p>
            </form>
        </div>
  );
}

export default SignUp;
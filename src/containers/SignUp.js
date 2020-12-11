import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {TextBox, PrimaryButton} from '../components/UIkit';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const SignUp = () => {
    const classes = useStyles();
    return (
        <div className={'center'}>
            <div className={'vertical-space-40'} />
            <h2>新規会員登録</h2>
            <form noValidate autoComplete="off">
                <TextBox 
                  label={"メールアドレス"} 
                  width={'300px'}/>
                <TextBox 
                  label={"ID"}
                  placeholder={'半角英数字6文字以上'}
                  width={'300px'}/>
                <TextBox
                  label={"パスワード"}
                  placeholder={'半角英数字6文字以上'}
                  width={'300px'}/>
                <div className={'vertical-space-20'}/>
                <div>
                  <PrimaryButton label={"登録する"} width={'300px'} padding={'15px 10px'}/>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
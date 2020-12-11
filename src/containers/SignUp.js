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
            <form noValidate autoComplete="off">
                <TextBox label={"メールアドレス"} width={'300px'}/>
                <TextBox label={"希望するID"} width={'300px'}/>
                <TextBox label={"パスワード"} width={'300px'}/>
                <div>
                  <PrimaryButton label={"登録"} width={'300px'}/>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
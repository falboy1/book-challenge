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
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextBox label={"メールアドレス"} />
                <TextBox label={"ID"} />
                <TextBox label={"パスワード"} />
                <PrimaryButton label={"登録"} />
            </form>
        </div>
    );
}

export default SignUp;
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


const SingIn = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextBox label={"IDまたはメールアドレス"} />
                <TextBox label={"パスワード"} />
                <PrimaryButton label={"ログイン"} />
            </form>
        </div>
    );
}

export default SingIn;
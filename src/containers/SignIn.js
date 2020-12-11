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
        <div className={'center'}>
            <div className={'vertical-space-40'} />
            <h2>Mindokuにログイン</h2>
            <form noValidate autoComplete="off">
                <TextBox label={"IDまたはメールアドレス"} width={'300px'}/>
                <TextBox label={"パスワード"} width={'300px'}/>
                <div className={'vertical-space-20'}/>
                <div>
                    <PrimaryButton label={"ログイン"}  width={'300px'} padding={'15px 10px'}/>
                </div>
            </form>
        </div>
    );
}

export default SingIn;
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
            <TextBox 
                label={"IDまたはメールアドレス"} required={true} width={'300px'}/>
            <TextBox 
                label={"パスワード"} required={true} width={'300px'}
            />
            <div className={'vertical-space-20'}/>
            <div>
                <PrimaryButton label={"ログイン"}  width={'300px'} padding={'15px 10px'}/>
            </div>
        </div>
    );
}

export default SingIn;
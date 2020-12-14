import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { TitleLogo } from '../components/UIkit';
import { useDispatch } from 'react-redux';
import { signOut } from '../reducks/users/operation';
import {push} from 'connected-react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainHeader = () => {

  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Toolbar>
          <div className={classes.title} onClick={() => dispatch(push('/'))}>
              <TitleLogo className={classes.title} />
          </div>
          <Button onClick={() => dispatch(push('/signin'))}>ログイン</Button>
          <Button onClick={() => dispatch(signOut())}>ログアウト</Button>
          <Button onClick={() => dispatch(push('/signup'))}>会員登録</Button>
          <Button onClick={() => dispatch(push('/mypage'))}>マイページ</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;
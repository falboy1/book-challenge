import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { TitleLogo } from '../UIkit';
import { useDispatch , useSelector} from 'react-redux';
import { signOut } from '../../reducks/users/operation';
import {push} from 'connected-react-router';
import { getIcon, getUsername, getIsSignedIn } from '../../reducks/users/selectors';
import UserIconMenu from './UserIconMenu';


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
    const selector = useSelector((state) => state);
    const icon = getIcon(selector);
    const username = getUsername(selector);
    const isSignedIn = getIsSignedIn(selector);


    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar position="static" color="default" >
            <Toolbar>
                <div className={classes.title} onClick={() => dispatch(push('/'))}>
                    <TitleLogo className={classes.title} />
                </div>
                {/* ログインされていない場合*/}
                {!isSignedIn && (
                    <div>
                        <Button onClick={() => dispatch(push('/signin'))}>ログイン</Button>
                        <Button onClick={() => dispatch(push('/signup'))}>会員登録</Button>
                    </div>
                )}
                {/* ログイン済みの場合*/}
                { isSignedIn && (
                    <UserIconMenu />
                )}
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default MainHeader;
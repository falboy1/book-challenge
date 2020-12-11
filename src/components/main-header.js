import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { TitleLogo } from '../components/UIkit';


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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Toolbar>
          <div className={classes.title}>
            <Link to='/' style={{textDecoration: 'none'}}>
              <TitleLogo className={classes.title} />
            </Link>
          </div>
          <Button><Link to="/login" style={{ textDecoration: 'none' }}>ログイン</Link></Button>
          <Button><Link to="/signup" style={{ textDecoration: 'none' }}>会員登録</Link></Button>
          <Button><Link to="/mypage" style={{ textDecoration: 'none' }}>マイページ</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;
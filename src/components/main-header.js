import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

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

const MainHeader = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: 'none' }}>READING</Link>
          </Typography>
          <Button><Link to="/login" style={{ textDecoration: 'none' }}>ログイン</Link></Button>
          <Button><Link to="/signup" style={{ textDecoration: 'none' }}>会員登録</Link></Button>
          <Button><Link to="/mypage" style={{ textDecoration: 'none' }}>マイページ</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;
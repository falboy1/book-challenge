import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    //alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchInputBase = (props) => {
  const classes = useStyles();

  return (
      <Paper component="form" className={classes.root} style={{width: props.width}}>
        <InputBase
          className={classes.input}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
  );
}

export default SearchInputBase;
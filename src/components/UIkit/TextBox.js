import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TextBox = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label={props.label}
              variant="outlined" 
              onChange={props.onChange}
              fullWidth={props.fullWidth}
              style={{width: props.width}}
            />
        </form>
    );
}

export default TextBox;
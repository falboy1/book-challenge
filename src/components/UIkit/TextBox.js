import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import theme from './MyTheme';

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
      <ThemeProvider theme={theme}>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label={props.label}
              variant="outlined"
              onChange={props.onChange}
              fullWidth={props.fullWidth}
              multiline={props.multiline}
              rows={props.rows}
              placeholder={props.placeholder}
              required={props.required}
              disabled={props.disabled}
              style={{
                width: props.width,
              }}
            />
        </form>
      </ThemeProvider>
    );
}

export default TextBox;
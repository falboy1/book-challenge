import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {createStyles} from "@material-ui/core";
import theme from './MyTheme';
import {ThemeProvider} from '@material-ui/styles';

const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            fontWeight: 400,
        }
    })
));

const TextButton = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Button
                className={classes.button}
                color="primary"
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                style={{
                    width: props.width,
                    padding: props.padding,
                }}
            >
                {props.label}
            </Button>
        </ThemeProvider>
    );
};

export default TextButton;

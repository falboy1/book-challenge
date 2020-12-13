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
            "&:hover": {
                color: '#FFF'
            }
        }
    })
));

const PrimaryButton = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                onClick={props.onClick}
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

export default PrimaryButton;

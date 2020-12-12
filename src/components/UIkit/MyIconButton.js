import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {createStyles, IconButton} from "@material-ui/core";
import theme from './MyTheme';
import {ThemeProvider} from '@material-ui/styles';

const useStyles = makeStyles(() => (
    createStyles({
        "root": {
            marginRight: 'auto',
            marginLeft: 'auto',
            textAlign: 'center',
        },
        "icon": {
            color: '#FFF',
            
        },
        "text": {
            marginTop: '3px',
            textAlign: 'center',
        }
    })
));

const MyIconButton = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme} className={classes.root}>
            <div>
                <IconButton className={classes.icon}
                    size={props.size}
                    color={props.iconColor}
                    style={{
                        width: props.buttonWidth,
                        height: props.buttonHeight,
                        backgroundColor: props.backgroundColor,
                    }}
                >
                    {props.icon}
                </IconButton>
                <p 
                    style={{fontSize: props.fontSize}}
                    className={classes.text}
                >
                    {props.label}
                </p>
            </div>
        </ThemeProvider>
    );
};

export default MyIconButton;
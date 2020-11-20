import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            fontWeight: 600,
            marginBottom: '8px',
            "&:hover": {
                color: '#FFF'
            }
        }
    })
));

const PrimaryButton = (props) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} variant="contained" color="primary" endIcon={props.eIcon}>
            {props.label}
        </Button>
    );
};

export default PrimaryButton;

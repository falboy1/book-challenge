import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {createStyles, Typography} from "@material-ui/core";
import { fontFamily } from '@material-ui/system';

const useStyles = makeStyles(() => (
    createStyles({
        root: {
            fontFamily :['Ayuthaya'],
            fontWeight: 'bold',
        }
    })
));

const TitleLogo = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant='h6' className={classes.root}>
                Mindoku
            </Typography>
        </div>
    );
};

export default TitleLogo;
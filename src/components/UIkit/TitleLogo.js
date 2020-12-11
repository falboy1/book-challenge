import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";
import {createStyles, Typography} from "@material-ui/core";
import { fontFamily } from '@material-ui/system';

const useStyles = makeStyles(() => (
    createStyles({
        root: {
            fontFamily :['Ayuthaya'],
            
        }
    })
));

const TitleLogo = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant='h6' className={classes.root} fontWeight='500'>
                Mindoku
            </Typography>
        </div>
    );
};

export default TitleLogo;
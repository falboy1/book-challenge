import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {makeStyles} from "@material-ui/styles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles(() => {
    createStyles({
        "menu": {

        }
    })
});



const PopupMenu = (props) => {
    const classes = useStyles();

    return (
        <PopupState className={classes.menu} variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
            <React.Fragment>
            <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                Open Menu
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Cake</MenuItem>
                <MenuItem onClick={popupState.close}>Death</MenuItem>
            </Menu>
            </React.Fragment>
        )}
        </PopupState>
    );
}

export default PopupMenu;
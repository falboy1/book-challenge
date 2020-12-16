import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getIcon, getUsername } from '../../reducks/users/selectors';
import { signOut } from '../../reducks/users/operation';
import { push } from 'connected-react-router';

const UserIconMenu= () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const username = getUsername(selector);
    const icon = getIcon(selector);


    const [anchorEl, setAnchorEl] = useState(null);

    // メニュークリック時
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    // アイテムクリック時
    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <div>
            <Button onClick={handleClick}>
                <Avatar alt={username} src={icon} />
            </Button>

            <Menu
                id="user-icon-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    dispatch(push('/mypage'));    
                }}>
                    マイページ
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    dispatch(signOut());
                }}>
                    ログアウト
                </MenuItem>
            </Menu>
        </div>
    );
}

export default UserIconMenu;
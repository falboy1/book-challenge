import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getIcon, getProfile, getUserId } from '../reducks/users/selectors';
import {TextBox, PrimaryButton} from '../components/UIkit';
import { Avatar} from '@material-ui/core';
import {editProfile} from '../reducks/users/operation';
import '../assets/css/style.css';

const EditUser = (props) => {
    const dispatch = useDispatch();

    // selector
    const selector = useSelector((state) => state);
    const uid = getUserId(selector);
    const prev_username = getUsername(selector);
    const prev_icon = getIcon(selector);
    const prev_profile = getProfile(selector);

    //Hook
    const [username, setUsername] = useState(prev_username);
    const [profile, setProfile] = useState(prev_profile);
    const [icon, setIcon] = useState(prev_icon);

    // callback
    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    }, [setUsername]);

    const inputProfile = useCallback((event) => {
        setProfile(event.target.value)
    }, [setProfile]);

    return (
        <div className={'center'}>
            <h2>プロフィール編集画面</h2>
            <Avatar
                className="center"
                src={icon}
                style={{width: '150px', height:'150px'}}
            />
            <div className='vertical-space-30' />
            <TextBox 
                label={'ユーザ名'}
                value={username}
                onChange={inputUsername}
                width={'300px'}/>
            <TextBox 
                label={"自己紹介"} 
                placeholder={'例：仲良くしてください'}
                multiline={'multiline'} 
                rows={4}
                onChange={inputProfile}
                value={profile}
                width={'300px'}/>
            <div className={'vertical-space-20'}/>
            <PrimaryButton 
                label={"更新"} 
                onClick={() => dispatch(editProfile(uid, username, icon, profile))}
                width={'300px'} padding={'15px 10px'}/>
        </div>
    );
};

export default EditUser;
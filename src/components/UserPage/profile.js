import React, {Component} from 'react';
import { Avatar } from '@material-ui/core';
import '../../assets/css/style.css';



const Profile = (props) => {
    return(
        <div>
            <Avatar
                className="center"
                src={props.imgPath}
                style={{width: '150px', height:'150px'}}
            />
            <h3>{props.nickname}さん</h3>
            <p>{props.id}</p>
            <p>フォロワー{props.follower}人  フォロー中{props.follow}人</p>
            <p>{props.sentence}</p>
        </div>
    );
}

export default Profile;
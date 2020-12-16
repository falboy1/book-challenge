import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getIcon, getProfile, getUserId } from '../reducks/users/selectors';
import {TextBox, PrimaryButton} from '../components/UIkit';
import { Avatar} from '@material-ui/core';
import {editProfile} from '../reducks/users/operation';
import '../assets/css/style.css';
import { storage } from '../firebase';


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

    const uploadImage = useCallback((event) => {
        const file = event.target.files;

        // ファイルが選択されていなかった場合は処理を止める
        if (file.length == 0){
            return false;
        }

        // Blobに変換
        let blob = new Blob(file, {type: 'image/jpeg'});

        // ファイル名を乱数で生成
        const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N=16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')
    
        // Ref取得
        const uploadRef = storage.ref('images').child(fileName);
        // 画像のアップロード
        const uploadTask = uploadRef.put(blob);
        // アップロード完了後にダウンロードパスを取得
        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                setIcon(downloadURL); // stateの変更
            });
        });
    }, [setIcon]);


    

    return (
        <div className={'center'}>
            <h2>プロフィール編集画面</h2>
            <div className='editImage'>
                <label>
                    <Avatar
                        className="center pointer"
                        src={icon}
                        style={{width: '150px', height:'150px'}}
                    />
                    <input className="display-none" type='file' id="image" onChange={(event) => uploadImage(event)}/>
                    <p className="pointer">画像を変更する</p>
                </label>
            </div>
            <div className='vertical-space-30' />
            <TextBox 
                label={'ユーザ名'}
                value={username}
                onChange={inputUsername}
                width={'300px'}/>
            <TextBox 
                label={"自己紹介"} 
                placeholder={'例：仲良くしてください'}
                multiline={true} 
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
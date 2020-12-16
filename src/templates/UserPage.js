import React from 'react';
import { Profile} from '../components/UserPage';
import '../assets/css/style.css';
import { CenteredTabs, SecondaryButton, TextButton } from '../components/UIkit';
import SettingsIcon from '@material-ui/icons/Settings';
import { getUsername, getProfile, getIcon } from '../reducks/users/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {push} from 'connected-react-router';


const MyPage = () => {

    const dispatch = useDispatch();

    // プロフィール情報の取得
    const selector = useSelector((state) => state);
    const username = getUsername(selector);
    const profile = getProfile(selector);
    const icon = getIcon(selector);

    return(
        <div className='w80 center'>
            <div className='vertical-space-40' />
            <div className="right">
                <SecondaryButton label={'編集する'} onClick={() => dispatch(push('/mypage/edit'))}/>
            </div>
            <Profile 
                imgPath={icon}
                username={username}
                follower={"1"}
                follow={"5"}
                sentence={profile}
            />

            <CenteredTabs labels={['参加中のクラブ', 'お気に入りの本']}>
                <div>a</div>
                <div>b</div>
            </CenteredTabs>
        </div>
    );
}

export default MyPage;
import React from 'react';
import { Profile} from '../components/UserPage';
import '../assets/css/style.css';
import { CenteredTabs, TextButton } from '../components/UIkit';
import SettingsIcon from '@material-ui/icons/Settings';
import { getUsername } from '../reducks/users/selectors';
import { useDispatch, useSelector } from 'react-redux';


const MyPage = () => {

    const dipatch = useDispatch();
    const selector = useSelector((state) => state);
    const username = getUsername(selector);


    return(
        <div className='w80 center'>
            <div className='vertical-space-40' />
            <h2>プロフィール</h2>
            <Profile 
                imgPath={"https://amigo-pet.co.jp/images/dogcat/1515314209/1515314209_1.jpeg"}
                nickname={username}
                follower={"1"}
                follow={"5"}
                sentence={"はやく一人前になりたい"}
            />

            <CenteredTabs labels={['チャレンジ', 'お気に入りの本']}>
                <div>a</div>
                <div>b</div>
            </CenteredTabs>
        </div>
    );
}

export default MyPage;
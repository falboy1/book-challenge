import React from 'react';
import { Profile} from '../components/UserPage';
import '../assets/css/style.css';
import { CenteredTabs } from '../components/UIkit';


const MyPage = () => {
    return(
        <div className='w80 center'>
            <div className='vertical-space-40' />
            <h2>プロフィール</h2>
            <Profile 
                imgPath={"https://amigo-pet.co.jp/images/dogcat/1515314209/1515314209_1.jpeg"}
                nickname={'わんこーぎ'}
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
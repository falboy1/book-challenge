import React from 'react';
import { CenteredTabs, MyIconButton } from '../components/UIkit';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import '../assets/css/style.css';


const ClubPage = () => {
    const labels = ['進行中', '終了', '全て']; // タブのラベル名

    return(
        <div className='center w80'>
            <div className='vertical-space-40' />
            <h2>読書会</h2>
            <p>みんなで同じ本を読んで感想や達成感を共有しよう！</p>
            <div className='vertical-space-20' />
            <div className='flex flex-around w50 center'>
                <Link to="/task/search" style={{ textDecoration: 'none'}}>
                    <MyIconButton 
                        icon={<SearchIcon style={{width: '50px', height: '50px'}}/>}
                        iconColor={'#FFF'}
                        backgroundColor={'#2699F9'}
                        label={'さがす'}
                        fontSize={'12px'}
                    />
                </Link>

                <Link to="/task/create" style={{ textDecoration: 'none'}}>
                    <MyIconButton
                        icon={<CreateIcon style={{width: '50px', height: '50px'}}/>}
                        iconColor={'#FFF'}
                        backgroundColor={'#F08B27'}
                        label={'つくる'}
                        fontSize={'12px'}
                    />
                </Link>
            </div>
            <div className='w70 center'>
                <CenteredTabs labels={['進行中', '終了済み', 'すべて']}>
                    <div>aa</div>
                    <div>bb</div>
                    <div>cc</div>
                </CenteredTabs>
            </div>
        </div>
    );
}

export default ClubPage;
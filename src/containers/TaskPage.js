import React from 'react';
import { CenteredTabs, MyIconButton } from '../components/UIkit';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import '../assets/css/style.css';


const TaskPage = () => {
    const labels = ['進行中', '終了', '全て']; // タブのラベル名

    return(
        <div>
            <div className='vertical-space-40' />
            <div className='flex flex-around w30 center'>
                <MyIconButton 
                    icon={<SearchIcon style={{width: '50px', height: '50px'}}/>}
                    iconColor={'#FFF'}
                    backgroundColor={'#2699F9'}
                    label={'さがす'}
                    fontSize={'12px'}
                />
                <MyIconButton
                    icon={<CreateIcon style={{width: '50px', height: '50px'}}/>}
                    iconColor={'#FFF'}
                    backgroundColor={'#F08B27'}
                    label={'つくる'}
                    fontSize={'12px'}
                />
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

export default TaskPage;
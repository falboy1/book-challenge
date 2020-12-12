import React from 'react';
import { CenteredTabs } from '../components/UIkit';
import '../assets/css/style.css';


const TaskPage = () => {
    const labels = ['進行中', '終了', '全て']; // タブのラベル名

    return(
        <div>
            <div className='vertical-space-40' />
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
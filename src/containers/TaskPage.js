import React from 'react';
import { CenteredTabs } from '../components/UIkit';


const TaskPage = () => {
    const labels = ['進行中', '終了', '全て']; // タブのラベル名

    return(
        <div>
        



            <CenteredTabs labels={['label1', 'label2', 'label3']}>
                <div>aa</div>
                <div>bb</div>
                <div>cc</div>
            </CenteredTabs>
        </div>
    );
}

export default TaskPage;
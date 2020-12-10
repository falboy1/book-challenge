import React from 'react';
import { CenteredTabs, TabPanel } from '../components/UIkit';


const TaskPage = () => {
    const labels = ['参加中', '終了', '全て']; // タブのラベル名

    return(
        <div>
            参加しているチャレンジの一覧を表示します。
            <CenteredTabs labels={labels}>
                <div>aa</div>
                <div>bb</div>
                <div>cc</div>
            </CenteredTabs>
        </div>
    );
}

export default TaskPage;
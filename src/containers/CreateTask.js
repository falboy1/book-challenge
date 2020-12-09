import React from 'react';
import { PrimaryButton, TextBox} from '../components/UIkit';

const CreateTask = () => {
    return(
        <div>
            本を探す
            <TextBox label={"チャレンジの題名"} />
            <TextBox label={"詳細"} />
            <TextBox label={"期間"} />
            <PrimaryButton label={"作成"} />
        </div>
    );
}

export default CreateTask;
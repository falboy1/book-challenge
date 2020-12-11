import React from 'react';
import { PrimaryButton, TextBox} from '../components/UIkit';

const CreateTask = () => {
    return(
        <div className={'center'}>
            チャレンジを企画する
            <TextBox label={"チャレンジの題名"} width={'300px'}/>
            <TextBox label={"詳細"} width={'300px'}/>
            <TextBox label={"期間"} width={'300px'}/>
            <PrimaryButton label={"作成"} width={'300px'}/>
        </div>
    );
}

export default CreateTask;
import React from 'react';
import { PrimaryButton, TextBox, TextButton} from '../components/UIkit';
import {Emoji} from 'emoji-mart';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { Link} from 'react-router-dom';
import theme from '../components/UIkit/MyTheme';
import { ThemeProvider } from '@material-ui/core';

const CreateTask = () => {
    return(
        <div className={'center'}>
            <div className={'vertical-space-40'} />
            <h2>チャレンジを作る</h2>
            <Link>
                <TextButton label={'まずは本を選ぶ'} startIcon={<SearchIcon/>}/>
            </Link>
            <TextBox 
                label={"チャレンジの題名"}
                placeholder={"例：ビジネス書を読もう！"}
                width={'300px'}
            />
            <TextBox 
                label={"タグ"}
                placeholder={'#ビジネス'}
                width={'300px'}/>
            <TextBox 
                label={"期間"} 
                width={'300px'}/>
            <TextBox 
                label={"説明"} 
                placeholder={'例：誰でも参加歓迎です！'}
                multiline={'multiline'} 
                rows={4} 
                width={'300px'}/>
            <div className={'vertical-space-20'}/>
            <PrimaryButton label={"作成する"} width={'300px'} padding={'15px 10px'}/>
        </div>
    );
}

export default CreateTask;
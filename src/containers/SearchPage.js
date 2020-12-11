import React from 'react';
import { PrimaryButton, TextBox, SearchInputBase} from '../components/UIkit';
import { createStyles } from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import '../assets/css/style.css';


const SearchPage = (props) => {
    return(
        <div className={'center'}>
            チャレンジや本のタイトルを入力してください
                <SearchInputBase className={'center'} placeholder={'検索'} width={'400px'} />
            人気のチャレンジ
        </div>
    );
}

export default SearchPage;
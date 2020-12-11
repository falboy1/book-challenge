import React from 'react';
import { PrimaryButton, TextBox, SearchInputBase} from '../components/UIkit';
import { createStyles } from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";


const SearchPage = (props) => {
    return(
        <div>
            チャレンジや本のタイトルを入力してください
            <SearchInputBase placeholder={'検索'} />
            人気のチャレンジ
        </div>
    );
}

export default SearchPage;
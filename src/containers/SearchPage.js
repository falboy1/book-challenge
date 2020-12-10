import React from 'react';
import { PrimaryButton, TextBox, SearchInputBase} from '../components/UIkit';
import { createStyles } from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => {
    createStyles({
        'root' : {
            padding: '2px 4px',
            display: 'flex',
            alighnItems: 'center',
            width: 400
        },
        'input': {
            flex: 1
        }
    })
});


const SearchPage = (props) => {
    const classes = useStyles();

    return(
        <div>
            チャレンジや本のタイトルを入力してください
            <SearchInputBase placeholder={'検索'} />
        </div>
    );
}

export default SearchPage;
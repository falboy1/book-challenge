import { Button } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>ホーム画面</h1>
            <Link to="/task/search">チャレンジを探す</Link>
            <Link to="/task/create">チャレンジを作る</Link>
            <Link to="/task/all">チャレンジ一覧</Link>
        </div>
    );
};

export default Home;
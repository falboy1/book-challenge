import { Button } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>ホーム画面</h1>
            <Link to="/login">チャレンジを探す</Link>
            <Link to="/task/create">チャレンジを作る</Link>
        </div>
    );
};

export default Home;
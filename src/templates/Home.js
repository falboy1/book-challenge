import React from 'react';
import {Link} from 'react-router-dom';
import {PrimaryButton} from '../components/UIkit';
import group from '../assets/img/home/group.jpeg';
import reading from '../assets/img/home/reading.svg';
import '../assets/css/style.css';

const Home = () => {
    return(
        <div className={'w70 center'}>
            <img src={group} className={'w80 my5 center'}/>
            <div className={'flex flex-center'}>
                <h1 className='bold'>
                    みんなで読書を楽しもう
                </h1>
                <img src={reading} className={'reading-log'}/>
            </div>
            <div className={'my5 bold'}>
                一人だと読書が続かない。そんな人にぴったりのWebサービスです。<br/>みんなで同じ本を読んで達成感や感想を共有しよう！
            </div>
            <div className={'my30'}>
                <Link to="/signup"> 
                    <PrimaryButton label={'さっそく使い始める'} width={'200px'} padding={'20px 10px'}/>
                </Link>
            </div>
            <Link to="/search">本を探す</Link>
            <Link to="/club/search">チャレンジを探す</Link>
            <Link to="/club/create">チャレンジを作る</Link>
            <Link to="/club/all">チャレンジ一覧</Link>
        </div>
    );
};

export default Home;
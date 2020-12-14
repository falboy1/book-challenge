import React, {Component} from 'react';
import MainHeader from './components/main-header';
import MainContent from './components/main-content';
import {Home, SignIn, CreateClub, SignUp, MyPage, SearchPage, Reset} from './templates';
import {Switch, Route} from 'react-router';
import ClubPage from './templates/ClubPage';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './Auth';


function App() {
    // storeと接続の確認
    const dispatch = useDispatch();
    const selecter = useSelector((state) => state);

    return(
        <React.Fragment>
            <MainHeader />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin/reset" component={Reset} />
                <Auth>
                    <Route exact path="/mypage" component={MyPage} />
                    <Route exact path="/club/create" component={CreateClub} />
                    <Route exact path="/club/search" component={SearchPage} />
                    <Route exact path="/club/all" component={ClubPage} />
                </Auth>
            </div>
        </React.Fragment>
    );
}

export default App;
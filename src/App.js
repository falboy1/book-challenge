import React, {Component} from 'react';
import MainHeader from './components/main-header';
import MainContent from './components/main-content';
import {Home, SignIn, CreateClub, SignUp, MyPage, SearchPage} from './containers';
import {Switch, Route} from 'react-router';
import ClubPage from './containers/ClubPage';
import { useDispatch, useSelector } from 'react-redux';


function App() {
    // storeと接続の確認
    const dispatch = useDispatch();
    const selecter = useSelector((state) => state);
    console.log(selecter.users);

    return(
        <React.Fragment>
            <MainHeader />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/mypage" component={MyPage} />
                <Route path="/club/create" component={CreateClub} />
                <Route path="/club/search" component={SearchPage} />
                <Route path="/club/all" component={ClubPage} />
            </div>
        </React.Fragment>
    );
}

export default App;
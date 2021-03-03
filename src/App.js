import React, {Component} from 'react';
import {MainHeader} from './components/Header';
import MainContent from './components/main-content';
import {Home, SignIn, CreateReview, SignUp, MyPage, SearchPage, Reset, EditUser, SearchBooks} from './templates';
import {Switch, Route} from 'react-router';
import ClubPage from './templates/ClubPage';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './Auth';
import { Search } from '@material-ui/icons';


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
                    <Route exact path="/mypage/edit" component={EditUser} />
                    <Route exact path="/review/create" component={CreateReview} />
                    <Route exact path="/review/search" component={SearchPage} />
                    <Route exact path="/review/all" component={ClubPage} />
                    
                </Auth>
                <Route exact path="/search" component={SearchBooks} />
            </div>
        </React.Fragment>
    );
}

export default App;
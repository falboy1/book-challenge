import React, {Component} from 'react';
import MainHeader from './components/main-header';
import MainContent from './components/main-content';
import {Home, SignIn, CreateTask, SignUp, MyPage} from './containers';
import {Switch, Route} from 'react-router';


class App extends Component {
    render(){
        return(
            <React.Fragment>
                <MainHeader />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/mypage" component={MyPage} />
                <Route path="/task/create" component={CreateTask} />
            </React.Fragment>
        );
    }
}

export default App;
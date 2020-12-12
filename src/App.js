import React, {Component} from 'react';
import MainHeader from './components/main-header';
import MainContent from './components/main-content';
import {Home, SignIn, CreateTask, SignUp, MyPage, SearchPage} from './containers';
import {Switch, Route} from 'react-router';
import TaskPage from './containers/TaskPage';


class App extends Component {
    render(){
        return(
            <React.Fragment>
                <MainHeader />
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/mypage" component={MyPage} />
                    <Route path="/task/create" component={CreateTask} />
                    <Route path="/task/search" component={SearchPage} />
                    <Route path="/task/all" component={TaskPage} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
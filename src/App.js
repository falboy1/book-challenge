import React, {Component} from 'react';
import MainHeader from './components/main-header';
import MainContent from './components/main-content';
import {Home, SignIn, CreateTask} from './containers';
import {Switch, Route} from 'react-router';


class App extends Component {
    render(){
        return(
            <React.Fragment>
                <MainHeader />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/task/create" component={CreateTask} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
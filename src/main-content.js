import React, {Component} from 'react';
import Profile from './profile';
import TaskList from './task-list';
import TaskHeader from './task-header'
import './css/main.css';
import MainHeader from './main-header';
import Sidebar from './siderbar';
import Task from './task';


class MainContent extends Component {
    render(){
        return(
            <div className="col-xs-8 container">
                <TaskHeader />
                <TaskList />
            </div>
        );
    }
}

export default MainContent;
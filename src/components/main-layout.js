import React, {Component} from 'react';
import Profile from './profile';
import TaskList from './task-list';
import MainHeader from './main-header';
import Sidebar from './sidebar';
import MainContent from './main-content';


class MainLayout extends Component {
    render(){
        return(
            <div className="container-fluid">
                <MainHeader />
                <div className="row">
                    <MainContent />
                </div>
            </div>
        );
    }
}

export default MainLayout;
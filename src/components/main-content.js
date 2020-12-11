import React, {Component} from 'react';
import TaskList from './task-list';
import TaskHeader from './task-header';


class MainContent extends Component {
    render(){
        return(
            <div>
                <TaskHeader />
                <TaskList />
            </div>
        );
    }
}

export default MainContent;
import React, {Component} from 'react';
import Task from './task';


class TaskList extends Component {
    render(){
        return(
            <ul>
                <Task />
                <Task />
            </ul>
        );
    }
}

export default TaskList;
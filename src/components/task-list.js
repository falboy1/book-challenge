import React, {Component} from 'react';
import Task from './task';


class TaskList extends Component {
    render(){
        return(
            <div className="w70">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        );
    }
}

export default TaskList;
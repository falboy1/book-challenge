import React, {Component} from 'react';
import './css/task.css';


class Task extends Component {
    render(){
        return(
            <div>
                <h3>毎月の一冊チャレンジ</h3>
                <p>提案者:</p>
                <div className="task-wrapper">
                    <img></img>
                    <div>
                        <h3>羊と鋼の森</h3>
                        <p>著者:</p>
                        <p>期間:</p>
                        <p>参加者:</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Task;
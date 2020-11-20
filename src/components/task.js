import React, {Component} from 'react';

class Task extends Component {
    render(){

        const task = {
            'title': "毎月一冊",
            'discription': "毎月の一冊としてみんなで同じ参考書を使って勉強しましょう！やる気ある方誰でも参加OKです！ReactやJavaScript初心者も歓迎。",
            'memberNum': 5,
            'host': "デクくん",
            'period': "12/31",
        };

        return(
            <div className="c-box">
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.discription}</p>
                    <p>参加者 {task.memberNum}人</p>
                    <p>主催者 {task.host}</p>
                    <p>{task.period}まで</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbjgi0keeqi7CZu7borVULKqo6LX0efj8fr77JCyOuf7iH3CwIyN7nZC8QSfaztTn0Ym65OKw&usqp=CAc"></img>
                </div>  
            </div>
        );
    }
}

export default Task;
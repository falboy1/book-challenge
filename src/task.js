import React, {Component} from 'react';

class Task extends Component {
    render(){
        return(
            <div className="d-flex my-3 mx-auto" style={{width: "600px", height: "300px"}}>
                <div>
                    <h4 className="font-weight-bold text-success">毎月の一冊チャレンジ</h4>
                    <p>毎月の一冊としてみんなで同じ参考書を使って勉強しましょう！やる気ある方誰でも参加OKです！ReactやJavaScript初心者も歓迎。</p>
                    <p className="d-flex align-items-end">12/31まで</p>
                </div>
                <div className="m-4">
                    <img className="img pb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbjgi0keeqi7CZu7borVULKqo6LX0efj8fr77JCyOuf7iH3CwIyN7nZC8QSfaztTn0Ym65OKw&usqp=CAc"></img>
                </div>  
            </div>
        );
    }
}

export default Task;
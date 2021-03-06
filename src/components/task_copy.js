import React, {Component} from 'react';

class Task extends Component {
    render(){
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 my-3">
                <div className="card text-center h-100">
                    <div className="card-header">
                        <h6 className="card-title">毎月の一冊チャレンジ</h6>
                        <h7 className="card-subtitle">React入門</h7>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbjgi0keeqi7CZu7borVULKqo6LX0efj8fr77JCyOuf7iH3CwIyN7nZC8QSfaztTn0Ym65OKw&usqp=CAc"></img>
                    </div>
                    <div className="card-body"> 
                        <p>12/31まで</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;
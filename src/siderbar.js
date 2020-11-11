import React, {Component} from 'react';
import Profile from './profile';
import TaskList from './task-list';


class Sidebar extends Component {
    render(){
        return(
            <div className="col-xs-4 bg-dark">
                <nav class="navbar flex-column navbar-light bg-dark">
                    <h2>MyService</h2>
                    <a class="nav-link" href="#!">ホーム</a>
                    <a class="nav-link" href="#!">チャレンジ</a>
                    <a class="nav-link" href="#!">ともだち</a>
                    <a class="nav-link" href="#!">カレンダー</a>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
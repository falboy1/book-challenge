import React, {Component} from 'react';
import Task from './task';


class TaskList extends Component {
    render(){
        return(
            <div>
                <h2 className="text-center my-4">参加中のチャレンジ</h2>
                <div className="container">
                    <div className="card-deck">
                        <div class="row">
                            <Task />
                            <Task />
                            <Task />
                            <Task />
                            <Task />
                            <Task />
                            <Task />
                        </div>
                    </div>
                </div>
                
                <nav className="nav justify-content-center" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#!" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#!">1</a></li>
                        <li class="page-item"><a class="page-link" href="#!">2</a></li>
                        <li class="page-item"><a class="page-link" href="#!">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#!" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default TaskList;
import React, {Component} from 'react';

class MainHeader extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Book!</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">トレンド</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">チャレンジ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">マイページ</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">ログイン</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">会員登録</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainHeader;
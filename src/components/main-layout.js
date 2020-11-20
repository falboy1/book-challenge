import React, {Component} from 'react';
import MainHeader from './main-header';
import MainContent from './main-content';
import '../css/style.css';


class MainLayout extends Component {
    render(){
        return(
            <div>
                <MainHeader />
                <MainContent />
            </div>
        );
    }
}

export default MainLayout;
import React, {Component} from 'react';
import './css/profile.css';

class Profile extends Component {
    render(){
        return(
            <div>
                <div>
                    <img></img>
                    <h3>なまえさん</h3>
                    <p>ID: test</p>
                </div>

                <div>
                    <p>参加中: 5</p>
                    <p>達成済み: 3</p>
                </div>
            </div>
        );
    }
}

export default Profile;
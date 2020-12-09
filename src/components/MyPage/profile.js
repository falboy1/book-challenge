import React, {Component} from 'react';

class Profile extends Component {
    render(){
        return(
            <div className="profile-component">
                <div className="text-center">
                    <img className="img-fluid" src="https://www.min-petlife.com/data/article/239797/main_239797_cd32b_detail.jpg"></img>
                    <h4>なまえさん</h4>
                    <p>ID: test</p>
                </div>

                <div>
                    <p>参加中: 5</p>
                </div>
            </div>
        );
    }
}

export default Profile;
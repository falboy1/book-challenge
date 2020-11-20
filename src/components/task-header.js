import React, {Component} from 'react';
import {PrimaryButton} from './UIkit';
import {TextBox} from './UIkit';
import CreateIcon from '@material-ui/icons/Create';
import '../css/style.css';
import Box from '@material-ui/core/Box';

class TaskHeader extends Component {
    render() {
        return (
            <div>
                <PrimaryButton
                    label={'チャレンジを探す'}
                    eIcon={<CreateIcon />}
                />
                <PrimaryButton
                    label={'新しくチャレンジを作る'}
                    eIcon={<CreateIcon />}
                />
                <h2 className="text-center">参加中のチャレンジ</h2>
            </div>
        );
    }
}

export default TaskHeader;
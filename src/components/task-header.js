import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class TaskHeader extends Component {
    render() {
        return (
            <div className="mx-auto">
                 <Button variant="contained" color="primary">
                    Test
                </Button>
                <h3 className="text-center mt-5 mb-3">参加中のチャレンジ</h3>
            </div>
        );
    }
}

export default TaskHeader;
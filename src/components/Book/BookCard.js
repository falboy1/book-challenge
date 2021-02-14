import React from 'react';
import '../../assets/css/style.css';
import { TextButton } from '../UIkit';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router'

const BookCard = props => {
    const dispatch = useDispatch();
    

    return(
        <div className="flex">
            <div>
                {props.imgSrc && <img src={props.imgSrc}/>}
            </div>
            <div className="left">
                {props.title && <h3>{props.title}</h3>}
                {props.author && <p>{props.author}</p>}
                {props.publishDay && <p>props.publishDay</p>}
                <TextButton 
                    label={'投稿'} startIcon={<CreateIcon/>}
                    onClick={() => dispatch(push('/review/create'))}
                />
            </div>
        </div>
    );
}

export default BookCard;
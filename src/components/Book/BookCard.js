import React from 'react';
import '../../assets/css/style.css';

const BookCard = props => {

    return(
        
            <div className="flex">
                <div>
                    {props.imgSrc && <img src={props.imgSrc}/>}
                </div>
                <div className="left">
                    {props.title && <h3>{props.title}</h3>}
                    {props.author && <p>{props.author}</p>}
                    {props.publishDay && <p>props.publishDay</p>}
                    <p>読書会を探す 読書会を作る</p>
                </div>
            </div>
        
    );
}

export default BookCard;
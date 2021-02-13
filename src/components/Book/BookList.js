import React from "react";
import BookCard from './BookCard';
import '../../assets/css/style.css';

const BookList = (props) => {

    console.log(props)
  
    return (
        <ul className='common-list'>
            {props.bookList && props.bookList.map(book =>
                <li>
                    <BookCard
                        imgSrc={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.author}
                    />
                </li>
            )}
        </ul>
    );
};

export default BookList;
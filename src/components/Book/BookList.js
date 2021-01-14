import React from "react";
import BookCard from './BookCard';
import '../../assets/css/style.css';

const BookList = (props) => {

    // keywordから本を検索
    console.log(props)
  
    return (
        <ul className='common-list'>
            {props.bookList && props.bookList.map(book =>
                <li>
                    <BookCard
                        imgSrc={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
                        title={book.volumeInfo.title}
                    />
                </li>
            )}
        </ul>
    );
};

export default BookList;
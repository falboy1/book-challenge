import React from "react";
import BookCard from './BookCard';
import SearchBook from "./SearchBook";


const BookList = ({keyword}) => {

    // keywordから本を検索
    const bookList = SearchBook(keyword);
    bookList.map(item => console.log(item.volumeInfo.title))
    //console.log(bookList)
    return (
        <div>
            {bookList.map(book => 
                <BookCard 
                    imgSrc={book.volumeInfo.imageLinks.smallThumbnail}
                    title={book.volumeInfo.title}
                />
            )}
        </div>
    );
};

export default BookList;
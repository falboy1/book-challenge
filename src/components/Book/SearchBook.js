import {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBook = keyword => {
    // APIの検索結果のstate
    const [bookList, setBookList] = useState([]);
    // APIを叩く (非同期)
    const fetchBooks = async keyword => {
        // レスポンスを取得
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
        );
        const data = response.data.items;
        setBookList(data); // stateを更新
    }

    useEffect(() => {
        fetchBooks(keyword);
    }, [keyword]); // keyword更新時に実行
    
    return bookList;
};


export default SearchBook;
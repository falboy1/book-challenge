import React, { useState, useCallback, useEffect } from 'react';
import { PrimaryButton, TextBox} from '../components/UIkit';
import '../assets/css/style.css';
import { BookList} from '../components/Book';
import axios from 'axios';

const SearchBooks = () => {

    // Hook
    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    // callback
    const inputKeyword = useCallback((event) => {
        setKeyword(event.target.value)
    }, [setKeyword]);

    useEffect(() => {
        if (search != ""){
            const fetchData = async () => {
                const result = await axios(
                    `https://www.googleapis.com/books/v1/volumes?q=${search}`
                );
                    setData(result.data.items);
                };
                
                fetchData();
        }
    }, [search]);
        

    return (
        <div className="center">
            <div className="vertical-space-40"/>
            <h2>本をさがす</h2>
            <TextBox 
                label={"検索キーワード"}
                value={keyword}
                placeholder={""}
                required={true}
                onChange={inputKeyword}
                width={'300px'}
            />

            <PrimaryButton 
                label={"検索する"} 
                width={'300px'} 
                padding={'15px 10px'} 
                onClick={() => setSearch(keyword)}
            />
            <div className="vertical-space-40"/>
            <BookList bookList={data}/>
        </div>
    );
}

export default SearchBooks;
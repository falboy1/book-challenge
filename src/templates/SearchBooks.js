import React, { useState, useCallback, useEffect } from 'react';
import { PrimaryButton, TextBox} from '../components/UIkit';
import '../assets/css/style.css';
import { BookList} from '../components/Book';
import axios from 'axios';

const SearchBooks = () => {

    // Hook
    const [keyword, setKeyword] = useState("羊と鋼");

    // callback
    const inputKeyword = useCallback((event) => {
        setKeyword(event.target.value)
    }, [setKeyword]);    

    return (
        <div className="center">
            <div className="vertical-space-40"/>
            <TextBox 
                label={"検索キーワード"}
                value={keyword}
                placeholder={""}
                required={true}
                onChange={inputKeyword}
                width={'300px'}
            />

            <PrimaryButton label={"検索する"} width={'300px'} padding={'15px 10px'}/>
            
            <BookList keyword={keyword} />
        </div>
    );
}

export default SearchBooks;
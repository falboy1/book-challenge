import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SearchInputBase} from '../UIkit';

const SearchBook = () => {

    const dispatch = useDispatch();
    const [keyword, SetKeyword] = useState("");

    const inputKeyword = useCallback((event) => {
        SetKeyword(event.target.value)
    }, [SetKeyword]);


    return (
        <div>
            <SearchInputBase 
                placeholder={'検索'}
                value={keyword}
                onChange={inputKeyword}
                width={'400px'}
            />
        </div>
    );
}

export default SearchBook;
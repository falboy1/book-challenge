import React, { useCallback, useState } from 'react';
import { PrimaryButton, TextBox, TextButton} from '../components/UIkit';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import { getAuthor, getBookTitle } from '../reducks/currentReview/selectors';

const CreateReview = () => {
    const dispatch = useDispatch();

    //選択された本情報の取得
    const selector = useSelector((state) => state);
    const bookid = getBookId(selector);
    const bookTitle = getBookTitle(selector);
    const author = getAuthor(selector);
    
    // Hook
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [discription, setDiscription] = useState("");

    // callback
    const inputTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [setTitle]);

    const inputTags = useCallback((event) => {
        setTags((prevState => [...prevState, event.target.value]))
    }, [setTags]);

    const inputDiscription = useCallback((event) => {
        setDiscription(event.target.value)
    }, [setDiscription]);



    return(
        <div className={'center'}>

            <div className={'vertical-space-40'} />
            
            <h2>レビューの投稿</h2>
            <TextBox 
                label={"レビューのタイトル"}
                value={title}
                placeholder={"例：ビジネス書を読もう！"}
                required={'required'}
                onChange={inputTitle}
                width={'300px'}
            />
            <TextBox 
                label={"選択された本"}
                value={bookTitle}
                required={'required'}
                disabled={'disable'}
                width={'300px'}
            />
            <TextBox 
                label={"タグ"}
                value={tags}
                placeholder={'#プログラミング'}
                onChange={inputTags}
                width={'300px'}/>
            <TextBox
                label={"説明"}
                value={discription}
                placeholder={'例：誰でも参加歓迎です！'}
                multiline={true} 
                rows={4}
                onChange={inputDiscription}
                width={'300px'}/>
            <div className={'vertical-space-20'}/>
            <PrimaryButton 
                label={"投稿する"} width={'300px'} padding={'15px 10px'}
                onClick={() => dispatch(push('/review/create'))}
            />
        </div>
    );
}

export default CreateReview;
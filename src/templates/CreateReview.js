import React, { useCallback, useState } from 'react';
import { PrimaryButton, TextBox, StarRating, TextButton } from '../components/UIkit';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import { saveReview} from '../reducks/reviews/operation'
import { getUserId } from '../reducks/users/selectors';

const CreateReview = (props) => {
    const dispatch = useDispatch();

    //選択された本情報の取得
    const bookid = props.location.state.id;
    const bookTitle = props.location.state.title;
    const author = props.location.state.author;
    const img = props.location.state.imgSrc;

    // selector
    const selector = useSelector((state) => state);
    const uid = getUserId(selector)

    // Hook
    const [reviewTitle, setReviewTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [discription, setDiscription] = useState("");
    const [rating, setRating] = useState(3);

    // callback
    const inputReviewTitle = useCallback((event) => {
        setReviewTitle(event.target.value)
    }, [setReviewTitle]);

    const inputTags = useCallback((event) => {
        setTags((prevState => [...prevState, event.target.value]))
    }, [setTags]);

    const inputDiscription = useCallback((event) => {
        setDiscription(event.target.value)
    }, [setDiscription]);

    const inputRating = useCallback((event) => {
        setRating(event.target.value)
    }, [setRating]);


    return (
        <div className={'center'}>

            <div className={'vertical-space-40'} />

            <h2>レビューの投稿</h2>

            {img && <img src={img}/>}

            <h4>{bookTitle}</h4>

            <StarRating 
                size={'large'}
                value={rating}
                onChange={inputRating}
            />

            <TextBox
                label={"レビューのタイトル"}
                value={reviewTitle}
                placeholder={"この本をひとことで言うと"}
                required={'required'}
                onChange={inputReviewTitle}
                width={'300px'}
            />

            <TextBox
                label={"タグ"}
                value={tags}
                placeholder={'#プログラミング'}
                onChange={inputTags}
                width={'300px'} />
            <TextBox
                label={"説明"}
                value={discription}
                placeholder={'例：初心者でもわかりやすい本でした'}
                multiline={true}
                rows={4}
                onChange={inputDiscription}
                width={'300px'} />
            <div className={'vertical-space-20'} />
            <PrimaryButton
                label={"投稿する"} width={'300px'} padding={'15px 10px'}
                onClick={() => dispatch(saveReview(bookid, reviewTitle, tags, discription, uid, rating))}
            />
        </div>
    );
}

export default CreateReview;
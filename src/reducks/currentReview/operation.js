import {selectBookAction} from './actions';
import {push, goBack} from 'connected-react-router';

export const selectBook = (state) => {
    return (dispatch) => {
        console.log(state)
        dispatch(selectBookAction({
            bookid: state.id,
            bookTitle: state.title,
            author: state.author,
            img: state.imgSrc
        }));
        dispatch(push('/review/create'));
    }
}
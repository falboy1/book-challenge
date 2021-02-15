import {selectBookAction} from './actions';
import {push, goBack} from 'connected-react-router';

export const selectBook = (bookid, bookTitle, author) => {
    return (dispatch) => {
      
        dispatch(selectBookAction({
            bookid: bookid,
            bookTitle: bookTitle,
            author: author
        }));
        dispatch(push('/review/create'));
    }
}
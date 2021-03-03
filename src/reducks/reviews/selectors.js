import {createSelector} from 'reselect';

const currentReviewSelector = (state) => state.currentReview;

export const getBookId = createSelector(
    [currentReviewSelector],
    state => state.bookid
)

export const getBookTitle = createSelector(
    [currentReviewSelector],
    state => state.bookTitle
)

export const getAuthor = createSelector(
    [currentReviewSelector],
    state => state.author
)

export const getImg = createSelector(
    [currentReviewSelector],
    state => state.img
)
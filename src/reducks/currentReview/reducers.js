import { initialState } from '../../store/initialState';
import * as Actions from './actions';

export const CurrentReviewReducer = (state = initialState.currentReview, action) => {
    switch (action.type) {
        case Actions.CREATE_REVIEW:
            return {
                ...state,
                ...action.payload
            }
        case Actions.EDIT_REVIEW:
            return {
                ...state,
                ...action.payload
            }
        case Actions.SELECT_BOOK:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
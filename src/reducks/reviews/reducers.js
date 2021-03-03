import { initialState } from '../../store/initialState';
import * as Actions from './actions';

export const ReviewsReducer = (state = initialState.reviews, action) => {
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
        default:
            return state;
    }
}
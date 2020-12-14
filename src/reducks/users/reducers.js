import { initialState } from '../../store/initialState';
import * as Actions from './actions';


export const UsersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,            
                ...action.payload
    
            }
        case Actions.SIGN_OUT:
            return {
                ...action.paylod
            }
        case Actions.EDIT_USER_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
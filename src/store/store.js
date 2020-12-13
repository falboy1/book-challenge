import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware, connectRouter} from 'connected-react-router';

// Reducers
import {UsersReducer} from '../reducks/users/reducers'

// reduxをcreateStoreを用いてcreateStoreの再定義
export default function createStore(history){
    // redux-logger
    let middleWares = [routerMiddleware(history), thunk];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger({
            collapsed: true,
            diff: true
        });
        middleWares.push(logger)
    }

    return reduxCreateStore(
        combineReducers(
            {
                users:UsersReducer,
                router: connectRouter(history),
            }
        ),
        applyMiddleware(
            ...middleWares
        )
    );
}
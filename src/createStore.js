import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import {routerMiddleware, connectRouter} from 'connected-react-router';
import * as reducers from './reducers';

export default function createStore(history){
    return reduxCreateStore(
        combineReducers(
            {
                ...reducers,
                router: connectRouter(history),
            }
        ),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}
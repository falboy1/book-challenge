import { push } from 'connected-react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listenAuthState } from './reducks/users/operation';
import { getIsSignedIn} from './reducks/users/selectors';

const Auth = (props) => {
    const dispatch =useDispatch();
    const selector = useSelector((state) => state);
    const isSignedIn = getIsSignedIn(selector);

    // didmount
    useEffect( () => {
        if (!isSignedIn){
            dispatch(listenAuthState())
        }
    }, [])

    if (!isSignedIn) {
        return <></>
    } else {
        return props.children;
    }
}

export default Auth;
export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState) => {
    return {
        type: 'SIGN_IN',
        payload: {
            isSignedIn: true,
            username: userState.username,
            email: userState.email,
            icon: userState.icon,
            nickName: userState.nickName,
        }
    }
}

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = (userState) => {
    return {
        type: 'SIGN_OUT',
        payload: {
            isSignedIn: false,
            username: '',
            email: '',
            icon: '',
            nickName: '',
        }
    }
}
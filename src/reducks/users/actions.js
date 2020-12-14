export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState) => {
    return {
        type: 'SIGN_IN',
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username,
            email: userState.email,
            icon: userState.icon,
            profile: userState.profile,
        }
    }
}

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = (userState) => {
    return {
        type: 'SIGN_OUT',
        payload: {
            isSignedIn: false,
            uid: '',
            username: '',
            email: '',
            icon: '',
            profile: '',
        }
    }
}


export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const editProfileAction = (userState) => {
    return {
        type: 'EDIT_USER_PROFILE',
        payload: {
            username: userState.username,
            icon: userState.icon,
            profile: userState.profile,
        }
    }
}
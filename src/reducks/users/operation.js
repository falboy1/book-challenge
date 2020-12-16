import {auth, db, storage, FirebaseTimestamp} from '../../firebase'
import {push, goBack} from 'connected-react-router';
import { editProfileAction, signInAction, signOutAction } from './actions';


// 認証済みかどうか確認 : Authコンポーネントから利用
export const listenAuthState = () => {
    return async (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid;
                // firestoreからデータを取得
                db.collection('users').doc(uid).get()
                        .then(snapshot => {
                            const data = snapshot.data();

                            if (!data) {
                                throw new Error("ユーザーデータが存在しません。");
                            }

                            dispatch(signInAction({
                                isSignedIn: true,
                                uid: uid,
                                username: data.username,
                                email: data.email,
                                icon: data.icon,
                                profile: data.profile
                            }));
                        })
            } else {
                dispatch(push('/signin'))
            }
        })
    }
}


// サインアップ: firebaseの認証とfirestoreのドキュメント作成
export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        // 入力チェック
        if (username === '' || email === '' || password === '' || confirmPassword === ''){
            alert("未入力の項目があります。")
            return false
        }
        if (password !== confirmPassword) {
            alert("パスワードが一致しません。もう一度お試しください。")
            return false
        }
        if (password.length < 6){
            alert("パスワードは6文字以上で入力してください。")
        }
        // TODO: メールの形式
        // TODO: 半角などのチェック

        // ユーザ作成 & dbコレクションの作成
        return auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                
                if (user) {
                    const uid = user.uid;
                    const timestamp = FirebaseTimestamp.now()
                    const userInitialData = {
                        uid: uid,
                        username: username,
                        email: email,
                        created_at: timestamp,
                        updated_at: timestamp,
                    }

                    db.collection('users').doc(uid).set(userInitialData).then(async () => {
                        dispatch(push('/'));
                    });
                }
            }).catch ((error) => {
                alert('アカウントの登録に失敗しました。もう一度お試しください。')
                throw new Error(error);
            })
    }
}


// サインイン
export const signIn = (email, password) => {
    return async (dispatch) => {
        // 入力チェック
        if (email === "" || password === "") {
            alert("未入力の項目があります。");
            return false;
        }
        // firebase authの認証を利用
        auth.signInWithEmailAndPassword(email, password)
            .then( result => {
                const userState = result.user;
                if (userState) {
                    const uid = userState.uid;
                    // 自分のデータをfirestoreから取得
                    db.collection('users').doc(uid).get()
                        .then(snapshot => {
                            const data = snapshot.data();

                            if (!data) {
                                throw new Error("ユーザーデータが存在しません。");
                            }

                            dispatch(signInAction({
                                isSignedIn: true,
                                uid: uid,
                                username: data.username,
                                email: data.email,
                                icon: data.icon,
                                profile: data.profile,
                            }));
                            // 認証後の遷移
                            dispatch(push('/'));
                        })
                }
            }).catch ((error) => {
                // 失敗
                alert('ログインに失敗しました。もう一度お試しください。')
                throw new Error(error);
            })
    }
}

// サインアウト
export const signOut = () => {
    return async (dispatch) => {
        const result = window.confirm('ログアウトしますか？');
        if (result){
            auth.signOut()
            .then(() => {
                dispatch(signOutAction())
                dispatch(push('/signin'))
            });
        }
    }
}

// パスワードリセットメールの送信
export const resetPassword = (email) => {
    return async (dispatch) => {
        // 入力チェック
        if( email==='' ){
            alert("未入力の項目があります。");
            return false;
        } else {
            auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert('パスワードリセット用のメールが送信されました。')
                    dispatch(push('/signin'))
                }).catch (() => {
                    alert('パスワードリセットに失敗しました。')
                })
        }
    }
}

// プロフィール情報の変更
export const editProfile = (uid, username, icon, profile) => {
    return async (dispatch) => {
        // 入力チェック
        if (username === ''){
            alert('ユーザネームを入力してください')
            return false
        }
        // TODO: 不適切な名前をはじく

        // タイムスタンプ取得
        const timestamp = FirebaseTimestamp.now()
        // firestoreに追加
        db.collection("users").doc(uid).set({
            username: username,
            icon: icon,
            profile: profile,
            updated_at: timestamp
        }, {merge: true})
        .then(function() {
            // プロフィールを編集
            dispatch(editProfileAction({
                username: username,
                icon: icon,
                profile: profile,
            }))
            // マイページに戻す
            dispatch(push('/mypage'))
        })
        .catch(function(error){
            console.error("error", error)
        })
    }
}
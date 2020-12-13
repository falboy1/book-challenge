import {auth, db, FirebaseTimestamp} from '../../firebase'
import {push, goBack} from 'connected-react-router';

export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        // 入力項目のチェック
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
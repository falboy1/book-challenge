import {push, goBack} from 'connected-react-router';
import {db, FirebaseTimestamp} from '../../firebase';

const reviewsRef = db.collection('reviews')

export const saveReview = (bookid, title, tags, discription, uid, rating) => {
    return async (dispatch) => {
        const timestamp = FirebaseTimestamp.now()

        const data = {
            bookid: bookid,
            discription: discription,
            tags: tags,
            uid: uid,
            reviewTitle: title,
            rating: rating,
            updated_at: timestamp
        }
        // 新規作成時のみの処理
        const ref = reviewsRef.doc();
        const id = ref.id
        data.id = id
        data.created_at = timestamp

        return reviewsRef.doc(id).set(data)
            .then(() => {
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}
import React from 'react';
import { PrimaryButton, TextBox} from '../components/UIkit';

const SearchPage = () => {
    return(
        <div>
            チャレンジや本のタイトルを入力してください
            <TextBox label={"チャレンジ名、本のタイトル、カテゴリ"} />
            <PrimaryButton label={"検索"} />
        </div>
    );
}

export default SearchPage;
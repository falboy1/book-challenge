import React from 'react';
import { SearchInputBase} from '../components/UIkit';
import '../assets/css/style.css';


const SearchPage = (props) => {
    return(
        <div className={'center'}>
            <div className="vertical-space-40"/>
            <h2>チャレンジを探す</h2>
                <SearchInputBase className={'center'} placeholder={'検索'} width={'400px'} />
            人気のチャレンジ
        </div>
    );
}

export default SearchPage;
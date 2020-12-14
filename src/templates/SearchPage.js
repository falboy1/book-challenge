import React from 'react';
import { SearchInputBase} from '../components/UIkit';
import '../assets/css/style.css';


const SearchPage = (props) => {
    return(
        <div className={'center'}>
            <div className="vertical-space-40"/>
            <h2>読書会を探す</h2>
            <div className={"my5"}>
                <SearchInputBase className={'center'} placeholder={'検索'} width={'400px'} />
            </div>
            人気の読書会
        </div>
    );
}

export default SearchPage;
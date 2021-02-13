import React, { useCallback, useState } from 'react';
import { PrimaryButton, TextBox, TextButton} from '../components/UIkit';
import SearchIcon from '@material-ui/icons/Search';
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Stepper } from '../components/Club';


const CreateClub = () => {
    const dispatch = useDispatch();
    
    // Hook
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [duration, setDuration] = useState("");
    const [discription, setDiscription] = useState("");

    // callback
    const inputTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [setTitle]);

    const inputTags = useCallback((event) => {
        setTags((prevState => [...prevState, event.target.value]))
    }, [setTags]);

    const inputDuration = useCallback((event) => {
        setDuration(event.target.value)
    }, [setDuration]);

    const inputDiscription = useCallback((event) => {
        setDiscription(event.target.value)
    }, [setDiscription]);



    return(
        <div className={'center'}>

            <div className={'vertical-space-40'} />
            
            <h2>読書会を作る</h2>
            <Link>
                <TextButton label={'まずは本を選ぶ'} startIcon={<SearchIcon/>}/>
            </Link>
            <TextBox 
                label={"読書会の題名"}
                value={title}
                placeholder={"例：ビジネス書を読もう！"}
                required={'required'}
                onChange={inputTitle}
                width={'300px'}
            />
            <TextBox 
                label={"選択された本"}
                required={'required'}
                disabled={'disable'}
                width={'300px'}
            />
            <TextBox 
                label={"タグ"}
                value={tags}
                placeholder={'#ビジネス'}
                onChange={inputTags}
                width={'300px'}/>
            <TextBox 
                label={"期間"}
                value={duration}
                onChange={inputDuration}
                width={'300px'}/>
            <TextBox 
                label={"説明"}
                value={discription}
                placeholder={'例：誰でも参加歓迎です！'}
                multiline={true} 
                rows={4}
                onChange={inputDiscription}
                width={'300px'}/>
            <div className={'vertical-space-20'}/>
            <PrimaryButton label={"作成する"} width={'300px'} padding={'15px 10px'}/>
        </div>
    );
}

export default CreateClub;
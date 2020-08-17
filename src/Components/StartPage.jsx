import React, {useState} from 'react';
import logo from '../img/logo.svg';

const StartPage = () => {
    
    const wordsOnLibrary = useState(JSON.parse(localStorage.getItem('library')) || 0)
    let totalWords = wordsOnLibrary[0]
    if (!totalWords.length) {
        totalWords = []
    }

    return (
        <div className='start_page'>
            <img src={logo} alt="logo" />
            <h1>My English App</h1>
            <div className='words_on_library'>Words on Library: {totalWords.length} </div>
        </div>
    )
}

export default StartPage;
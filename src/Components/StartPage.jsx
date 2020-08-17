import React from 'react';
import logo from '../img/logo.svg';

const StartPage = () => {


    const library = JSON.parse(localStorage.getItem('library')) || [{ id: 0, word: '', translate: '', correct: 0, error: 0, learn: 0 }]

    const totalWords = JSON.parse(localStorage.getItem('library')).length
    Array.prototype.sum = function (prop) {
        let total = 0
        for (let i = 0, _len = this.length; i < _len; i++) {
            total += this[i][prop]
        }
        return total
    }
    const sumLearn = library.sum("learn");
    const sumCorrect = library.sum("correct");
    const sumError = library.sum("error");
    const overalLearn = sumCorrect / (sumCorrect + sumError) * 100

    // console.log(sumLearn)
    // console.log(sumCorrect)
    // console.log(sumError)
    // console.log(sumCorrect / (sumCorrect + sumError) * 100)


    return (
        <div className='start_page'>
            <img src={logo} alt="logo" />
            <h1>My English App</h1>
            <div className='words_on_library'>Words on Library: {totalWords} </div>
            <div className='overal_progress'>Overall learning progress: {overalLearn}%</div>
        </div>
    )
}

export default StartPage;
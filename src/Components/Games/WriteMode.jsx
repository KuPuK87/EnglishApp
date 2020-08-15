import React, { useRef, useState } from 'react';

export default (props) => {
    const inputRef = useRef()

    const library = JSON.parse(localStorage.getItem('library')) || [{ id: 0, word: 'a', translate: '' }]
    const [index, setIndex] = useState(0)
    const CheckKeyPress = (event) => {
        if(event.key === 'Enter') {
            checkGame()
        }
    }
    const checkGame = () => {
        if (inputRef.current.value === library[index].translate.replace('the', '').toLowerCase()) {
            setIndex(index + 1)
            console.log(true)
            props.setCorrectAnswer(props.correctAnswer + 1)
            props.setScore(props.score + 1)
        } else {
            props.setWrongAnswer(props.wrongAnswer + 1)
        }
        inputRef.current.value = ''
    }
    return (
        <div className='mode_wraper'>
            <div className='mode_title-word'>
                {library[index].word}
            </div>
            <p className='mode_title-word-description'>Set translation fo this word</p>
            <div className='input_block'>
                <input onKeyPress={CheckKeyPress} ref={inputRef} type="text" placeholder='Enter word' className='custom_input' />
                <button className='btn_enter' onClick={checkGame}>Enter</button>
            </div>
        </div>
    )
}
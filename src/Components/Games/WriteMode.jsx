import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from './../../context'

export default (props) => {
    const context = useContext(Context)
    const inputRef = useRef()
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5) || [{ id: 0, word: 'a', translate: '' }])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        return () => {
            localStorage.setItem('score', context.score)
        }
    })
    const CheckKeyPress = (event) => {
        if (event.key === 'Enter') {
            checkGame()
        }
    }
    const checkGame = () => {
        if (index !== library.length - 1) {
            if (inputRef.current.value === library[index].translate.replace('the ', '').toLowerCase()) {
                setIndex(index + 1)
                props.setCorrectAnswer(props.correctAnswer + 1)
                context.setScore(context.score + 1)
                library[index].correct = library[index].correct + 1
                localStorage.setItem('library', JSON.stringify(library))
            } else {
                props.setWrongAnswer(props.wrongAnswer + 1)
                library[index].error = library[index].error + 1
                localStorage.setItem('library', JSON.stringify(library))
            }
            inputRef.current.value = ''
        } else {
            alert('Good job!')
            setLibrary(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5))
            inputRef.current.value = ''
        }
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
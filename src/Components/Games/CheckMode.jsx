import React, { useEffect, useState } from 'react';

export default (props) => {

    const checkWord = (word) => {
        if (library.length - 1 !== currentWordIndex) {
            if (word === library[currentWordIndex].word) {
                props.setCorrectAnswer(props.correctAnswer + 1)
                props.setScore(props.score + 1)
                setCurrentWordIndex(currentWordIndex + 1)
            } else {
                props.setWrongAnswer(props.wrongAnswer + 1)
            }
        } else {
            alert('Game Over')
            props.setCorrectAnswer(0)
            props.setWrongAnswer(0)
            setCurrentWordIndex(0)
        }
    }

    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')))
    const [checkArr, setCheckArr] = useState([])
    const currentWord = library[currentWordIndex].translate
    const [initialScore, setInitialScore] = useState(props.score)

    useEffect(() => {
        const filterArr = library.filter((item, index) => index !== currentWordIndex)
        filterArr.sort(() => Math.random() - 0.5)
        const checkArr = [filterArr[0].word, filterArr[1].word, library[currentWordIndex].word]
        setCheckArr(checkArr.sort(() => Math.random() - 0.5))
    }, [props.correctAnswer])

    useEffect(() => {
        return () => {
            props.setScore(initialScore)
        }
        //componentWillUnmount
    }, [])

    return (
        <div className='mode_wraper'>
            <div className='mode_title-word'>
                {currentWord}
            </div>
            <p className='mode_title-word-description'>Set translation fo this word</p>

            <div className='check_item-block'>
                {checkArr.map((item, index) => <div key={index} className='check_item' onClick={() => checkWord(item)}>
                    {item}
                </div>)}

            </div>
        </div>
    )
}
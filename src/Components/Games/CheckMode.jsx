import React, { useEffect, useState } from 'react';

export default (props) => {

    const checkWord = () => {
        props.setScore(props.score + 1)
    }

    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')))
    const currentWord = library[currentWordIndex].translate
    const [initialScore, setInitialScore] = useState(props.score)

    useEffect(() => {
        const filterArr = library.filter((item, index) => index !== currentWordIndex)
        filterArr.sort(() => Math.random() - 0.5)
        const checkArr = [filterArr[0].word, filterArr[1].word, library[currentWordIndex].word] 
        checkArr.sort(() => Math.random() - 0.5)
    }, [])

    useEffect(() => {
        return () => {
            props.setScore(initialScore)
        }
        //componentWillUnmount
    }, [])
    console.log(initialScore)
    console.log(props.score)

    return (
        <div className='mode_wraper'>
            <div className='mode_title-word'>
                Forest
          </div>
            <p className='mode_title-word-description'>Set translation fo this word</p>

            <div className='check_item-block'>
                <div className='check_item' onClick={checkWord}>
                    Undefined
                </div>
                <div className='check_item'>
                    Undefined
                </div>
                <div className='check_item'>
                    Undefined
                </div>
            </div>
        </div>
    )
}
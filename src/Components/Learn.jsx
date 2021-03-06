import React, { useState } from 'react';

const Learn = ({ setScore, score, CheckLevel }) => {
    const library = JSON.parse(localStorage.getItem('library')) || [{ id: 0, word: '', translate: '' }]
    const [index, setIndex] = useState(0)
    const [end, setEnd] = useState(false)
    const word = library[index]
    const repeatLearn = () => {
        setEnd(false)
        setIndex(0)
    }
    const nextWord = () => {
        if (library.length - 1 !== index) {
            setIndex(index + 1)
            setScore(score + 0.5)
            CheckLevel()
            library[index].learn = library[index].learn + 1
            localStorage.setItem('library', JSON.stringify(library))
        } else {
            library[index].learn = library[index].learn + 1
            localStorage.setItem('library', JSON.stringify(library))
            setEnd(true)
        }

    }
    return (
        <div className='learn_wrapper'>
            <div className='learn_container'>
                {!end ? <div className='percentage'>{Math.floor((word.learn + word.correct - 5 - word.error) / 5 * 100)}%</div> :
                    null}
                <div className='word_translation'>
                    {!end ? word.translate : <div>
                        Well done!
                        <div onClick={repeatLearn} className='btn_repeat'>
                            &#10227;
                        </div>
                    </div>}
                </div>
                {!end ? <div className='word_container'>
                    <span className='description_label'>Translation</span>
                    <span className='word'>{word.word}</span>
                </div> : null}
            </div>
            {!end ?
                <div onClick={nextWord} className='btn_next'>
                    &#8594;
            </div>
                :
                null
            }
        </div>
    )
}

export default Learn;
import React, { useState } from 'react';

const Learn = () => {
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
        } else {
            setEnd(true)
        }

    }
    return (
        <div className='learn_wrapper'>
            <div className='learn_container'>
                {!end ? <div className='percentage'>50%</div> :
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
import React, {useRef} from 'react';

export default (props) => {
    const inputRef = useRef()

    return (
        <div className='mode_wraper'>
            <input ref={inputRef} type="text" placeholder='Enter word' />
            <button >Check</button>
        </div>
    )
}
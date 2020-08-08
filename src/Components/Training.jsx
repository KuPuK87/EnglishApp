import React, { useEffect } from 'react';
import imgMode1 from './../img/EasyMode.png'
import imgMode2 from './../img/HardMode.png'
import Mode from './Mode'

const Training = () => {
    const modeClassName = ['easy_mode', 'hard_mode']
    const modeTitle = ['Check words Mode', 'Write words Mode']
    const modeDescription = ['Easy mode', 'Hard mode']
    const imgMode =[imgMode1, imgMode2]
    const path = ['check-mode', 'write-mode']

    useEffect(() => {
        return () => {
            // document.removeEventListener()
        }
    })
    return (
        <div className='mode_page'>
            <Mode modeClassName={modeClassName[0]}
                modeTitle={modeTitle[0]}
                modeDescription={modeDescription[0]}
                imgMode={imgMode[0]}
                path ={path[0]}
            />
            <Mode modeClassName={modeClassName[1]}
                modeTitle={modeTitle[1]}
                modeDescription={modeDescription[1]}
                imgMode={imgMode[1]}
                path ={path[1]}
            />
        </div>
    )
}

export default Training;
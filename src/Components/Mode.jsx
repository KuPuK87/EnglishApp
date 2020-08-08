import React from 'react';
import imgMode1 from '../img/EasyMode.png';

export default (props) => {
    const modeClassName = 'mode_container ' + props.modeClassName
    return (
        <div className={modeClassName}>
            <div>
                <h2 className='mode_title'> {props.modeTitle} </h2>
                <p className='mode_description'>{props.modeDescription}</p>
            </div>
            <div>
                <img src={props.imgMode} alt="#" />
            </div>
        </div>
    )
}
import React from 'react';

export default () => {
    return (
        <div className='game_page'>
            
            <button className='btn_exit'>Exit</button>

            <div className='points_block'>
                <span className='correct_title'>Correct:</span>
                <span className='error_title'>Error:</span>
            </div>
        </div>
    )
}
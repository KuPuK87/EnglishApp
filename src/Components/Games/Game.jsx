import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import CheckMode from "./CheckMode";
import WriteMode from "./WriteMode";

export default (props) => {
    const location = useLocation()
    return (
        <div className='game_page'>
            <NavLink to='/training'>
                <button className='btn_exit'>Exit</button>
            </NavLink>
            <div className='points_block'>
                <span className='correct_title'>Correct:</span>
                <span className='error_title'>Error:</span>
            </div>
            {location.pathname === '/training/check-mode' ?
                <CheckMode
                    setScore={props.setScore}
                    score={props.score}
                /> :
                location.pathname === '/training/write-mode' ?
                    <WriteMode
                        setScore={props.setScore}
                        score={props.score}
                    /> : null}
        </div >
    )
}
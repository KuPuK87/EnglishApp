import React from 'react';
import logo from '../../img/logo.svg';

const LogoContainer = (props) => {
    return (
        <div className="logo_container">
            <img src={logo} alt="logo" />
            <span className="level_title">LEVEL {props.level}</span>
        </div>
    )
}
export default LogoContainer;
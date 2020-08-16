import React from 'react';
import logo from '../../img/logo.svg';
import { NavLink } from "react-router-dom";

const LogoContainer = (props) => {
    return (
        <div className="logo_container">
            <NavLink to='/'>
                <img src={logo} alt="logo" />
            </NavLink>
            <span className="level_title">LEVEL {props.level}</span>
        </div>
    )
}
export default LogoContainer;
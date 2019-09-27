import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/bakary.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'} className={s.loginBlockNav}>login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import s  from './Nav.module.css';
const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.items}>
      <div className={s.item }>
        <NavLink className={active=> active.isActive ? s.activeLink : ''} to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={active=> active.isActive ? s.activeLink : ''} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={active=> active.isActive ? s.activeLink : ''} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={active=> active.isActive ? s.activeLink : ''} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={active=> active.isActive ? s.activeLink : ''} to='/settings'>Settings</NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Nav;

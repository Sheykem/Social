import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog}><NavLink to='/dialogs/1'>Alinka</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/2'>Alex</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/3'>Ura</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/4'>Stas</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/5'>Oleg</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/6'>Vlad</NavLink></div>
      </div>
      <div className={s.messages}>
        <div className={s.message}> You have nice skills</div>
        <div className={s.message}>Hi is your Redax</div>
        <div className={s.message}>Good day man</div>
      </div>
    </div>
  );
};

export default Dialogs;

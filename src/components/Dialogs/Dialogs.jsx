import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const MessageItem = (props) => {
  return (
        <div className={s.message}>{props.message}</div>
  );
};

 const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name='Alinka' id='1'/>
        <DialogItem name='Sergey' id='2'/>
        <DialogItem name='Stas' id='3'/>
        <DialogItem name='Oleg' id='4'/>
        <DialogItem name='Alex' id='5'/>
        <DialogItem name='Ura' id='6'/>
      </div>
      <div className={s.messages}>
        <MessageItem message='Hello men'/>
        <MessageItem message='What are you doing?'/>
        <MessageItem message='Who is your Redax'/>
      </div>
    </div>
  );
};

export default Dialogs;

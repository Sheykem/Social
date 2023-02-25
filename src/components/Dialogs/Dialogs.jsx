import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


let dialogsData = [
  {id:1, name:'Alinka'},
  {id:2, name:'Sergey'},
  {id:3, name:'Stas'},
  {id:4, name:'Oleg'},
  {id:5, name:'Alinka'},
  {id:6, name:'Ura'},
]

let messagesData = [
  {id:1,message:'Hello men'},
  {id:2,message:'What are you doing?'},
  {id:3,message:'Who is your'},
]

 const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      </div>
      <div className={s.messages}>
        <MessageItem message={messagesData[0].message} id={messagesData[0].id}/>
        <MessageItem message={messagesData[1].message} id={messagesData[1].id}/>
        <MessageItem message={messagesData[2].message} id={messagesData[2].id}/>

      </div>
    </div>
  );
};

export default Dialogs;

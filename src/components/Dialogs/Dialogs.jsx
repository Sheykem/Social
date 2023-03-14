import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ));

  let dialogsMesseges = props.state.messagesData.map((el) => (
    <MessageItem key={el.id} message={el.message} id={el.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{dialogsMesseges}</div>
    </div>
  );
};

export default Dialogs;

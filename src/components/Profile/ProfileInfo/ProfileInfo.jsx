import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div className={s.flex}>
      <img className={s.ava} src="/img/relax.jpg" alt="" />
      <div className={s.description}>
        <p className="">Age: 25</p>
        <p className="">Name: Vadim</p>
        <p className="">City: Zaporozhye</p>
        <p className="">Work: Frontend developer</p>
      </div>
    </div>
  );
};

export default ProfileInfo;

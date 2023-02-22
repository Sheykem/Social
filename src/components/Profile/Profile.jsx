import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
const Profile = (props) => {
  return (
    <div className={s.Allcontent}>
      <img className={s.BigImg} src="https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg" />
      <div className={s.content}>
        <div className={s.flex}>
          <img className={s.ava} src="/img/relax.jpg" alt="" />
          <div className={s.description}>
            <p className="">Age: 25</p>
            <p className="">Name: Vadim</p>
            <p className="">City: Zaporozhye</p>
            <p className="">Work: Frontend developer</p>
          </div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;

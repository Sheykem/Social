import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

  return (
    <div className={s.Allcontent}>
      <img className={s.BigImg} src="https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg" />
      <div className={s.content}>
        <ProfileInfo  />
        <MyPosts postsData={props.postsData}/>
      </div>
    </div>
  );
};

export default Profile;

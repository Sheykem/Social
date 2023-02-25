import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  return (
    <div>
      <div className={s.title}>My Posts</div>
      <div className={s.commit}>
        <textarea name="" id="" cols="20" rows="5" placeholder="NewPost..."></textarea>
        <br />
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" countLike={23} />
        <Post message="Yes i know React" countLike={33} />
        <Post message="Redax wait me" countLike={53} />
      </div>
    </div>
  );
};

export default MyPosts;

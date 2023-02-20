import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  return (
    <div>
      My Posts
      <div>
        <textarea name="" id="" cols="20" rows="5" placeholder="NewPost..."></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" />
        <Post message="Yes i know React" />
        <Post message="Redax wait me" />
      </div>
    </div>
  );
};

export default MyPosts;

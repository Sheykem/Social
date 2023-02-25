import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {


  let postsData = [
    {message:'Hi, how are you?',countLike:23},
    {message:'Yes i know React',countLike:33},
    {message:'Redax wait me',countLike:33}
  ]
  return (
    <div>
      <div className={s.title}>My Posts</div>
      <div className={s.commit}>
        <textarea name="" id="" cols="20" rows="5" placeholder="NewPost..."></textarea>
        <br />
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} countLike={postsData[0].countLike} />
        <Post message={postsData[1].message} countLike={postsData[1].countLike} />
        <Post message={postsData[2].message} countLike={postsData[2].countLike} />
      </div>
    </div>
  );
};

export default MyPosts;

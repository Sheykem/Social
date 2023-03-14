import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let postsElements = props.postsData.map((el,index) => <Post  key={index}  message={el.message} countLike={el.countLike} />);
  return (
    <div>
      <div className={s.title}>My Posts</div>
      <div className={s.commit}>
        <textarea name="" id="" cols="20" rows="5" placeholder="NewPost..."></textarea>
        <br />
        <button>Add Post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

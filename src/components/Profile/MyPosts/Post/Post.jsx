import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <div>
          <img width={30} src="/img/PostPhoto.jpg" alt="" />
          {props.message}
        </div>
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

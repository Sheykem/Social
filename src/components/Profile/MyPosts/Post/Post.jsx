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
        <div className={s.flex}>
          <p>{props.countLike}</p>
          <img
          className={s.like}
            src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B0%D0%B9%D0%BA-%D0%BF%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D1%83-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%87%D1%91%D1%80%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D1%83%D1%8E-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%81%D1%82%D0%B8%D0%BB%D1%8F-170441830.jpg"
            alt="like"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;

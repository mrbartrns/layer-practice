import React from 'react';
import { Post as PostInstance } from '@/services/Post';
import './Post.scss';

interface Props {
  post: PostInstance;
  onClickButton: (id: number) => void;
}

const Post: React.FC<Props> = ({ post, onClickButton }) => {
  const handleClick = () => {
    onClickButton(post.Id);
  };

  return (
    <li className="post">
      <div>
        <div>id: {post.Id}</div>
        <div>title: {post.Title}</div>
        <div>content: {post.Body}</div>
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          X
        </button>
      </div>
    </li>
  );
};

export default Post;

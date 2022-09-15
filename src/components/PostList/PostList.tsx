import React, { useEffect } from 'react';
import usePost from '@hooks/usePost';
import Post from '@components/Post';

const PostList: React.FC = () => {
  const [posts, getPosts, removePost] = usePost();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.Id} post={post} onClickButton={removePost} />
      ))}
    </ul>
  );
};

export default PostList;

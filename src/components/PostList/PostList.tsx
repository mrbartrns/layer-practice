import usePost from '@hooks/usePost';
import { useEffect } from 'react';

const PostList: React.FC = () => {
  const [posts, getPosts, removePost] = usePost();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.Id}>
          <div>{post.UserId}</div>
          <div>{post.Title}</div>
          <div>{post.Body}</div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;

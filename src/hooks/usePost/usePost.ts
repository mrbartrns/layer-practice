import { useCallback, useState } from 'react';
import { Post } from '@/services/Post';
import { getPosts as getPostsAPI } from '@/api/post';

type ReturnType = [Post[], () => Promise<void>, (id: number) => void];

const usePost = (): ReturnType => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    try {
      const data = await getPostsAPI();
      setPosts(() => data.map((post) => new Post(post)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const removePost = useCallback((id: number) => {
    setPosts((prev) => prev.filter((post) => post.Id !== id));
  }, []);

  return [posts, getPosts, removePost];
};
export default usePost;

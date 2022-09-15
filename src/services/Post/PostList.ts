import { PostResponse } from '@/api/post';
import Post from '@/services/Post/Post';

class PostList {
  private readonly postList: Post[];

  constructor(initialData: PostResponse[]) {
    this.postList = initialData.map((post) => new Post(post));
  }

  get PostList() {
    return this.postList;
  }
}

export default PostList;

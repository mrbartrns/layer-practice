import { PostResponse } from '@/api/post';

class Post {
  get UserId() {
    return this.userId;
  }

  get Id() {
    return this.id;
  }

  get Title() {
    return this.title;
  }

  get Body() {
    return this.body;
  }

  constructor(initialData: PostResponse) {
    this.userId = initialData.userId;
    this.id = initialData.id;
    this.title = initialData.title;
    this.body = initialData.body;
  }

  private readonly userId: number;

  private readonly id: number;

  private readonly title: string;

  private readonly body: string;
}

export default Post;

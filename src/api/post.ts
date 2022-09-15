import axios from 'axios';

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts() {
  try {
    const response = await axios.get<PostResponse[]>(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response.data;
  } catch (error) {
    throw new Error('error occurred at getPosts.');
  }
}

export async function getPost(id: number) {
  try {
    const response = await axios.get<PostResponse>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('error occurred at getPost.');
  }
}

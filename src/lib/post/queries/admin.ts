import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findPOstByIdAdmin = cache(async (id: string) => {
  return await postRepository.findById(id);
});

export const findAllPostsAdmin = cache(async () => {
  return postRepository.findAll();
});

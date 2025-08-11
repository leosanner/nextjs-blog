import { DrizzlePostRepository } from './drizze-post-repository';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new DrizzlePostRepository();

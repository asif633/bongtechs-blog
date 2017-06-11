import { BlogPostPipe } from './blog-post.pipe';

describe('BlogPostPipe', () => {
  it('create an instance', () => {
    const pipe = new BlogPostPipe();
    expect(pipe).toBeTruthy();
  });
});

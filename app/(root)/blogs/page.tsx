import { allPosts } from 'content-collections';
import { compareDesc } from 'date-fns';
import type { Metadata } from 'next';
import PostCard from '@/features/blogs/postCard';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <div className="mx-5 mt-16 sm:mx-auto sm:mt-20 md:border-muted md:border-l md:pl-6">
      <div className="flex max-w-3xl flex-col space-y-16">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

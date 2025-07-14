import type { Metadata } from 'next';
import { BlogsList } from '@/features/blogs/blogs-list';
import { HeroBlogsSection } from '@/features/blogs/hero-blogs';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default function Blog() {
  return (
    <>
      <HeroBlogsSection />
      <BlogsList />
    </>
  );
}

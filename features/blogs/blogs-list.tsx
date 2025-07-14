import { allPosts } from 'content-collections';
import { compareDesc } from 'date-fns';
import { PageHeader } from '@/components/page-header';
import PostCard from './post-card';
export function BlogsList() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <section className="relative border-grid">
      <PageHeader className="text-left">
        <div className="mx-auto flex w-full max-w-5xl flex-col">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </PageHeader>
    </section>
  );
}

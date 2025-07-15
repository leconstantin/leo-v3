import { MDXContent } from '@content-collections/mdx/react';
import type { Post } from 'content-collections';
import { allPosts } from 'content-collections';
import { Calendar1Icon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { components } from '@/features/blogs/mdx-component';
import { formatDate } from '@/lib/utils';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}
async function getPostFromParams(params: Promise<{ slug: string[] }>) {
  const slug = (await params)?.slug?.join('/');
  const post = allPosts.find((p: Post) => p.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }

  return (
    <section className="relative border-grid">
      <PageHeader className="py-16 text-left">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <PageHeaderHeading className="text-3xl ">
              {post.title}
            </PageHeaderHeading>

            <time
              className="flex items-center text-muted-foreground text-sm tracking-tighter"
              dateTime={post.date}
            >
              <Calendar1Icon className="size-4" />
              <span className="ml-3">{formatDate(post.date)}</span>
            </time>
          </div>

          <AspectRatio ratio={16 / 9}>
            <Image
              alt={post.title}
              className="w-full rounded-md bg-muted object-cover transition-colors"
              fill
              priority
              src={post.image}
            />
          </AspectRatio>

          <MDXContent code={post?.body.code} components={components} />
        </div>
      </PageHeader>
    </section>
  );
}

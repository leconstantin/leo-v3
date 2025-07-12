import { MDXContent } from '@content-collections/mdx/react';
import type { Post } from 'content-collections';
import { allAuthors, allPosts } from 'content-collections';
import { ChevronLeftIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { components } from '@/features/blogs/mdx-component';
import NewsletterForm from '@/features/blogs/newsletterForm';
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
    authors: post.authors.map((author) => ({
      name: author,
    })),
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
const carriageReturnRegex = /\r$/;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }
  const authors = post.authors.map((author) =>
    allAuthors.find(
      ({ _meta }) => _meta.path === `${author.replace(carriageReturnRegex, '')}`
    )
  );
  return (
    <div className="lg:relative">
      <div className="mx-auto mb-20 max-w-4xl">
        <Link
          className="group lg:-left-5 lg:-mt-2 xl:-top-1.5 mb-8 ml-5 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-muted transition sm:ml-0 lg:absolute lg:mb-0 xl:left-0 xl:mt-0"
          href="/blogs"
        >
          <span className="sr-only">Back to blog</span>
          <ChevronLeftIcon className="size-4" />
        </Link>
        <div className="mx-4 lg:mx-0">
          <div className="mx-5 flex flex-col sm:mx-auto">
            <h1 className="mt-6 font-bold text-4xl tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <time
              className="order-first flex items-center text-muted-foreground text-sm tracking-tighter"
              dateTime={post.date}
            >
              <span className="h-4 w-0.5 rounded-full bg-muted" />
              <span className="ml-3">{formatDate(post.date)}</span>
            </time>
          </div>
          <div>
            {authors?.length ? (
              <div className="mt-4 flex space-x-4">
                {authors.map((author) =>
                  author ? (
                    <Link
                      className="flex items-center space-x-2 text-sm"
                      href={`https://twitter.com/${author.twitter}`}
                      key={author._meta.path}
                    >
                      <Image
                        alt={author.title}
                        className="h-10 w-10 rounded-full bg-white"
                        height={42}
                        src={author.avatar}
                        width={42}
                      />
                      <div className="flex-1 text-left leading-tight">
                        <p className="font-medium">{author.title}</p>
                        <p className="text-[12px] text-muted-foreground">
                          @{author.twitter}
                        </p>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            ) : null}
          </div>
          <div className="relative">
            {post.image && (
              <Image
                alt={post.title}
                className="my-8 w-full rounded-md border bg-muted object-cover transition-colors"
                height={405}
                priority
                src={post.image}
                width={720}
              />
            )}
          </div>

          <MDXContent code={post?.body.code} components={components} />
          <NewsletterForm />
        </div>
      </div>
    </div>
    // </div>
  );
}

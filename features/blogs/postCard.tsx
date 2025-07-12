'use client';

import type { Post } from 'content-collections';
import Card from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          className="md:hidden"
          dateTime={post.date}
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        className="mt-1 hidden md:block"
        dateTime={post.date}
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  );
}

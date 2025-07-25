import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import SubscribeForm from './subscribe-form';

export default function NewsletterSection() {
  return (
    <section className="relative border-grid">
      <PageHeader className="text-left">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <PageHeaderHeading className="text-2xl lg:max-w-4xl xl:text-3xl">
            Subscribe to my Newsletter
          </PageHeaderHeading>
          <p className="text-muted-foreground">
            Sign up for my newsletter to get updates on my latest blog posts and
            other cool stuff.
          </p>
          <SubscribeForm />
        </div>
      </PageHeader>
    </section>
  );
}

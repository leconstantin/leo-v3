import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

export function HeroBlogsSection() {
  return (
    <section className="relative border-grid">
      <PageHeader className="py-16 text-left md:pb-0 lg:pb-0">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <PageHeaderHeading className="lg:max-w-4xl">
            Writing on software, design, and startups
          </PageHeaderHeading>
          <PageHeaderDescription>
            All of my long-form thoughts on programming, product design, and
            more, collected in chronological order.
          </PageHeaderDescription>
        </div>
      </PageHeader>
    </section>
  );
}

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

export function HeroProjectsSection() {
  return (
    <section className="relative border-grid">
      <PageHeader className="text-left md:pb-8 lg:pb-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <PageHeaderHeading>
            Every project reflects a lesson, a challenge, or a small
            breakthrough.
          </PageHeaderHeading>
          <PageHeaderDescription>
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </PageHeaderDescription>
        </div>
      </PageHeader>
    </section>
  );
}

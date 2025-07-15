import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

export function HeroCertificatesSection() {
  return (
    <section className="relative border-grid">
      <PageHeader className="py-16 pb-0 text-left md:pb-0 lg:pb-0">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <PageHeaderHeading>Professional Certification</PageHeaderHeading>
          <PageHeaderDescription>
            A Comprehensive csollection of industry recognized certifications
            that highlight my dedication to professional Growth, Mastery of
            relevant technologies, and commitment to staying ahead in an
            ever-evolving digital landscape.
          </PageHeaderDescription>
        </div>
      </PageHeader>
    </section>
  );
}

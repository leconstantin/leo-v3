import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

export function HeroCertificatesSection() {
  return (
    <section className="relative border-grid">
      <PageHeader className="text-left md:pb-0 lg:pb-0">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <PageHeaderHeading>Professional Certification</PageHeaderHeading>
          <PageHeaderDescription>
            A Comprehensive Collection of Industry-Recognized Certifications
            That Highlight My Dedication to Professional Growth, Mastery of
            Relevant Technologies, and Commitment to Staying Ahead in an
            Ever-Evolving Digital Landscape.
          </PageHeaderDescription>
        </div>
      </PageHeader>
    </section>
  );
}

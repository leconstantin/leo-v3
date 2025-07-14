import type { Metadata } from 'next';
import { CertificateList } from '@/features/certificates/certificates-list';
import { HeroCertificatesSection } from '@/features/certificates/hero-certificates';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'A list of certificates I have achieved.',
};

export default function CertificatesPage() {
  return (
    <>
      <HeroCertificatesSection />
      <CertificateList />
    </>
  );
}

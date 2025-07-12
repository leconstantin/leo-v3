import type { Metadata } from 'next';
import { CertificateList } from '@/features/certificates/certificates-list';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'A list of certificates I have achieved.',
};

export default function CertificatesPage() {
  return <CertificateList />;
}

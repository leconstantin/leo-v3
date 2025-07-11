import Container from '@/components/container';
import SiteHeader from '@/components/site-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 min-h-svh overflow-hidden ">
      <SiteHeader />
      <Container>{children}</Container>
    </div>
  );
}

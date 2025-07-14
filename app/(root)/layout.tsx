// import Container from '@/components/container';

import { unstable_ViewTransition as ViewTransition } from 'react';
import SiteHeader from '@/components/site-header';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 min-h-svh overflow-hidden ">
      <SiteHeader />
      <ViewTransition name="page">{children}</ViewTransition>
      {/* <Container>{children}</Container> */}
    </div>
  );
}

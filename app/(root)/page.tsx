import { HeroSection } from '@/features/home/hero';
import NewsletterSection from '@/features/home/newsletter-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsletterSection />
      <p className="text-muted-foreground text-sm opacity-25">
        <a
          href="https://icons8.com/icon/DWVyLUd6dSgr/l"
          rel="noopener"
          target="_blank"
        >
          L
        </a>{' '}
        icon by{' '}
        <a href="https://icons8.com" rel="noopener" target="_blank">
          Icons8
        </a>
      </p>
    </>
  );
}

import Image from 'next/image';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/ui/icons';
import profileImg from '@/public/profile.jpeg';

export function HeroSection() {
  return (
    <section className="container">
      <div className="flex w-full max-w-2xl flex-col space-y-5 py-6">
        <Image
          alt="Profile Picture"
          className="aspect-square size-16 rounded-full"
          height={64}
          placeholder="blur"
          priority
          src={profileImg}
          width={64}
        />
        <h1 className="font-bold text-5xl tracking-tighter">
          Programmer. Writer. Player.
        </h1>
        <p className="mt-6 font-medium text-lg tracking-tight">
          Hey, I&apos;m Constantin. I&apos;m the founder and CEO of{' '}
          <a
            className="font-semibold text-muted-foreground underline underline-offset-4"
            href="https://rathon-rw.vercel.app/"
            rel="noopener"
            target="_blank"
          >
            Rathon
          </a>{' '}
          – a full-service agency specializing in website and software design,
          development, and hosting.
        </p>

        <p className="mt-4 font-medium text-lg text-muted-foreground">
          In my daily programming activities i use different languages and
          frameworks to create well designed and functional softwares. But am
          likely to use{' '}
          <a
            className="font-semibold text-primary underline underline-offset-4"
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Nextjs
          </a>
          ,{' '}
          <a
            className="font-semibold text-primary underline underline-offset-4"
            href="https://www.typescriptlang.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Typescript
          </a>
          ,{' '}
          <a
            className="font-semibold text-primary underline underline-offset-4"
            href="https://www.prisma.io/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Prisma
          </a>
          , and{' '}
          <a
            className="font-semibold text-primary underline underline-offset-4"
            href="https://www.postgresql.org/"
            rel="noopener"
            target="_blank"
          >
            Postgress
          </a>
          .
        </p>
        <div className="mt-6 flex gap-6">
          <a
            aria-label="Visit my Twitter profile"
            href="https://x.com/le_con82546"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="h-6 w-6 transition-all hover:scale-105" />
          </a>
          <a
            aria-label="Visit my GitHub profile"
            href="https://github.com/leconstantin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon className="h-6 w-6 transition-all hover:scale-105" />
          </a>
          <a
            aria-label="Visit my LinkedIn profile"
            href="https://www.linkedin.com/in/leoconstantin/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="h-6 w-6 transition-all hover:scale-105" />
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/ui/icons';
import profileImg from '@/public/profile.jpeg';

export function HeroSection() {
  return (
    <section className="relative border-grid">
      <PageHeader className="min-h-[calc(100vh-150px)] text-left md:min-h-fit">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <Image
            alt="Profile Picture"
            className="aspect-square size-16 rounded-full"
            height={64}
            placeholder="blur"
            priority
            src={profileImg}
            width={64}
          />
          <PageHeaderHeading>Programmer. Writer. Player.</PageHeaderHeading>
          <PageHeaderDescription>
            Hey, I&apos;m Constantin. I&apos;m the founder and CEO of{' '}
            <a
              className="font-semibold text-muted-foreground underline-offset-4 transition-all ease-in-out hover:underline"
              href="https://rathon-rw.vercel.app/"
              rel="noopener"
              target="_blank"
            >
              Rathon
            </a>{' '}
            – a full-service agency specializing in website and software design,
            development, and hosting.
          </PageHeaderDescription>
          <PageHeaderDescription>
            In my daily programming activities i use different languages and
            frameworks to create well designed and functional softwares. But am
            likely to use{' '}
            <CustomExternalLink link="https://nextjs.org/" name="nextjs" />,{' '}
            <CustomExternalLink
              link="https://www.typescriptlang.org/"
              name="Typescript"
            />
            ,{' '}
            <CustomExternalLink link="https://www.convex.dev/" name="Convex" />,
            and{' '}
            <CustomExternalLink
              link="https://www.ultracite.com/"
              name="Ultracite"
            />
            .
          </PageHeaderDescription>
          <div className="flex items-center gap-6">
            <CustomExternalLink link="https://x.com/le_con82546" name="Twitter">
              <TwitterIcon className="size-6 transition-all hover:scale-105" />
            </CustomExternalLink>
            <CustomExternalLink
              link="https://github.com/leconstantin"
              name="Github"
            >
              <GitHubIcon className="size-6 transition-all hover:scale-105" />
            </CustomExternalLink>
            <CustomExternalLink
              link="https://www.linkedin.com/in/leoconstantin/"
              name="LinkedIn"
            >
              <LinkedInIcon className="size-6 transition-all hover:scale-105" />
            </CustomExternalLink>
          </div>
        </div>
      </PageHeader>
    </section>
  );
}
type ExtrenalLinkProps = {
  link: string;
  name: string;
  children?: React.ReactNode;
};
function CustomExternalLink({ link, name, children }: ExtrenalLinkProps) {
  return (
    <a
      className="font-semibold text-primary capitalize underline underline-offset-4"
      href={link}
      rel="noopener"
      target="_blank"
    >
      {children ? children : name}
    </a>
  );
}

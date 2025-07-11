'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { navItems } from '@/lib/config';
import prfileImg from '@/public/profile.jpeg';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export default function SiteHeader() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="top-0 z-10 mx-5 flex h-16 w-full max-w-2xl items-center justify-between pt-6 sm:mx-auto lg:max-w-5xl">
      <div className="w-20">
        {segment && (
          <Link href="/">
            <Image
              alt="Profile Picture"
              className="size-40 rounded-full object-cover"
              height={40}
              placeholder="blur"
              src={prfileImg}
              style={{ width: '40px', height: '40px' }}
              width={40}
            />
          </Link>
        )}
      </div>
      <ul className="hidden rounded-full bg-background px-3 font-medium text-sm shadow-lg shadow-zinc-800/5 ring-1 ring-muted backdrop-blur sm:flex">
        {navItems.map((item) => (
          <MainNav
            display={item.display}
            href={item.href}
            isActive={segment === item.href}
            key={item.display}
          />
        ))}
      </ul>
      <div>
        <MobileNav />
      </div>
    </nav>
  );
}

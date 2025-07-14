'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/config';
import prfileImg from '@/public/profile.jpeg';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import { ModeSwitcher } from './ui/mode-switcher';

export default function SiteHeader() {
  const segment = usePathname();

  return (
    <nav className="top-0 z-10 mx-5 flex h-16 w-full max-w-2xl items-center justify-between pt-6 sm:mx-auto lg:max-w-5xl">
      <div className="w-20">
        {segment !== '/' && (
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
      <div className="hidden items-center rounded-full bg-background px-3 shadow-lg ring-1 ring-muted backdrop-blur sm:flex">
        <ul className="items-center sm:flex">
          {navItems.map((item) => (
            <MainNav
              display={item.display}
              href={item.href}
              key={item.display}
            />
          ))}
        </ul>

        <div className="flex items-center justify-center border-muted border-l-2 px-2">
          <ModeSwitcher />
        </div>
      </div>
      <div>
        <MobileNav />
      </div>
    </nav>
  );
}

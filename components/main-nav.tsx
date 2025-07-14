'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MainNav({
  href,
  display,
}: {
  href: string;
  display: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        className={cn(
          'relative block px-3 py-2 font-medium text-muted-foreground text-sm transition',
          isActive ? 'text-primary' : 'hover:text-primary'
        )}
        href={href}
      >
        <p className="capitalize">{display}</p>
        {isActive && (
          <span className="-bottom-px absolute inset-x-1 h-px bg-gradient-to-r from-teal-500/0 via-blue-500/40 to-blue-500/0" />
        )}
      </Link>
    </li>
  );
}

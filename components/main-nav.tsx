import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function MainNav({
  href,
  isActive,
  display,
}: {
  href: string;
  isActive: boolean;
  display: string;
}) {
  return (
    <li>
      <Link
        className={cn(
          'relative block px-3 py-2 transition',
          isActive ? 'text-teal-500' : 'hover:text-teal-500'
        )}
        href={href}
      >
        <p className="capitalize">{display}</p>
        {isActive && (
          <span className="-bottom-px absolute inset-x-1 h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
        )}
      </Link>
    </li>
  );
}

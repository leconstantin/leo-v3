/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
'use client';
import { motion, useCycle } from 'motion/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { type ReactNode, useEffect, useRef } from 'react';
import { navItems } from '@/lib/config';

export default function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);
  const segment = useSelectedLayoutSegment();
  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      className={`fixed inset-0 z-40 w-full sm:hidden ${
        isOpen ? '' : 'pointer-events-none'
      }`}
      custom={height}
      initial={false}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={{
          open: (clipHeight = 1000) => ({
            clipPath: `circle(${clipHeight * 2 + 200}px at 100% 0)`,
            transition: {
              type: 'spring',
              stiffness: 20,
              restDelta: 2,
            },
          }),
          closed: {
            clipPath: 'circle(0px at 100% 0)',
            transition: {
              delay: 0.3,
              type: 'spring',
              stiffness: 400,
              damping: 40,
            },
          },
        }}
      />
      <motion.ul
        className="absolute grid w-full px-10 py-16"
        variants={variants}
      >
        {navItems.map((item) => (
          <MenuItem
            className="border-gray-300 border-b py-5"
            key={item.display}
          >
            <Link
              className={`flex w-full font-semibold capitalize ${
                segment === item.href ? 'text-teal-500' : ''
              }`}
              href={`${item.href}`}
              onClick={() => {
                toggleOpen();
              }}
            >
              {item.display}
            </Link>
          </MenuItem>
        ))}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
}
const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    className="pointer-events-auto absolute top-8 right-10"
    onClick={toggle}
    type="button"
  >
    <span className="sr-only">Open Menu</span>
    <svg height="23" viewBox="0 0 23 23" width="23">
      <title>Open Menu</title>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        transition={{ duration: 0.1 }}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    strokeWidth="2"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li className={className} variants={MenuItemVariants}>
      {children}
    </motion.li>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    function updateDimensions() {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
      }
    }
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [ref]);

  return dimensions.current;
};

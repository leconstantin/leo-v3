'use client';

import { redirect, useSelectedLayoutSegments } from 'next/navigation';
import type { ReactNode } from 'react';

const meta: Record<string, { title: string; description: string }> = {
  projects: {
    title: "Things I've made trying to put my dent in the universe.",
    description:
      "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
  },
  blogs: {
    title: 'Writing on software, design, and startups',
    description:
      'All of my long-form thoughts on programming, product design, and more, collected in chronological order.',
  },
  certificates: {
    title: 'Professional Certification',
    description:
      'A Comprehensive Collection of Industry-Recognized Certifications That Highlight My Dedication to Professional Growth, Mastery of Relevant Technologies, and Commitment to Staying Ahead in an Ever-Evolving Digital Landscape.',
  },
};

export default function Container({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegments();

  if (segment.length > 0 && !meta[segment[0]]) {
    redirect('/');
  }

  return (
    <main className="mx-auto mt-16 max-w-2xl sm:mt-32 lg:max-w-5xl">
      {segment.length === 1 && (
        <div className="mx-5 max-w-2xl sm:mx-0">
          <h1 className="font-bold text-4xl text-primary tracking-tight sm:text-5xl">
            {meta[segment[0]].title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground tracking-tight">
            {meta[segment[0]].description}
          </p>
        </div>
      )}
      {children}
    </main>
  );
}

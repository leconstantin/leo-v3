import { Link } from 'lucide-react';
import Image from 'next/image';
import Card from '@/components/ui/card';
import { projects } from '@/lib/config';
export function ProjectList() {
  return (
    <div className="mx-5 my-20 sm:mx-0">
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <Image
              alt={`${project.name} Logo`}
              className="relative z-10 h-8 w-8 rounded-md"
              height={32}
              src={project.logo}
              width={32}
            />
            <h2 className="mt-6 font-semibold text-base text-zinc-800">
              <Card.Link
                href={project.link.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center font-medium text-sm text-zinc-400 transition group-hover:text-teal-500">
              <Link className="size-4s" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
}

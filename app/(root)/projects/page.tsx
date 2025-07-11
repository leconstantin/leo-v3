import type { Metadata } from 'next';
import { ProjectList } from '@/features/projects/project-list';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A list of projects I have worked on',
};

export default function ProjectsPage() {
  return <ProjectList />;
}

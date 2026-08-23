import { projectsData } from '@/data/projectsData';
import ProjectDetailPage from '@/page_components/ProjectDetailPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find(p => p.id === parseInt(id));
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} - Asir Adnan`,
    description: project.shortDescription,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}

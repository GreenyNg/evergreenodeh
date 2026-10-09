import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <CaseStudyLayout project={project} />;
}
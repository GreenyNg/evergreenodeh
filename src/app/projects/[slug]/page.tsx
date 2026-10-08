import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <CaseStudyLayout project={project} />;
}
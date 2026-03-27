import { isAuthenticated } from "@/lib/cms/auth";
import { redirect } from "next/navigation";
import { getProjectFromDB } from "@/lib/cms/db";
import { notFound } from "next/navigation";
import ProjectForm from "../../ProjectForm";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EditProjectPage({ params }: Props) {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  const { slug } = await params;
  const project = getProjectFromDB(slug);

  if (!project) {
    notFound();
  }

  return <ProjectForm mode="edit" initialData={project} />;
}

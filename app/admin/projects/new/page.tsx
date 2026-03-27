import { isAuthenticated } from "@/lib/cms/auth";
import { redirect } from "next/navigation";
import ProjectForm from "../ProjectForm";

export default async function NewProjectPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }
  return <ProjectForm mode="create" />;
}

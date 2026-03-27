import { isAuthenticated } from "@/lib/cms/auth";
import { redirect } from "next/navigation";
import ProjectList from "./ProjectList";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }
  return <ProjectList />;
}

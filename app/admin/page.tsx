import { isAuthenticated } from "@/lib/cms/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function AdminPage() {
  if (await isAuthenticated()) {
    redirect("/admin/projects");
  }
  return <LoginForm />;
}

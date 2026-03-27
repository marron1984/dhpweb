import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/cms/auth";
import { getAllProjectsFromDB, createProject } from "@/lib/cms/db";

export async function GET() {
  const projects = getAllProjectsFromDB();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    createProject(body);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

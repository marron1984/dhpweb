/**
 * Initialize the JSON database from existing TypeScript data.
 * Run: npx tsx scripts/init-db.ts
 */
import fs from "fs";
import path from "path";
import { projects } from "../data/projects";

const outPath = path.join(process.cwd(), "data", "projects.json");

if (fs.existsSync(outPath)) {
  console.log("projects.json already exists. Skipping initialization.");
  console.log(`To regenerate, delete ${outPath} and run again.`);
  process.exit(0);
}

fs.writeFileSync(outPath, JSON.stringify(projects, null, 2), "utf-8");
console.log(`✓ Created ${outPath} with ${projects.length} projects`);

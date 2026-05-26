import { lstat, mkdir, readdir, symlink, unlink } from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const ROOT_DIR = resolve(import.meta.dirname, "..");
const SKILLS_DIR = join(ROOT_DIR, "skills");
const HOME = homedir();

const TARGETS: Record<string, string> = {
  opencode: join(HOME, ".agents", "skills"),
  "claude-code": join(HOME, ".claude", "skills"),
  cursor: join(HOME, ".cursor", "skills"),
  codex: join(HOME, ".codex", "skills"),
  "github-copilot": join(HOME, ".copilot", "skills"),
  "gemini-cli": join(HOME, ".gemini", "skills"),
};

async function exists(path: string): Promise<boolean> {
  try {
    await lstat(path);
    return true;
  } catch {
    return false;
  }
}

async function getSkillDirs(): Promise<string[]> {
  const entries = await readdir(SKILLS_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function linkSkills() {
  const skills = await getSkillDirs();

  if (skills.length === 0) {
    console.log("No skills found in skills/");
    return;
  }

  console.log(`Found ${skills.length} skills: ${skills.join(", ")}`);

  for (const [agent, targetDir] of Object.entries(TARGETS)) {
    await mkdir(targetDir, { recursive: true });

    for (const skill of skills) {
      const source = join(SKILLS_DIR, skill);
      const dest = join(targetDir, skill);

      if (await exists(dest)) {
        const stat = await lstat(dest);
        if (stat.isSymbolicLink()) {
          await unlink(dest);
        } else {
          console.warn(`  SKIP ${agent}/${skill} (real dir exists, not a symlink)`);
          continue;
        }
      }

      await symlink(source, dest, "dir");
      console.log(`  ${agent}/${skill} -> linked`);
    }
  }

  console.log("\nDone.");
}

linkSkills().catch((err) => {
  console.error(err);
  process.exit(1);
});

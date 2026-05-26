import { lstat, readdir, readlink, unlink } from "node:fs/promises";
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

async function getSkillDirs(): Promise<string[]> {
  const entries = await readdir(SKILLS_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function isOurSymlink(path: string, skill: string): Promise<boolean> {
  try {
    const stat = await lstat(path);
    if (!stat.isSymbolicLink()) {
      return false;
    }
    const target = await readlink(path);
    return target === join(SKILLS_DIR, skill);
  } catch {
    return false;
  }
}

async function unlinkSkills() {
  const skills = await getSkillDirs();

  if (skills.length === 0) {
    console.log("No skills found in skills/");
    return;
  }

  console.log(`Unlinking ${skills.length} skills: ${skills.join(", ")}`);

  for (const [agent, targetDir] of Object.entries(TARGETS)) {
    for (const skill of skills) {
      const dest = join(targetDir, skill);

      if (await isOurSymlink(dest, skill)) {
        await unlink(dest);
        console.log(`  ${agent}/${skill} -> removed`);
      }
    }
  }

  console.log("\nDone.");
}

unlinkSkills().catch((err) => {
  console.error(err);
  process.exit(1);
});

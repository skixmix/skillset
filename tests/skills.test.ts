import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { MAX_LOC, SKILLS_DIR } from "./constants.js";

const ROOT_DIR = resolve(import.meta.dirname, "..");
const SKILLS_PATH = join(ROOT_DIR, SKILLS_DIR);

interface SkillFrontmatter {
  name: string;
  description: string;
}

describe("Skill files", () => {
  it(`each SKILL.md should be at most ${MAX_LOC} lines`, async () => {
    const skills = await getSkillDirs();
    const violations: string[] = [];

    for (const skill of skills) {
      const content = await readFile(join(SKILLS_PATH, skill, "SKILL.md"), "utf-8");
      const lines = countLines(content);
      if (lines > MAX_LOC) {
        violations.push(`${skill}/SKILL.md: ${lines} lines (max ${MAX_LOC})`);
      }
    }

    expect(violations).toEqual([]);
  });

  it("each SKILL.md should have valid frontmatter with name and description", async () => {
    const skills = await getSkillDirs();
    const errors: string[] = [];

    for (const skill of skills) {
      const content = await readFile(join(SKILLS_PATH, skill, "SKILL.md"), "utf-8");
      const fm = parseFrontmatter(content);

      if (!fm) {
        errors.push(`${skill}/SKILL.md: missing or invalid frontmatter`);
        continue;
      }
      if (!fm.name) {
        errors.push(`${skill}/SKILL.md: missing "name" in frontmatter`);
      }
      if (!fm.description) {
        errors.push(`${skill}/SKILL.md: missing "description" in frontmatter`);
      }
      if (fm.name && fm.name !== skill) {
        errors.push(`${skill}/SKILL.md: name "${fm.name}" doesn't match directory "${skill}"`);
      }
    }

    expect(errors).toEqual([]);
  });
});

async function getSkillDirs(): Promise<string[]> {
  const entries = await readdir(SKILLS_PATH, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

function parseFrontmatter(content: string): SkillFrontmatter | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return null;
  }

  const raw = match[1];
  const nameMatch = raw.match(/^name:\s*(.+)$/m);
  const descMatch = raw.match(/description:/m);

  if (!nameMatch || !descMatch) {
    return null;
  }

  return {
    name: nameMatch[1].trim(),
    description: raw.slice(descMatch.index ?? 0),
  };
}

function countLines(content: string): number {
  const lines = content.split("\n");
  if (lines.at(-1) === "") {
    lines.pop();
  }
  return lines.length;
}

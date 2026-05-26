# skillset

A collection of skills I use with my AI coding agents. Some I wrote myself, some I adapted from things I found around.

> Note: skills are procedural workflows, not coding rules. They teach the agent *how* to do something step by step. Rules are usually project-specific and not too generalizable.

## Setup

You can just symlink the skills/ folder to your AI coding tool, or you can let the script do it for you.

Install [nvm](https://github.com/nvm-sh/nvm) and run:

```bash
nvm use
npm install
```

## Link skills to your agents

```bash
npm run link-skills
```

This script symlinks every skill into the config folders of these agents:

- opencode (`~/.agents/skills/`)
- claude-code (`~/.claude/skills/`)
- cursor (`~/.cursor/skills/`)
- codex (`~/.codex/skills/`)
- github-copilot (`~/.copilot/skills/`)
- gemini-cli (`~/.gemini/skills/`)

To remove them:

```bash
npm run unlink-skills
```

> Note: this only removes symlinks created by `link-skills`, it won't touch anything unrelated.

## Adding a skill

Create `skills/<name>/SKILL.md` with YAML frontmatter:

```yaml
---
name: skill-name
description: >
  When to use this skill.
---

# Content here
```

Then run `npm test && npm run link-skills`

## License

MIT

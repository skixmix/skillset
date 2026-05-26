---
name: codebase-onboarding
description: Structured walkthrough of an unfamiliar or forgotten codebase. Use when the user says "help me understand this project", "walk me through this", "what does this codebase do", "I'm new to this repo", "explain the architecture", or opens/revisits a project and needs orientation before making changes.
---

- Start by exploring the project root: config files, package manifests, directory structure. Infer the stack, build system, and conventions.
- Identify entry points: where does execution start? What are the main routes, commands, or exports?
- Map the architecture: layers, data flow, key abstractions. Draw the dependency graph mentally. Name the patterns you see (MVC, hexagonal, monolith, etc.).
- Find the "AGENTS.md", "CLAUDE.md", "README.md", or any developer documentation. Read it. Cross-check against the actual code.
- Identify conventions: naming patterns, file organization, testing strategy, error handling style. Note inconsistencies.
- Surface gotchas: unusual patterns, implicit assumptions, things that would surprise a newcomer. "This looks like X but is actually Y because Z."
- Present findings as a concise map: architecture overview, key files/modules, conventions, gotchas. Prioritize what the user needs to be productive, not completeness.
- Ask the user what they're planning to do next, then point them to the specific areas they'll need to touch.

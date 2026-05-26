---
name: spike
description: Timeboxed investigation on any topic (technical or not). Use when the user says "look into", "research", "find out about", "what are the options for", "explore", "investigate", "compare", or asks a broad question that needs information gathering before answering.
---

- Clarify the question. Restate it back to the user in one sentence. If ambiguous, ask before proceeding.
- Define the timebox: ask "How deep should I go?" if unclear. Default: breadth-first overview, not exhaustive.
- Research using all available tools (web search, codebase exploration, documentation, GitHub). Run searches in parallel. Cast a wide net first, then narrow.
- For each finding, note the source and relevance. Discard noise early, don't accumulate junk.
- Organize findings into a structured summary: what you found, what's credible, what conflicts, what's missing.
- End with a clear recommendation or set of options with tradeoffs. If no clear winner exists, say so and explain why.
- If the investigation opens new questions that exceed the original scope, surface them as "follow-up spikes" rather than expanding the current one.
- Never present raw dumps. Synthesize. The user wants insight, not a reading list.

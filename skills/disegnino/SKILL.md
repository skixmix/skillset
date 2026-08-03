---
name: disegnino
description: >
  Generate a plain-words explanation plus an ELI5 diagram of any change or material
  (MR, diff, ticket, Confluence page, docs, or an unfamiliar module) so a human can
  grasp what/why/where. Works in any direction: understanding something you are
  reviewing, or producing a sketch for something you are writing. Use when the user
  says "explain this MR", "what does this change do", "help me understand this diff",
  "draw/sketch this", "ELI5 this", "disegnino", "diagram this doc/page", or feels lost
  reviewing AI-generated code or documentation.
---

- Ground first: read the actual source material before explaining anything, the diff,
  code, ticket, or doc/page. Never describe something you have not read. Note what it is,
  what changed (if it is a change), and which files, modules, or systems it touches.
- Explain the purpose in plain words: what problem this solves and why, one short
  paragraph, no architectural jargon. If it uses domain terms, define them briefly to
  build the reader's domain vocabulary over time.
- Highlight data-flow changes explicitly: what now flows differently, what enters or
  leaves where, the new path a request or value takes. Confusion hides here. For a static
  doc, map the flow or structure it describes.
- Draw an ELI5 sketch with the drawio MCP (fall back to a Mermaid diagram if drawio is
  unavailable): the flow or structure at the simplest level that is still faithful. When a
  flow changed, prefer before/after or mark the changed nodes. Generate the diagram only;
  the user attaches it wherever they need it.
- Keep it simple and call out complexity: if the subject adds jargon, layers, or
  abstraction heavier than the problem needs, say so plainly. Simplicity is a feature.
- Guard against AI-interpreting-AI: the diagram and explanation are your interpretation of
  material that may itself be AI-generated. Cross-check the picture against the real code or
  source, cite file:line (or the doc section) for each key claim, and separate "what it
  does" (verified) from "what I infer it intends" (assumption). List any uncertainties.
- End with questions, not conclusions: surface the 3-5 why/where questions still worth
  asking (why this approach, where X gets validated, what happens on failure). Offer to go
  deeper on any node of the diagram.
- The diagram is a springboard for understanding, never a substitute for reading the
  source. Keep the human in the loop.

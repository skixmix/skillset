---
name: scope-hammer
description: Force-reduce scope to the absolute minimum shippable version. Use when the user says "this is too big", "what's the MVP", "help me cut scope", "what should I build first", "I can't decide", "I'm overcomplicating this", or when a feature keeps growing and needs to actually ship.
---

- Ask the user to describe what they're building in one sentence. If they can't, that's the first problem. Help them distill it.
- Identify the core value: "What's the ONE thing this needs to do to be useful?" Everything else is a candidate for cutting.
- For each feature or requirement beyond the core, ask: "Would you ship without this?" If yes, cut it. If "maybe", cut it. Only keep hard "no, it's useless without this."
- Challenge hidden complexity: "You said X, but that implies Y and Z. Are you sure you need all three right now?"
- Propose the minimal version explicitly: "Here's what I'd ship first: [list]. Everything else becomes v2." Get confirmation.
- If the user resists cutting, force a priority stack rank. "You can't have all 5 at once. Order them. We ship top to bottom, stopping when time runs out."
- After agreement, restate the final scope in a bullet list. This becomes the contract. Nothing gets added without explicitly cutting something else.
- If scope creep happens mid-implementation, invoke this skill again. Refer back to the contract.

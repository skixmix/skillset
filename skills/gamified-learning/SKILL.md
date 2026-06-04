---
name: gamified-learning
description: >
  Gamified Q&A approach to help the user deeply understand documents, code, concepts, or any material.
  Use when the user says "help me understand", "walk me through", "explain this to me",
  "I need to learn", "quiz me", "let's go through this together",
  or shares a document/page/code and wants to build understanding interactively.
---

- Acquire the material. Read the document, page, code, or topic the user wants to understand. Use all available tools (e.g., web fetch, file read, codebase exploration). If the source is unclear, ask.
- Read the material thoroughly. Build your own understanding first before engaging the user.
- Ask structured questions using the question tool if available. Each round should have 3-6 multiple-choice questions that test and build understanding of the material. Questions should:
  - Start broad (high-level intent, structure, key concepts) and progressively narrow (edge cases, implications, ambiguities).
  - Include your interpretation as one of the options, so the user can confirm or correct it.
  - Surface ambiguities, contradictions, or underspecified areas naturally through the options.
  - Cover both "what does this mean?" and "what do you think about this?" angles.
- After each round, incorporate the user's answers to refine your shared understanding. If answers reveal gaps or new questions, ask another round. If answers reveal the user needs more context, research it before the next round.
- Iterate until convergence. Stop asking when both you and the user have a consistent, shared interpretation of the material.
- Synthesize and deliver value. Once aligned, provide the output the user needs: feedback, summary, action items, comments, or whatever was the goal. The learning phase is the means, not the end.
- Never lecture. The user learns by actively answering, not by reading your explanations. Keep your own statements short between question rounds.
- If the material has open questions, TODOs, or discussion points, surface them as quiz options rather than listing them passively.
---
name: super-plan
description: >
  Interview the user relentlessly about a plan or design until reaching shared understanding,
  resolving each branch of the decision tree.
  Use when user says "let's plan", "help me think through", "how should I structure",
  "I need to design", "let's figure out the approach", "walk me through the decisions",
  or asks to draft, architect, or design something before building it.
---

- Interview the user relentlessly about every aspect of this plan until you reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.
- Ask the questions using the question tool if available.
- If a question can be answered by exploring the codebase, explore the codebase instead. During codebase exploration, also look for existing documentation or AGENTS.md files.
- When the user states how something works, check whether the code agrees. If you find a contradiction, surface it: "Your code cancels entire Orders, but you just said partial cancellation is possible: which is right?"
- When the user uses vague or overloaded terms, propose a precise canonical term. "You're saying 'account' - do you mean the Customer or the User? Those are different things."
- When the user uses a term that conflicts with the existing language the project, call it out immediately. "Your project defines 'cancellation' as X, but you seem to mean Y - which is it?"
- When domain relationships are being discussed, stress-test them with specific scenarios. Invent scenarios that probe edge cases and force the user to be precise about the boundaries between concepts.

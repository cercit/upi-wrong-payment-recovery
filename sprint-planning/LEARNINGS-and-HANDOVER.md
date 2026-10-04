# PRD to Sprint: learnings and handover

Session: 4 Oct 2026 workshop (PRD to Sprint). Project: PhonePe Wrong-UPI Payment Recovery ("UPI Recover").
Status: stories are in Jira, sprints are not set up yet. Plan to pick this up next week.

---

## 1. Where everything is

| What | Where |
|---|---|
| Full PRD (persona, empathy map, journey, features, acceptance criteria) | [PRD_Main.md](PRD_Main.md) (source: ../docs/PRD.md + docs/images) |
| PRD as in the Google Doc | [PRD_Portfolio.md](PRD_Portfolio.md) / Drive "PRD_Portfolio" |
| Final user stories (8 → 9 after split) | [user-stories-v2.md](user-stories-v2.md) |
| Acceptance criteria (PQRSTU Gherkin) | [acceptance-criteria.md](acceptance-criteria.md) |
| Final sizing + decisions | [sizing.md](sizing.md) |
| Workshop guide | [session-guide.md](session-guide.md), [notes.md](notes.md) (INVEST) |
| **Sprint sheet (source of truth)** | https://docs.google.com/spreadsheets/d/1Jyk3pU8AEDiPfcr6Bybk8mqeAhtYPEHQoyza7hfkorg/edit |
| **Jira project PhonePe_Recovery (PR)** | https://samsm.atlassian.net/jira/software/projects/PR/boards |
| Trello workspace (board not built yet) | https://trello.com/w/userworkspace36269893 |
| GitHub repo (renamed 4 Oct, public) | https://github.com/cercit/upi-wrong-payment-recovery · site https://cercit.github.io/upi-wrong-payment-recovery/ |
| Reusable prompts | Vault/PM-Course/Prompt-Library, prompts 16–22 |
| Good sample used as benchmark | A classmate's sprint-plan workbook (not included) |

## 2. Final baseline (don't change without a reason)

| Jira | # | Story | Size | Risk | Impact | Total | Pts | Weeks | Sprint |
|---|---|---|---|---|---|---|---|---|---|
| PR-3 | US1 | Recover button on receipt | S | 3 | 5 | 8 | 1 | 1 | S1 |
| PR-4 | US2a | Prefilled, locked request | M | 3 | 5 | 8 | 2 | 1–2 | S1 |
| PR-5 | US2b | Case ID in 10 s, no duplicates | L | 5 | 5 | 10 | 3 | 1–4 | S2 |
| PR-6 | US3 | Why payment doesn't qualify | M | 2 | 2 | 4 | 2 | 2–3 | S2 |
| PR-7 | US4 | Scam to fraud route | M | 3 | 5 | 8 | 2 | 3–4 | S2 |
| PR-8 | US5 | Safe request to recipient | S | 2 | 2 | 4 | 1 | 5 | S3 |
| PR-9 | US6 | Full return with UPI PIN | S | 4 | 4 | 8 | 1 | 6 | S3 |
| PR-12 | US8 | "This isn't a mistake" | M | 4 | 2 | 6 | 2 | 6–7 | S4 |
| PR-10 | US7 | Partial return | M | 4 | 3 | 7 | 2 | 7–8 | S4 |

Epics: PR-1 Solution 1 One-tap Recover (P0), PR-2 Solution 2 Easy Return (P1).
Scale: S 1 wk, M 2 wk, L 1 month, XL a quarter. Risk and Impact 1–5. Total = Risk + Impact. Points S1 M2 L3 XL5.
Plan: 9 weeks (4 two-week sprints + a pilot week) from Mon 5 Oct 2026. Critical path: US2b, because Solution 2 can't start until cases exist.

## 3. Open to-dos for next week (in order)

1. **Delete PR-11** in Jira. It's a duplicate of US7, created by a connector glitch; deleting is permanent, so do it yourself.
2. Create 4 sprints in Jira with dates and move the stories in (see the table above).
3. Add team tasks as sub-tasks (Tasks tab: 48 tasks, incl. FND, SPK-1, HRD).
4. Run the **backlog audit** (prompt 22) on US2b, US6 and US5, triage the findings, update the acceptance criteria, and add at least 1 "From AI audit" card.
5. ~~Build the Trello board~~ DONE 4 Oct on https://trello.com/b/OyxET2NR/my-trello-board: 5 lists with WIP in the names, 9 story cards with size colours (green S, yellow M, orange L), Definition of Done pinned at the top of Backlog (the connector can't edit the board description or label names). Sprint Backlog holds Sprint 1 (US1 + US2a, 3 pts). Trello Starter Guide list left as is.
6. Fill the Jira key / Trello list columns in the sheet.
7. Sign off the [proposal] numbers (2-second load, 48 dp, test-set sizes) and the open PRD questions: sponsor bank, dispute owner, eligibility rules.
8. Optional: LinkedIn post on the class lesson (walkthrough style, /human).

## 4. Learnings: the method

- **Start with context and a plan, and approve each step.** The AI shouldn't run ahead (prompt 16).
- **Story format:** a *specific* user in a *specific* moment, *one* action with where and limits, and a benefit the user would notice. "To recover the wrong payment" isn't a benefit; it just repeats the action.
- **INVEST in practice:**
  - *Independent* fails naturally in a workflow (raise → notify → return → track). Fix it with build order and test data, not rewording.
  - *Estimable*: move the unknowns out of the story. Name the 4 rules inside it, or stop the story at "Bank review".
  - *Small*: one screen or one action, otherwise split into a/b/c.
  - *Testable*: needs a number or an exact label. Good: "case ID within 10 s". Bad: "sent quickly".
- **✅/❌ example pairs** (Small, Estimable, Testable) teach the difference faster than definitions do.
- **PQRSTU Gherkin:**
  - Each row has to match its label. Performance needs a time or a load.
  - No vague words: reliably, fast, sensitive, comprehensible.
  - *When* is an action or event, not a condition.
  - Every lens should catch a different failure.
  - Add the core happy path somewhere.
- **Three things to keep separate:** acceptance criteria (this story), Definition of Done (every story) and success metrics (North Star). Interviewers notice when they're mixed.
- **Sizing:**
  - Anything XL gets split before it enters a sprint.
  - A story shouldn't be riskier than the one it builds on, unless you say why.
  - Payments, partner approvals and privacy push risk up.
  - Points can fit the sprint while the calendar doesn't. Look at the critical path.
- **Ask, don't overwrite.** When reviewing someone's numbers, flag the issue, ask with a recommended option, and apply only what's approved. Log who changed what and why.
- **Mark proposals.** Any number not in the PRD gets a [proposal] tag until it's signed off.

## 5. Learnings: what the review caught

- **Contradiction:** US1 hid the button on ineligible payments, but US3 needed users to tap it. Fixed with a "Help → I paid the wrong person" entry. The PRD has the same clash between AC-1.1 and AC-1.3.
- **Privacy leak:** a return payment would have shown the sender's UPI ID, which often contains a phone number. Fixed by showing a masked name ("Ritika S."). A spike (SPK-1) checks it can be done.
- **Scam path:** "This was a scam" must never contact the recipient (no tipping off). It goes to 1930 and cybercrime.gov.in.
- **US2 was XL.** Split into US2a (screen) and US2b (case service). US2b became the critical path, and the plan went from 5 to 9 weeks.

## 6. Learnings: tooling

- **Google Sheets connector:**
  - Big batchUpdate calls fail on JSON size, so split them into smaller batches.
  - Use explicit field masks (`userEnteredFormat.backgroundColor`), not the parenthesised form.
  - ARRAYFORMULA keeps whole columns linked with one cell.
  - One start-date cell should drive every date.
- **Always read back** formulas, dashboards and Jira issues before calling them done. Sprint 1 points were wrong once (8 vs 9) and were caught this way.
- **Jira connector:**
  - It can't create projects; create one yourself (Scrum → Team-managed).
  - The story-points field is "Story point estimate" (customfield_10016).
  - A batch of creates made one duplicate. Check the keys for gaps and duplicates afterwards.
  - Never let the AI delete issues; deletion is permanent.
- **Trello connector** is connected, with 1 workspace and 1 existing board ("My Trello board", leave it alone).
- **Benchmark against a good sample.** The sample sheet won on tracking: dashboard, story×week grid, timeline, linked work items. Ours won on content: sizing, complete acceptance criteria, Definition of Done, estimates. The upgraded sheet has both.

## 7. Interview-ready one-liner

"I took a PRD to a Jira-ready backlog in a day:
- 9 INVEST stories with measurable PQRSTU acceptance criteria
- sizing reviewed for consistency, which split one XL story and exposed the critical path
- a review that caught a privacy leak and a contradiction between stories before any code was written
- a live tracking sheet with a dashboard and timeline that feeds Jira."

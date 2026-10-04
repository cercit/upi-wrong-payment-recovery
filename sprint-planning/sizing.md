# Sizing: final baseline (4 Oct 2026)

This is the final context for building the Jira and Trello work items.
Scale (Sameer): Size S = 1 week, M = 2 weeks, L = 1 month, XL = a quarter. Risk and Impact 1 (low) to 5 (high). Total = Risk + Impact. Points: S1 M2 L3 XL5.
Source of truth: Google Sheet, https://docs.google.com/spreadsheets/d/1Jyk3pU8AEDiPfcr6Bybk8mqeAhtYPEHQoyza7hfkorg/edit

| # | Story | Size | Risk | Impact | Total | Weeks | Sprint |
|---|---|---|---|---|---|---|---|
| US1 | Recover button on receipt | S | 3 | 5 | 8 | 1 | S1 |
| US2a | Prefilled, locked request | M | 3 | 5 | 8 | 1–2 | S1 |
| US2b | Case ID in 10 s, no duplicates | L | 5 | 5 | 10 | 1–4 | S2 |
| US3 | Why payment doesn't qualify | M | 2 | 2 | 4 | 2–3 | S2 |
| US4 | Scam to fraud route | M | 3 | 5 | 8 | 3–4 | S2 |
| US5 | Safe request to recipient | S | 2 | 2 | 4 | 5 | S3 |
| US6 | Full return with UPI PIN | S | 4 | 4 | 8 | 6 | S3 |
| US8 | "This isn't a mistake" | M | 4 | 2 | 6 | 6–7 | S4 |
| US7 | Partial return | M | 4 | 3 | 7 | 7–8 | S4 |

Week 9 is pilot readiness. Points per sprint: S1 3, S2 7, S3 2, S4 4.

## Decisions made on 4 Oct
- US2 was XL, so it was split into US2a (M/3/5) and US2b (L/5/5). US2b is the critical path, because Solution 2 can't start until cases exist.
- US6 risk raised from 2 to 4: this story moves real money with a PIN and needs the masked-sender spike.
- US8 re-sized from L to M: the story stops at "Bank review", and dispute resolution becomes a later story.
- Total = Risk + Impact.
- Kept as scored: US1, US3, US4, US5 (2/2, flagged in the sheet as dependent on sponsor-bank approval) and US7.

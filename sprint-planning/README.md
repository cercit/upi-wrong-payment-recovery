# From PRD to sprint plan

How the UPI Recover PRD became a backlog a team could start building on Monday. This was done in a PRD-to-Sprint workshop on 4 Oct 2026.

**Scope:** Solution 1, One-tap Recover (P0), and Solution 2, Easy Return (P1). Live Tracker (P2) is held for a later release.

## Results

| | |
|---|---|
| User stories | 9, all passing INVEST (US2 was XL and was split into US2a + US2b) |
| Acceptance criteria | 48 in Given / When / Then, 6 per story: Performance, Quality, Reliability, Security, Transparency, Usability |
| Sizing | Size S/M/L as time (1 wk / 2 wk / 1 month), Risk and Impact 1–5, Total = Risk + Impact |
| Plan | 9 weeks: 4 two-week sprints plus a pilot-readiness week. US2b (case ID) is the critical path |
| Tracking | Google Sheet (dashboard, story×week grid, timeline, tasks, risks), Jira (2 epics, 9 stories), Trello (WIP-limited board) |

## Files, in the order they were made

1. [PRD_Main.md](PRD_Main.md): the full PRD, with personas, empathy map and journey written out as text
2. [notes.md](notes.md): the story format and the INVEST checks
3. [user-stories-v2.md](user-stories-v2.md): the final stories, with the reasoning for every INVEST check
4. [acceptance-criteria.md](acceptance-criteria.md): PQRSTU criteria in Gherkin tables
5. [sizing.md](sizing.md): the final sizing and the decisions behind it
6. [LEARNINGS-and-HANDOVER.md](LEARNINGS-and-HANDOVER.md): what worked, what the review caught, and next steps

Earlier drafts kept for the record: [backlog.md](backlog.md) (first story pass), [user-stories.md](user-stories.md), [plan.md](plan.md), [PRD_Portfolio.md](PRD_Portfolio.md).

## What the review caught before any code
- **Privacy leak:** a return payment would have shown the sender's UPI ID, which often contains a phone number. Fixed with a masked name.
- **Contradiction:** one story hid the Recover button on ineligible payments, while another needed users to tap it. Fixed with a Help-menu entry.
- **XL story:** splitting it exposed the critical path, and the plan went from 5 to 9 weeks.
- **Scam path:** a scam report never contacts the recipient. It goes to the 1930 helpline and cybercrime.gov.in.

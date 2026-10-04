> **Superseded.** Early Sprint 1 draft. The final plan is in [../sprint-planning/](../sprint-planning/README.md).

# Sprint 1 plan: One-tap Recover

Source: [PRD.md](PRD.md). Draft for review, not pushed.

## Assumptions (change these and the scope moves)

- **Length:** 2 weeks, 10 working days.
- **Team:** the PRD doesn't name one, so this assumes 1 Android/iOS dev, 2 backend devs, 1 QA, 1 designer (part time), 1 PM.
- **Capacity:** 3 devs × 2 weeks = 6 person-weeks, minus ~20% for ceremonies, reviews and bugs = **about 5 person-weeks of build**.
- **Sizing:** story points on a 1/2/3/5/8 scale, roughly 1 point = 1 dev-day. Target ~22 points committed, ~6 stretch.
- **Pilot rule from the PRD (section 13):** pilot weeks 1–4 measure the baseline in read-only mode. So everything ships behind a feature flag, and analytics must be live before the button is switched on.

## Sprint goal

> A PhonePe user who sent money to the wrong UPI ID can tap "Recover payment" on the receipt and get a case ID in under 10 seconds, with eligibility checked and every step logged, behind a pilot flag.

That is the P0 from the RICE table (score 0.53, effort 3 person-weeks). Easy Return and Live Tracker stay in later sprints, as the PRD rollout order says.

## Committed backlog (P0)

| # | Story | Covers | Points | Owner |
|---|---|---|---|---|
| 1 | Case data model + "one open case per payment" constraint | AC-1.5, NFR Reliability | 3 | Backend |
| 2 | Eligibility engine: P2P only, successful, ≤90 days, ₹1+, 24-hour fast-path flag | Section 7, AC-1.1 | 5 | Backend |
| 3 | "Recover payment" button on receipt, visible without scrolling, only when eligible | AC-1.1 | 2 | Mobile |
| 4 | Pre-filled, locked request screen (amount, UPI ID, UTR, date, bank) | AC-1.2 | 3 | Mobile |
| 5 | Ineligible screen naming the failing rule + general complaint fallback | AC-1.3 | 2 | Mobile |
| 6 | "This was a scam" branch to fraud route (1930, cybercrime.gov.in) | AC-1.4 | 1 | Mobile |
| 7 | Submit API: returns case ID within 10 s | AC-1.6, NFR Performance | 2 | Backend |
| 8 | Offline queue: save on device, send on reconnect, idempotent (no double send) | AC-1.7 | 3 | Mobile + Backend |
| 9 | Rate limit: max 3 requests per user per 24 h, rest to manual review | AC-4.1 | 1 | Backend |
| 10 | Analytics events: `recover_button_shown`, `recover_tapped`, `eligibility_failed`, `request_sent` | Section 13 | 1 | Mobile |
| 11 | Feature flag + pilot cohort targeting | Section 13 | 1 | Backend |
| | **Total committed** | | **24** | |

QA writes test cases straight from the Given/When/Then criteria from day 1 and runs them as stories land. Design finalises screens 1 and 2 from the existing [mockups](../mockups/) in the first 2 days.

## Stretch (only if the committed set is done)

| # | Story | Covers | Points |
|---|---|---|---|
| S1 | Multi-language strings for the 4 new screens (EN, HI, TE, TA, BN) | NFR Usability | 3 |
| S2 | Spike: recipient in-app prompt + SMS design for Easy Return, no build | AC-2.1, AC-2.7 | 2 |
| S3 | 3G performance test of the submit flow | NFR Performance | 1 |

## Not in this sprint

- Easy Return build (P1), Live Tracker (P2), UDIR integration.
- Harassment block and recipient privacy controls (AC-4.2, AC-4.3). They only matter once a recipient is contacted, so they go with Easy Return.

## Dependencies

| Dependency | Needed for | Blocks sprint? |
|---|---|---|
| Ops/Legal/sponsor bank confirm the section 7 eligibility rules | Story 2 | Partly. Build with the proposed rules as config, so a changed rule is a config edit, not a code change |
| Receipt screen owner team agrees to the new button | Story 3 | Yes. Book this before sprint planning |
| Fraud route links/screens from the fraud team | Story 6 | No, static links are enough for now |
| UDIR API access from NPCI | Live Tracker | No, later sprint. Start the request now because it is the longest lead time |

## Risks

| Risk | Mitigation |
|---|---|
| Eligibility rules change after legal review | Rules as config (see above) |
| Offline queue + idempotency is harder than 3 points | Use a client-generated request ID; if it slips, ship online-only behind the flag and carry AC-1.7 over |
| The pilot needs a 4-week baseline before the button goes live | Ship with the flag off and analytics on, which matches the PRD's read-only baseline plan |
| Open question 1 (can PhonePe contact the recipient directly?) is unanswered | Doesn't block Sprint 1, but it decides Sprint 2's Easy Return design. Get an answer before Sprint 2 planning |

## Definition of done

- Each acceptance criterion in scope has a passing test.
- Events visible in the analytics dashboard.
- Works behind the pilot flag on Android and iOS.
- Request-to-case-ID under 10 s on a normal connection.

## Rough roadmap after this

- **Sprint 2:** Easy Return (AC-2.1–2.7) + AC-4.2, AC-4.3, about 5 person-weeks per RICE.
- **Sprints 3–4:** Live Tracker (AC-3.1–3.5) once UDIR access lands, about 8 person-weeks.

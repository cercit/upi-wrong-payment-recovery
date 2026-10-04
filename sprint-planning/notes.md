# Workshop notes: 4 Oct 2026, PRD to Sprint

## 1. Story format and INVEST

**Format:** As a [user], I want [action], so that [benefit].
- Name a **real user**. In the guide's example these are a shopper, a picker and a support agent. For our PRD they are:
  - **Sender:** Ritika, or Sunita as the Hindi-first shop owner
  - **Recipient:** the person who got the money by mistake
  - **Support agent / Ops reviewer:** handles manual review and harassment reports
- **One action** per story. If two actions are joined by "and", split the story.
- A **benefit the user would notice**, never a technical one.

**INVEST checks: ask these of every story**

| Letter | Check | Ask yourself |
|---|---|---|
| I | Independent | Can this be built and released without waiting for another story? |
| N | Negotiable | Does it say what the user needs, not how to code it? |
| V | Valuable | Would a user notice and care if it shipped? |
| E | Estimable | Do we know enough to guess its size? |
| S | Small | Can it be finished within one sprint, ideally a few days? |
| T | Testable | Can we clearly say pass or fail? |

**Common failures (from the guide)**
- *Vague:* "As a user, I want a better recovery system." Fails T and E. Pick one behaviour.
- *Too big:* "...raise a request, notify the recipient and track it..." Fails S. Split it three ways.
- *No user value:* "As a developer, I want a recovery_case table..." Fails V. Say what the user can do instead.

**How to split a big story**
1. By workflow step (raise → notify → return → track)
2. By business rule (e.g. 90-day window, one case per payment, 3 requests a day)
3. Happy path vs problem path (e.g. eligible vs ineligible, online vs network drop)

**Example from our PRD (AC-1.1)**
> As a sender who just paid the wrong UPI ID, I want a "Recover payment" button on the payment receipt, so that I can start recovery before the money is spent.
- I: yes, it needs only the receipt screen. N: says nothing about how to build it. V: fixes "no undo". E: one screen plus an eligibility check. S: a few days. T: the button is visible without scrolling on eligible P2P payments under 90 days old.

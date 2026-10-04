# Backlog: Wrong UPI Payment Recovery

Source: [PRD_Main.md](PRD_Main.md), sections 6–8. Format: As a [user] I want to [action] so that [benefit].
Step 1 of [plan.md](plan.md): 9 user stories, each with INVEST checks and ✅/❌ examples.

---

# Solution 1: One-tap Recover (P0)
A "Recover payment" button on the receipt that opens a prefilled request.

## User story 1: Recover button on the receipt
> As a **sender who just paid the wrong UPI ID**, I want to **see a "Recover payment" button on the receipt of a successful P2P payment less than 90 days old**, so that **I can start recovery before the money is spent**. *(AC-1.1)*

- I - Independent - ✅ Needs only the receipt screen, which already exists
- N - Negotiable - ✅ Says what, not how
- V - Valuable - ✅ Fixes "There's no cancel option"
- E - Estimable - ✅ One button plus a show/hide rule
- S - Small - ✅ A few days
- T - Testable - ✅ Visible without scrolling on eligible receipts, hidden on others

**Small** ✅ The button shows only on successful P2P payments less than 90 days old.
**And not small** ❌ The button shows on every payment type: P2P, merchant, QR, bills, wallet, credit card.

**Estimable** ✅ Show/hide depends on 3 fields already on the receipt: payment type, status, date.
**And not Estimable** ❌ The button shows whenever the user might have made a mistake.

**Testable** ✅ On an eligible receipt, the button is visible without scrolling.
**And not testable** ❌ The button is easy to find.

## User story 2: Prefilled request and case ID
> As a **sender who tapped "Recover payment"**, I want to **confirm a request with amount, UPI ID, UTR, date and bank already filled in**, so that **I get a case ID within 10 seconds without typing details I don't understand**. *(AC-1.2, AC-1.6)*

- I - Independent - ❌ Opens from Story 1's button. *Fix: build right after Story 1, or test with a dummy entry point*
- N - Negotiable - ✅
- V - Valuable - ✅ Fixes "What's a UTR number?"
- E - Estimable - ✅ 5 fixed fields, all taken from the payment
- S - Small - ✅ One confirm screen and one case ID
- T - Testable - ✅ Fields locked; case ID shown within 10 seconds

**Small** ✅ The request has 5 locked fields and one Confirm button.
**And not small** ❌ The user can edit any field, upload screenshots and add a chat with support.

**Estimable** ✅ Fields come from the payment record: amount, recipient UPI ID, UTR, date, sender bank.
**And not Estimable** ❌ The form collects whatever details the bank might need.

**Testable** ✅ After Confirm, a case ID appears within 10 seconds.
**And not testable** ❌ After Confirm, the request is sent quickly.

## User story 3: Told why the payment doesn't qualify
> As a **sender whose payment doesn't qualify for recovery**, I want to **see which rule it failed and where to go instead**, so that **I always have a next step and am never left at a dead end**. *(AC-1.3)*

- I - Independent - ✅ The eligibility check can be built and tested on its own
- N - Negotiable - ✅
- V - Valuable - ✅ Fixes "Tickets close with no next step"
- E - Estimable - ❌ The rules in PRD section 7 are still only proposed. *Fix: get Ops/Legal to confirm them before sizing*
- S - Small - ✅ One message screen with a fallback link
- T - Testable - ✅ Each failed rule shows its own message plus the complaint route

**Small** ✅ The screen names one of 4 rules: not P2P, not successful, older than 90 days, case already open.
**And not small** ❌ The screen explains every possible bank, NPCI and legal reason a payment can't be recovered.

**Estimable** ✅ Each of the 4 rules has a fixed message and one fallback: the general complaint route.
**And not Estimable** ❌ The screen guides the user to the best option for their situation.

**Testable** ✅ A merchant QR payment shows "Merchant payments are refunded through the merchant" with a complaint link.
**And not testable** ❌ An ineligible payment shows a helpful message.

---

# Solution 2: Easy Return (P1)
The recipient gets a one-tap "Return ₹X" button that needs their UPI PIN.

## User story 4: Recipient gets a safe request
> As a **PhonePe user who received money by mistake**, I want to **get an in-app prompt and SMS showing only the amount, sender's first name and date**, so that **I know the request is genuine and not a scam**. *(AC-2.1, AC-2.2, AC-2.7)*

- I - Independent - ❌ Needs a case from Story 2. *Fix: trigger from a test case*
- N - Negotiable - ✅
- V - Valuable - ✅ Honest recipients finally know what to do
- E - Estimable - ❌ The sponsor bank hasn't confirmed that PhonePe may contact the recipient directly (open question 1)
- S - Small - ✅ One prompt, one SMS
- T - Testable - ✅ Arrives within 1 minute; shows only 3 fields; no PIN link

**Small** ✅ Recipients on PhonePe get an in-app prompt and an SMS.
**And not small** ❌ Recipients on any UPI app (GPay, Paytm, BHIM, bank apps) get a call, an email and a WhatsApp message.

**Estimable** ✅ The prompt shows exactly 3 things: amount, sender's first name, payment date.
**And not Estimable** ❌ The prompt shows enough to make the recipient feel confident.

**Testable** ✅ The prompt and SMS arrive within 1 minute and contain no link asking for a PIN or bank details.
**And not testable** ❌ The prompt reaches the recipient promptly and looks safe.

## User story 5: Return with UPI PIN
> As a **recipient who wants to give the money back**, I want to **tap "Return ₹X" and enter my UPI PIN**, so that **the money goes back to the sender like any normal payment**. *(AC-2.3, AC-2.4)*

- I - Independent - ❌ Needs Story 4's prompt
- N - Negotiable - ✅
- V - Valuable - ✅ This is the moment the money actually comes back
- E - Estimable - ✅ Reuses the normal UPI payment flow
- S - Small - ❌ Full and partial returns are two behaviours. Split into:
  - **US 5.a** - As a recipient, I want to return the full amount with my UPI PIN so that the case closes in one step.
  - **US 5.b** - As a recipient who has spent part of it, I want to return a smaller amount so that I can send back what I have now, and the case stays open for the balance.
- T - Testable - ✅ Nothing is marked returned without a real UPI payment

**Small** ✅ The return pays back the original amount to the original sender with a UPI PIN.
**And not small** ❌ The return supports instalments, EMI, cash at a branch and wallet transfers.

**Estimable** ✅ The return is a standard UPI payment, prefilled to the sender, for up to the original amount.
**And not Estimable** ❌ The return works however the recipient prefers to pay.

**Testable** ✅ The case shows "Returned" only after a successful UPI payment with a UTR.
**And not testable** ❌ The case updates once the recipient has paid.

## User story 6: "This isn't a mistake"
> As a **recipient who believes the payment was meant for me**, I want to **tap "This isn't a mistake" and pick a reason**, so that **the case goes to bank review instead of pressuring me**. *(AC-2.5)*

- I - Independent - ❌ Needs Story 4's prompt
- N - Negotiable - ✅
- V - Valuable - ✅ Protects honest recipients from false or scam claims
- E - Estimable - ❌ Who handles the dispute, PhonePe support or the recipient's bank, is open question 4
- S - Small - ✅ One button, a reason list, one status change
- T - Testable - ✅ The case moves to "Bank review" and the sender sees it

**Small** ✅ The recipient picks one of 3 reasons: "Payment for goods/services", "Repayment of money owed", "Other".
**And not small** ❌ The recipient uploads invoices, chats with the sender and joins a mediation call.

**Estimable** ✅ Declining moves the case to one status, "Bank review", and notifies the sender.
**And not Estimable** ❌ Declining starts whatever dispute process is fair.

**Testable** ✅ After the recipient declines, the sender's tracker shows "Recipient disputed: with bank review" within 1 minute.
**And not testable** ❌ After the recipient declines, the sender is kept informed.

---

# Solution 3: Live Tracker (P2)
Shows the owner, next step and deadline in plain words.

## User story 7: Owner, next step, deadline
> As a **sender with an open recovery case**, I want to **see who has my case, what happens next and by when, in plain words**, so that **I can wait calmly instead of chasing support**. *(AC-3.1, AC-3.5)*

- I - Independent - ❌ Needs a case from Story 2
- N - Negotiable - ✅
- V - Valuable - ✅ Fixes "Is anyone working on it?"
- E - Estimable - ❌ Live bank statuses depend on access to the UDIR API from NPCI
- S - Small - ❌ Split into:
  - **US 7.a** - As a sender, I want to see PhonePe's own case steps (request sent, recipient notified, recipient replied, closed) so that I can see progress now.
  - **US 7.b** - As a sender, I want bank and UDIR updates on my tracker within 1 minute so that I see what the bank is doing. *(AC-3.2, after UDIR access)*
- T - Testable - ✅ Owner, next step and deadline are always visible, with no bank codes

**Small** ✅ The tracker shows 4 PhonePe-owned steps with owner and deadline.
**And not small** ❌ The tracker shows live statuses from every bank, NPCI and the RBI Ombudsman.

**Estimable** ✅ Each step has a fixed owner and deadline (e.g. "Recipient · reply by 6 Oct, 2:30 pm").
**And not Estimable** ❌ The tracker shows whatever is happening with the case.

**Testable** ✅ Every open case shows owner, next step and deadline, in the user's chosen language, with no UTR or NPCI codes.
**And not testable** ❌ The tracker is easy to understand.

## User story 8: Overdue alert and escalation
> As a **sender whose case has passed a deadline**, I want to **see "Overdue" and get the escalation form prefilled**, so that **I can escalate in one step without starting over**. *(AC-2.6, AC-3.3)*

- I - Independent - ❌ Needs the Story 7 tracker
- N - Negotiable - ✅
- V - Valuable - ✅ Fixes "Ticket closed, money not back"
- E - Estimable - ✅ Deadlines are fixed: recipient 48 hours, then the bank route, then the RBI Ombudsman after 30 days
- S - Small - ✅ One badge and one prefilled form
- T - Testable - ✅ "Overdue" shows the moment a deadline passes

**Small** ✅ Two escalations: the NPCI complaint portal, then the RBI Ombudsman after 30 days.
**And not small** ❌ Escalate to the police, consumer court, social media and the bank's head office.

**Estimable** ✅ Overdue is triggered by 2 timers: 48 hours for the recipient, 30 days for the bank.
**And not Estimable** ❌ Warn the user whenever the case is taking too long.

**Testable** ✅ At 48 hours with no recipient reply, the case shows "Overdue" and moves to the bank route automatically.
**And not testable** ❌ Delayed cases are escalated in time.

## User story 9: Clear final outcome
> As a **sender whose case has closed**, I want to **see one clear final outcome**, so that **I know whether all my money came back**. *(AC-3.4)*

- I - Independent - ❌ Needs the Story 7 tracker
- N - Negotiable - ✅
- V - Valuable - ✅ Fixes "Did all of it return?"
- E - Estimable - ✅ Exactly 4 outcomes
- S - Small - ✅ One closing screen
- T - Testable - ✅ Every closed case shows exactly one of the 4

**Small** ✅ The 4 outcomes: returned in full, returned in part (₹ amount shown), declined by recipient, closed without recovery.
**And not small** ❌ The closing screen shows a full case history, a downloadable legal report and a feedback survey.

**Estimable** ✅ The outcome is set from the case's last status and the total returned.
**And not Estimable** ❌ The outcome explains the result in whatever detail the user needs.

**Testable** ✅ A case where ₹3,000 of ₹4,500 came back shows "Returned in part: ₹3,000 of ₹4,500".
**And not testable** ❌ A partly recovered case shows a clear outcome.

---

## Summary

| # | Story | I | N | V | E | S | T | Action |
|---|---|---|---|---|---|---|---|---|
| 1 | Recover button on receipt | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Ready |
| 2 | Prefilled request, case ID | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Build after 1 |
| 3 | Told which rule failed | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | Confirm rules with Ops/Legal |
| 4 | Recipient gets safe request | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | Sponsor bank approval |
| 5 | Return with UPI PIN | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Split 5.a full / 5.b partial |
| 6 | "This isn't a mistake" | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | Decide dispute owner |
| 7 | Owner, next step, deadline | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | Split 7.a own steps / 7.b UDIR |
| 8 | Overdue + escalation | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Build after 7 |
| 9 | Clear final outcome | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Build after 7 |

**Why so many ❌ on Independent:** recovery is one journey (raise → notify → return → track), so later steps need a case to exist. Fix it with build order and test cases, not by rewriting.

**Not yet covered by a story:** the scam path to the fraud route (AC-1.4), one case per payment (AC-1.5), saving the request offline (AC-1.7), and the abuse controls (AC-4.1 to 4.3). Candidates for extra stories in Step 2 or from the AI audit.

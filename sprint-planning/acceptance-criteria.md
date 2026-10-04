# Acceptance criteria: PQRSTU in Gherkin

Stories from [user-stories-v2.md](user-stories-v2.md). Targets come from [PRD_Main.md](PRD_Main.md) sections 7–9.
Fixes applied: US3 now opens from "I paid the wrong person" in the receipt's Help menu (it no longer clashes with US1), and US6 shows the sender only by a masked name.

---

## Solution 1: One-tap Recover

### US1: Recover button on the receipt
As a sender who just paid the wrong UPI ID, I want to see a "Recover payment" button on the receipt of a successful P2P payment less than 90 days old, so that I can start recovery before the money is spent.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | Sender is on a 3G connection | The receipt loads | The button appears in the same load, within the 2-second receipt load target |
| Quality | Test receipts with known eligible and ineligible payments (merchant, failed, over 90 days) | Each receipt is opened | The button shows on all and only eligible P2P receipts |
| Reliability | A recovery case is already open for this payment | The receipt is opened again | The button changes to "View recovery case" and no second case can be started |
| Security | A receipt is opened by anyone other than the payer (shared link or screenshot) | The receipt is viewed | No Recover button is shown |
| Transparency | Payment is close to the 90-day limit | The receipt is opened | The button shows the days left, e.g. "5 days left to request recovery" |
| Usability | App language is not English | The receipt is opened | The button label is in the user's language and starts recovery in 1 tap |

### US2: Prefilled request and case ID
As a sender who tapped "Recover payment", I want to confirm a request that already has the amount, UPI ID, UTR, date and bank filled in and locked, so that I get a case ID within 10 seconds without typing details I don't understand.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | Sender is on 3G | Sender taps Confirm | A case ID is shown within 10 seconds |
| Quality | Test requests built from known payment records | Requests are submitted | All 5 fields match the payment record, and fewer than 2% are sent back for errors |
| Reliability | Network drops after Confirm, or Confirm is tapped twice | Connection returns | The request is sent exactly once: one case ID, none lost, none duplicated |
| Security | A request is created | It is stored and sent | It is encrypted and stored in India (DPDP), and the sender's phone number and bank details are never passed to the recipient |
| Transparency | The case is created | The confirmation screen shows | It shows the case ID, the next step and the deadline (e.g. "Recipient reply due by 6 Oct, 2:30 pm") |
| Usability | Sender doesn't know banking terms | The request screen opens | No jargon ("UTR" is shown as "Transaction ID"), and receipt to case ID takes 3 taps or fewer |

### US3: Told why the payment doesn't qualify
As a sender whose payment doesn't qualify for recovery, I want to pick "I paid the wrong person" from the receipt's Help menu and see which of the 4 rules it failed and the complaint route, so that I always have a next step and am never left at a dead end.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | Any payment | Sender picks "I paid the wrong person" from Help | The eligibility result shows within 2 seconds |
| Quality | Test payments covering each of the 4 rules, plus eligible ones | Eligibility is checked | Every ineligible payment names the correct rule; every eligible payment goes to the US2 request screen instead |
| Reliability | The eligibility service is unavailable | Sender asks for recovery | The screen says "We can't check right now, try again shortly" with the complaint route, and never wrongly says "not eligible" |
| Security | A rule failure is explained | The screen shows | It shows no recipient details beyond what is already on the receipt |
| Transparency | A payment fails more than one rule | The screen shows | Every failed rule is listed, one plain-language line each, with the complaint route |
| Usability | App language is not English | The screen shows | The message is in the user's language and the complaint route opens in 1 tap |

### US4: Scam goes to the fraud route
As a sender who was tricked into paying, I want to pick "This was a scam" and be sent to the 1930 helpline and cybercrime.gov.in instead of a return request, so that a fraud gets reported to the right place and I don't waste time asking a scammer for my money.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | Phone is offline or on a slow network | Sender picks "This was a scam" | The fraud screen with 1930 and cybercrime.gov.in still shows (stored in the app) |
| Quality | Test requests where "This was a scam" is picked | Requests are completed | No return request reaches any recipient |
| Reliability | Sender picked "This was a scam" by mistake | Sender taps Back before confirming | The reason can be changed and nothing has been sent |
| Security | "This was a scam" is confirmed | The case is logged | The recipient is not contacted (no tipping off), and the case goes to PhonePe's fraud team |
| Transparency | The fraud screen shows | Sender reads it | It explains why: "Scams are handled by the police. We won't contact the person you paid." |
| Usability | The fraud screen shows | Sender taps "Call 1930" | The phone dialler opens with 1930 filled in |

---

## Solution 2: Easy Return

### US5: Safe request to the recipient
As a PhonePe user who received money by mistake, I want to get an in-app prompt showing only the amount, the sender's first name and the payment date, so that I can trust it's a genuine request and not a scam.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | Recipient's phone is online | A case is created against them | The in-app prompt arrives within 1 minute |
| Quality | Test cases with known amounts and dates | Prompts are sent | Every prompt shows the exact amount and date from the payment record |
| Reliability | Recipient's phone is off when the case is created | Recipient opens PhonePe later, before the deadline | The prompt is still waiting and is shown once, not repeated |
| Security | The prompt is shown | Recipient reads it | It never shows the sender's phone number, full name, UPI ID or bank, and has no link asking for a PIN or bank details |
| Transparency | The prompt is shown | Recipient reads it | It says why they're seeing it, that returning is their choice, and the reply-by date |
| Usability | Recipient uses a non-English language or large text | The prompt shows | It is in their language, readable at large text size, with 2 clear buttons: "Return ₹X" and "This isn't a mistake" |

### US6: Full return with UPI PIN
As a recipient who wants to give the money back, I want to tap "Return ₹X" and enter my UPI PIN to send the full amount to the sender, shown only by a masked name (e.g. "Ritika S."), so that the money goes back as easily as any normal payment without either of us seeing the other's phone number or UPI ID.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | The return payment succeeds | The UPI payment completes | The sender is notified within 1 minute |
| Quality | Test returns with known senders and amounts | The return screen opens | The payee is always the original sender and the amount is the original amount |
| Reliability | The payment fails (e.g. low balance) or Return is tapped twice | The recipient tries to return | The case is not marked returned on a failure, a retry is offered, and a double tap makes only one payment |
| Security | Any return | The recipient pays | A UPI PIN is always required, and the sender appears only as a masked name ("Ritika S.") in the return screen and the recipient's history; no phone number or full UPI ID is shown |
| Transparency | The return succeeds | Both sides check the case | Both get a receipt with the UTR as proof, and the case shows "Returned in full" |
| Usability | The prompt is open | The recipient returns the money | It takes 2 taps plus the PIN, the same as a normal payment |

### US7: Partial return
As a recipient who has already spent part of the money, I want to change the amount and return what I have now, so that I can still give back something and the case stays open for the rest.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | A partial return succeeds | The UPI payment completes | The sender's case shows the new balance within 1 minute |
| Quality | Recipient enters ₹0 or more than the original amount | Recipient taps Return | It is blocked with "Enter an amount from ₹1 to ₹4,500" |
| Reliability | Recipient returns ₹3,000, then ₹1,500 later | The second payment succeeds | The case closes as "Returned in full", and the total can never exceed the original ₹4,500 |
| Security | Every partial payment | The recipient pays | A UPI PIN is required each time, and the sender stays masked |
| Transparency | A partial return is made | The sender opens the case | It shows "Returned in part: ₹3,000 of ₹4,500", each payment with its date, and the balance still due |
| Usability | The return screen opens | Recipient edits the amount | The amount is prefilled with the full ₹4,500, editable, and opens the number keypad |

### US8: "This isn't a mistake"
As a recipient who believes the payment was meant for me, I want to tap "This isn't a mistake" and pick one of 3 reasons, so that I'm not pressured into paying and the case goes to bank review instead.

| Category | Given | When | Then |
|---|---|---|---|
| Performance | Recipient submits a dispute | The case updates | The sender's case shows "Recipient disputed: with bank review" within 1 minute |
| Quality | Recipient taps "This isn't a mistake" | They try to submit without a reason | Submit is blocked until one of the 3 reasons is picked |
| Reliability | A case is disputed | Later reminder times arrive | No more reminders are sent to the recipient for this case |
| Security | A reason is picked | The sender sees the status | Only the fixed reason label is shown, with no free text, and a "Report harassment" option blocks further requests from this sender |
| Transparency | The dispute is submitted | The recipient sees the confirmation | It says "Your bank will review this. You don't need to pay anything now." |
| Usability | App language is not English | Recipient disputes | It is in their language and takes 2 taps |

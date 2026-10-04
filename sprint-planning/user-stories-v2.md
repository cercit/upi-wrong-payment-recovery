# User stories v2: Solutions 1 and 2 (4 each)

Source: [PRD_Main.md](PRD_Main.md) sections 7–8. Each story is written to pass INVEST. Where a check only passes with a condition, the condition is stated.

1. Solution 1 - a "Recover payment" button on the receipt that opens a prefilled request.
   1. User story 1 - Recover button
As a sender who just paid the wrong UPI ID, I want to see a "Recover payment" button on the receipt of a successful P2P payment less than 90 days old, so that I can start recovery before the money is spent.
      - I ✅ Needs only the receipt screen, which already exists. Can ship alone (the button can open a "coming soon" page).
      - N ✅ Says where and when the button shows, not how it's coded.
      - V ✅ Fixes the journey's first pain: "There's no cancel option."
      - E ✅ One button, a show/hide rule from 3 fields already on the receipt (type, status, date).
      - S ✅ One screen change; 2–3 days.
      - T ✅ Pass = visible without scrolling on an eligible receipt and hidden on a merchant payment.
   2. User story 2 - Prefilled request
As a sender who tapped "Recover payment", I want to confirm a request that already has the amount, UPI ID, UTR, date and bank filled in and locked, so that I get a case ID within 10 seconds without typing details I don't understand.
      - I ✅ Can be built and tested in parallel with Story 1 by opening it from a test payment. It is only *released* after Story 1.
      - N ✅ Names the 5 fields the user sees, not the database or API.
      - V ✅ Fixes "What's a UTR number?" from the journey map.
      - E ✅ The 5 fields come from the payment record; one case is created.
      - S ✅ One confirm screen and one case ID; about 3 days.
      - T ✅ Pass = fields can't be edited, and a case ID appears within 10 seconds of Confirm.
   3. User story 3 - Why it doesn't qualify
As a sender whose payment doesn't qualify for recovery, I want to pick "I paid the wrong person" from the receipt's Help menu and see which of the 4 rules it failed (not P2P, not successful, older than 90 days, case already open) and the complaint route, so that I always have a next step and am never left at a dead end.
      - I ✅ The eligibility check and its message screen can be built and tested on their own.
      - N ✅ Says what the user sees, not how the check is coded.
      - V ✅ Fixes "Tickets close with no next step."
      - E ✅ Naming the 4 rules inside the story makes it sizeable. Ops/Legal confirming the rules is a sign-off, not an unknown.
      - S ✅ One message screen with 4 variants and one link.
      - T ✅ Pass = a merchant QR payment shows "Merchant payments are refunded through the merchant" plus the complaint link.
   4. User story 4 - Scam goes to the fraud route
As a sender who was tricked into paying, I want to pick "This was a scam" and be sent to the 1930 helpline and cybercrime.gov.in instead of a return request, so that a fraud gets reported to the right place and I don't waste time asking a scammer for my money.
      - I ✅ A reason choice and one information screen; needs nothing from the other stories.
      - N ✅ Says where the user goes, not how routing works.
      - V ✅ Protects scam victims, who need the police route, not a polite request. Also stops scammers using "wrong payment" against recipients.
      - E ✅ One choice, one screen, two fixed destinations.
      - S ✅ 1–2 days.
      - T ✅ Pass = choosing "This was a scam" creates no return request and shows 1930 and cybercrime.gov.in.

2. Solution 2 - the recipient gets a one-tap "Return ₹X" button that needs their UPI PIN.
   1. User story 5 - Safe request to the recipient
As a PhonePe user who received money by mistake, I want to get an in-app prompt showing only the amount, the sender's first name and the payment date, so that I can trust it's a genuine request and not a scam.
      - I ✅ Can be built and demoed with a test case. Only the live trigger waits for Solution 1. Scoped to the in-app prompt; SMS is a later story, so it doesn't wait on the SMS gateway either.
      - N ✅ Says what the recipient sees, not how the notification is sent.
      - V ✅ Most recipients are honest but don't know a request exists; this tells them.
      - E ✅ One prompt, exactly 3 fields, PhonePe-to-PhonePe only.
      - S ✅ One notification and one screen.
      - T ✅ Pass = prompt arrives within 1 minute, shows only those 3 fields, and has no link asking for a PIN or bank details.
   2. User story 6 - Full return with UPI PIN
As a recipient who wants to give the money back, I want to tap "Return ₹X" and enter my UPI PIN to send the full amount to the sender, shown only by a masked name (e.g. "Ritika S."), so that the money goes back as easily as any normal payment without either of us seeing the other's phone number or UPI ID.
      - I ✅ Opens from the prompt in Story 5, but can be built against a test case. Uses the existing UPI payment flow.
      - N ✅ Says what the recipient does, not how the payment is processed.
      - V ✅ This is the moment the money actually comes back, which moves the North Star.
      - E ✅ A standard UPI payment, prefilled to the sender for the original amount.
      - S ✅ Full amount only; partial return is Story 7.
      - T ✅ Pass = the case shows "Returned in full" only after a successful UPI payment with a UTR, and never without a PIN.
   3. User story 7 - Partial return
As a recipient who has already spent part of the money, I want to change the amount and return what I have now, so that I can still give back something and the case stays open for the rest.
      - I ✅ Adds one editable amount to the return screen. It can be built alongside Story 6 and switched on separately.
      - N ✅ Says what the recipient can do, not how balances are stored.
      - V ✅ Without it, a recipient who spent ₹1,000 of ₹4,500 returns nothing. With it, the sender gets ₹3,500 back.
      - E ✅ One amount field, a rule (₹1 to the original amount), and one balance shown on the case.
      - S ✅ 2–3 days.
      - T ✅ Pass = returning ₹3,000 of ₹4,500 sends ₹3,000, shows "Returned in part: ₹3,000 of ₹4,500", and keeps the case open for ₹1,500.
   4. User story 8 - "This isn't a mistake"
As a recipient who believes the payment was meant for me, I want to tap "This isn't a mistake" and pick one of 3 reasons, so that I'm not pressured into paying and the case goes to bank review instead.
      - I ✅ Another button on the Story 5 prompt; buildable against a test case.
      - N ✅ Says what the recipient chooses, not how the dispute is handled.
      - V ✅ Protects honest recipients from false claims and scammers.
      - E ✅ Scoped to one status change ("Bank review") and a message to the sender. Who resolves the dispute afterwards (open question 4) sits outside this story.
      - S ✅ One button, 3 reasons, one status.
      - T ✅ Pass = after declining, the case shows "Bank review" and the sender sees "Recipient disputed" within 1 minute.

## How these were made to pass INVEST

- **Independent:** the PRD is one journey, so every story is written to be *buildable and testable alone* against a test payment or test case. Only the release order is fixed: Story 1 before 2, Story 5 before 6–8.
- **Estimable:** each open question was moved *outside* the story. Rules are named inside Story 3, and dispute resolution sits outside Story 8, so nothing unknown is left inside a story.
- **Small:** each story was cut to one screen or one action. SMS (Story 5) and partial return (Story 7) became their own items rather than being bundled in.
- **Testable:** every pass condition has a number or an exact label: 10 seconds, 1 minute, 4 rules, 3 fields, ₹3,000 of ₹4,500.

## Left for later (not in these 8)
- SMS to the recipient (AC-2.1)
- No reply in 48 hours → bank route (AC-2.6)
- One case per payment (AC-1.5)
- Offline save and resend (AC-1.7)
- Abuse limits (AC-4.1 to 4.3)

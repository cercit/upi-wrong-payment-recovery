# Competitor features: wrong-UPI payment recovery

Researched 27 Sep 2026. Sources at the bottom.

## Competitor feature table

| # | Feature | Who offers it | What it does | Stage it helps |
|---|---|---|---|---|
| 1 | Bank-registered name shown before paying | All UPI apps (NPCI rule, live 1 Jul 2025): PhonePe, GPay, Paytm, BHIM | Shows the payee's name as held by their bank; nicknames and QR names are banned | Prevention |
| 2 | Name-match check with "close match" hint | UK Confirmation of Payee (2019), EU Verification of Payee (mandatory 9 Oct 2025) | Checks the typed name against the account; suggests the right name on a near-miss | Prevention |
| 3 | "Pay Safe" payee verification | BHIM MyUPI (Sep 2026) | Checks a payee by UPI ID or QR before you pay | Prevention |
| 4 | Dispute from the transaction screen | Google Pay ("Having issues?"), Paytm (24x7 Help), PhonePe (Help) | Raise a complaint on one specific payment | Initiation |
| 5 | UDIR: complaints between banks run by API, with status tracking | NPCI rail used by UPI apps and banks | Sends complaints between app and banks automatically; status visible in-app | Tracking |
| 6 | AI chat assistant for complaints, in local languages | BHIM MyUPI (English, Hindi, Telugu, Tamil, Bengali); Paytm chat assistant | Raise and track complaints by chatting; gives a reference number | Initiation, tracking |
| 7 | One hub for complaints and mandates across all apps | NPCI UPI HELP (unveiled Oct 2025) | See and manage complaints and mandates from any UPI app in one place | Tracking |
| 8 | Bank-to-bank request for the recipient's consent | Your bank → recipient's bank | Recipient's bank asks its customer to agree to return the money | Recovery |
| 9 | Escalation path: NPCI portal, then RBI Ombudsman | NPCI Dispute Redressal Mechanism (1800-120-1740), RBI CMS | Escalates when the app or bank doesn't resolve the case | Escalation |
| 10 | In-app contest button that freezes the money | Brazil Pix: MED self-service (Oct 2025), MED 2.0 (mandatory 2 Feb 2026) | One tap freezes the funds at the receiving bank and traces where they went next | Recovery |

**The gap:** none of the sources I checked describes an Indian app with a flow built for wrong-payee mistakes. None contacts the recipient, shows who owns the case, gives deadlines and closes the loop. Every app sends you through the same general complaint path, and the recipient returning the money is still voluntary. That gap is where the PhonePe recovery idea fits.

---

## How the top 10 work

### 1. Bank-registered name before paying (all UPI apps)
- **How it works:** you enter a UPI ID or scan a QR. The app calls NPCI's Validate Address API, which returns the account holder's name as it appears in their bank's records, and shows it on the confirm screen. Since NPCI circular OC-101A (24 Apr 2025, live 1 Jul 2025), apps can't show a nickname, a name taken from a QR code or a name you typed yourself, and you can't edit the name.
- **Limit:** it only helps if you actually read the name. If you're paying a stranger, a real name tells you nothing.
- **PhonePe today:** has it, like every UPI app, so it isn't something PhonePe can compete on.

### 2. Name match with "close match" (UK CoP, EU VoP)
- **How it works:** you type the account details **and** the name you expect. Your bank asks the payee's bank whether that name matches the account, and gets an answer in under a second. The answer is match, no match or close match. On a close match (a missing middle name, or a trading name instead of a legal name), it shows the real name and asks you to confirm.
- **Why it matters:** it catches typos before the money leaves. UPI shows you a name, but it never checks it against the name you expected.
- **Lesson for PhonePe:** for a first payment to a new payee, ask "Who are you paying?" and flag a mismatch.

### 3. Pay Safe (BHIM MyUPI)
- **How it works:** in the MyUPI chat, you enter a UPI ID or scan a QR, and it verifies the payee's identity before you pay.
- **Limit:** you have to choose to check. It's an extra step, not part of the normal payment flow.

### 4. Dispute from the transaction (GPay, Paytm, PhonePe)
- **Google Pay:** open Transaction history, tap the payment, then tap "Having issues?". The dispute option only unlocks **2 days after** the payment. You may have to upload a bank statement.
- **Paytm:** go to Profile → 24x7 Help, describe the problem in chat, and it lists the matching UPI payments. You pick one, choose the issue and get a complaint reference number.
- **PhonePe:** Help → pick the transaction → raise a complaint.
- **Limit:** all three are general complaint forms. Google's own help page says a UPI payment can't be cancelled once the PIN is entered, and tells you to contact the recipient first.

### 5. UDIR, NPCI's dispute system (NPCI, 2020)
- **How it works:** before UDIR, complaints went between banks as file uploads. UDIR sends them through APIs instead, from the app to NPCI to both banks. The app can then show live status, and some apps offer chat between the user and the bank. NPCI sets deadlines by case type, from 1–3 working days for failed payments up to 10–15 for fraud.
- **Impact:** companies report resolution times about 50% faster.
- **Lesson:** PhonePe already has access to this system. A recovery tracker could show UDIR status in plain words (who has the case, what's next, deadline).

### 6. AI multilingual complaint assistant (BHIM MyUPI, Sep 2026)
- **How it works:** you chat in everyday language, in English, Hindi, Telugu, Tamil or Bengali, 24/7. The same chat raises a complaint, gives you a reference number and tracks it. It also handles mandates, can block a linked bank account if your phone is lost, and can re-run an eligible past payment (you enter your PIN again).
- **Why it matters:** this is the closest thing to Sunita's "Hindi, step by step" need.

### 7. UPI HELP, one hub across apps (NPCI, Oct 2025)
- **How it works:** an AI assistant running on NPCI's own small language model. You can raise and track complaints, and view or manage AutoPay mandates set up through **any** UPI app, all in one place.
- **Lesson:** users won't care which app made the payment. A recovery flow should work even when the wrong payment came from another app.

### 8. Bank-to-bank consent request (your bank, the recipient's bank)
- **How it works:** you give your bank the UPI reference number. Your bank writes to the recipient's bank, and that bank contacts its customer to ask them to agree to return the money. If they agree, the money comes back. Guides say this typically takes 7–15 working days.
- **Limit:** nobody can force a return without the recipient's consent. That's the core reason recovery rates are low.
- **Lesson:** this is the step users can't see. Make it visible ("recipient's bank contacted on day 2").

### 9. NPCI portal, then RBI Ombudsman
- **How it works:** if the app or bank doesn't resolve it, you file on NPCI's Dispute Redressal Mechanism page with the transaction ID, bank, amount and date, or call 1800-120-1740. Google's help page says to do this within 3 days of the payment. If your bank hasn't resolved it within 30 days, you can complain to the RBI Ombudsman at cms.rbi.org.in, under the Integrated Ombudsman Scheme 2021.
- **Limit:** the Ombudsman can push your bank to act, but can't make the recipient pay.
- **Lesson:** PhonePe could fill in these escalation forms automatically when deadlines pass, instead of leaving the user to find them.

### 10. In-app contest button that freezes the money (Brazil Pix)
- **How it works:** since Oct 2025, the bank app has a contest button. One tap sends the claim straight to the receiving bank, which **must freeze** the money in that account, even if only part is still there. Banks then have 7 days to decide. MED 2.0 (mandatory from 2 Feb 2026) also follows the money into the accounts it moved to next and freezes it at each step.
- **Limit:** it's built for fraud and scams, not for your own typo.
- **Lesson:** this is the strongest benchmark: one tap, instant freeze, a set deadline. A UPI version would need NPCI and RBI to change the rules, which is outside PhonePe's control. It's still worth citing as the long-term vision.

---

## Takeaway for the PRD
1. **Prevention is already shared by every app** (#1), so PhonePe can't win there alone. A name-match check (#2) on first payments to a new payee would be a real difference.
2. **Starting a recovery is where competitors are weakest** (#4): the button is buried, GPay makes you wait 2 days, and the forms are general. A one-tap "Recover payment" on the receipt beats all of them.
3. **Tracking** can reuse UDIR (#5) but explain it in plain language, with the owner and deadline shown (#8 made visible).
4. **Language and a human option** (#6) cover the tier-2 persona.
5. **Pix (#10) is the North Star benchmark:** instant freeze plus a 7-day deadline.

## Sources
- [NPCI OC-101A: beneficiary name display](https://www.npci.org.in/uploads/UPI_OC_No_101_A_FY_2025_26_Strengthening_beneficiary_name_verification_and_display_during_UPI_transactions_eb7bd7ed72.pdf)
- [Business Standard: UPI apps to show bank-registered names only](https://www.business-standard.com/finance/personal-finance/no-more-scams-upi-apps-to-now-show-recipients-bank-registered-names-only-125052600445_1.html)
- [Google Pay Help: cancel a wrong or incorrect transfer](https://support.google.com/pay/india/answer/15277081?hl=en)
- [Google Pay Help: raise a dispute](https://support.google.com/pay/india/answer/9777953?hl=en)
- [Paytm: recover money sent to wrong UPI ID](https://paytm.com/support/upi/recover-money-sent-to-wrong-upi-id-paytm)
- [PhonePe blog: reversing UPI payments](https://www.phonepe.com/blog/trust-and-safety/how-to-reverse-upi-payments-when-money-is-wrongly-transferred-or-is-in-pending-status/)
- [Razorpay: NPCI UDIR explained](https://razorpay.com/blog/all-you-need-to-know-about-npci-led-udir/)
- [uEngage: UDIR](https://www.uengage.io/spotlight/a-new-era-of-dispute-resolution-for-upi-transactions)
- [Business Standard: UPI HELP at GFF 2025](https://www.business-standard.com/finance/news/india-s-next-gen-upi-iot-payments-ai-help-bio-face-authentication-125100801331_1.html)
- [BusinessToday: BHIM MyUPI features](https://www.businesstoday.in/latest/economy/story/bhim-app-gets-myupi-ai-assistant-with-247-multilingual-upi-support-key-features-explained-557091-2026-09-22)
- [YourStory: MyUPI 9 services](https://yourstory.com/2026/09/bhim-myupi-9-upi-services-ai-assistant)
- [Razorpay: wrong UPI transaction guide](https://razorpay.com/learn/wrong-upi-transaction/)
- [JuriGram: wrong beneficiary bank escalation](https://jurigram.com/blog/cyber-law/wrong-beneficiary-upi-transfer-legal-remedy-and-bank-escalation)
- [Agência Brasil: Pix contest button live](https://agenciabrasil.ebc.com.br/economia/noticia/2025-10/botao-de-contestacao-do-pix-esta-disponivel-aos-usuarios)
- [InfoMoney: MED 2.0 mandatory](https://www.infomoney.com.br/minhas-financas/med-2-0-passa-a-ser-obrigatorio-em-todas-as-plataformas-que-oferecem-pix/)
- [Experian: Verification of Payee](https://www.experian.co.uk/blogs/latest-thinking/guide/verification-of-payee/)
- [SurePay: EU VoP 2025](https://www.surepay.eu/verification-of-payee-in-the-eu/)

---

## 5 more best-in-class features (global)

| # | Feature | Who offers it | What it does | Who can build it |
|---|---|---|---|---|
| 11 | Wrong-payee money returned without the recipient's consent | Australia, ePayments Code | Report within 10 business days and the bank returns the money if it's still in the recipient's account | Regulator (RBI/NPCI) |
| 12 | Banks must try to recover, and share recipient details if they fail | UK, Payment Services Regulations 2017, reg. 90 (Credit Payment Recovery) | Recovery effort is compulsory; recipient's bank must co-operate | Regulator; PhonePe can copy the process |
| 13 | "Return payment" button for the recipient | Brazil Pix (every institution) | Recipient returns full or part of the money in one tap, instantly, within 90 days | **PhonePe alone** |
| 14 | Refund within 5 days, cost split between banks | UK APP scam reimbursement (7 Oct 2024) | Scam victims refunded up to £85,000 in 5 business days; sending and receiving banks pay 50:50 | Regulator |
| 15 | Sender-side reversal window | US ACH (Nacha rules) | Sender's bank can reverse a payment to the wrong account within 5 banking days | Scheme (NPCI) |

### 11. Australia: return without consent (the strongest rule anywhere)
- **Reported within 10 business days:** if the bank agrees it was a mistake and the money is still in the recipient's account, the money **is returned**, and the recipient doesn't have to agree.
- **Reported between 10 business days and 7 months:** the money is frozen. The recipient gets 10 business days to prove it's theirs. If they don't, it goes back.
- **After 7 months:** returned only if the recipient agrees.
- **Lesson:** speed decides the outcome. It's the strongest argument for a one-tap "Recover payment" on the receipt, and a policy PhonePe could push NPCI towards.

### 12. UK: banks must try to recover (reg. 90)
- **How it works:** if you gave the wrong account details, your bank **must make reasonable efforts** to get the money back, and the recipient's bank **must co-operate** and share the information needed to collect it. Banks follow a standard process called Credit Payment Recovery, with a claim form and set steps.
- **Lesson:** recovery is an obligation with a standard process, not a favour. PhonePe can copy the structure (standard claim, fixed steps, deadline for each owner) without waiting for new rules.

### 13. Pix: "Return payment" button (recipient side)
- **How it works:** the person who received the money opens the payment and taps "Devolver pagamento" (return payment). They can edit the amount for a partial return, then tap again to confirm. The money reaches the sender instantly. It works for up to 90 days after the payment, and every Pix institution must offer the button.
- **Lesson:** most wrong-payee recipients are honest but don't know how to return money on UPI (they'd have to find the UPI ID and send it back manually). PhonePe can build this **today**: when a recovery request comes in, show the recipient a one-tap "Return ₹4,500 to Ritika" button. Of the five, this one matters most for your PRD because PhonePe fully controls it.

### 14. UK APP scam reimbursement
- **How it works:** a scam victim gets refunded up to £85,000 within 5 business days, or 35 days if the case needs investigating. The bank can deduct up to £100, but not for vulnerable customers. The sending and receiving banks share the cost 50:50.
- **Limit:** it covers scams, not your own mistakes.
- **Lesson:** the 50:50 split makes the **receiving** bank care too. It's a useful argument for why recipient banks should respond faster in UPI.

### 15. US ACH: reversal window
- **How it works:** if a payment went to the wrong account, the wrong amount or went twice, the sender's bank can send a "reversal" within **5 banking days** and must try to tell the recipient first. After 5 days that route is closed, and the only options left are negotiation or court.
- **Lesson:** a short, fixed window when fixing a mistake is easy. UPI has nothing like it. Europe's SEPA works in a similar way: a recall request within 10 banking days, though it still needs the recipient's consent.

### Where this leaves the PhonePe idea
- **Build now, PhonePe alone:** #13 (one-tap return for the recipient). Copy the structure of #12 (standard claim, owner, deadline).
- **Push for with NPCI/RBI:** #11 (return without consent if reported fast) and #15 (reversal window). These are your "Phase 3 / policy" roadmap items.
- **Metric link:** #11 and #15 both show that **time to report** drives recovery. That supports making "time from wrong payment to request raised" an L1 metric.

### Sources (11–15)
- [AFCA: mistaken internet payments](https://www.afca.org.au/about-afca/publications/mistaken-internet-payments)
- [ASIC: ePayments Code](https://www.asic.gov.au/regulatory-resources/financial-services/epayments-code)
- [Legal Services Commission SA: mistaken internet payments](https://lawhandbook.sa.gov.au/ch10s06s03s02.php)
- [UK Payment Services Regulations 2017, reg. 90](https://www.legislation.gov.uk/uksi/2017/752/regulation/90/made?view=plain)
- [Barclays: Credit Payment Recovery claim guidance](https://www.barclayscorporate.com/content/dam/barclayscorporate-com/documents/solutions/corporate-banking-solutions/cash-management-solutions/Barclays-Guidance-Notes-for-Completion-of-CPR-Claim-Forms.pdf)
- [PicPay: how to return a Pix](https://meajuda.picpay.com/hc/pt-br/articles/360051407292-Como-eu-fa%C3%A7o-para-devolver-um-Pix)
- [Cora: contesting and returning a Pix](https://www.cora.com.br/blog/como-contestar-um-pix/)
- [PSR: APP scams maximum reimbursement](https://www.psr.org.uk/publications/policy-statements/ps247-faster-payments-app-scams-reimbursement-requirement-confirming-the-maximum-level-of-reimbursement/)
- [Freshfields: APP reimbursement regime](https://www.freshfields.com/en/our-thinking/briefings/2024/09/authorised-push-payment-fraud-a-new-mandatory-reimbursement-regime-for-uk-psps)
- [Nacha: reversals and enforcement](https://www.nacha.org/rules/reversals-and-enforcement)
- [Nacha: understanding ACH reversals](https://www.nacha.org/news/second-chance-understanding-ach-reversals)
- [SEPA recall flow](https://www.paymentsdomain.com/2021/09/12/sct-recall-flow/)

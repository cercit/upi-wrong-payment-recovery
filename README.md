# Wrong UPI Payment Recovery Flow

**Live site:** https://cercit.github.io/PRD_Workshop/ · **Prototype:** https://cercit.github.io/PRD_Workshop/app/

A fintech product concept and PM portfolio case study focused on helping users recover accidentally sent UPI payments quickly, clearly, and with less friction.

## Overview
This project tackles a real consumer problem in India’s digital payments ecosystem: when a user sends money to the wrong UPI ID, there is no simple, trusted, and transparent recovery flow. The product concept creates a guided recovery journey that reduces stress, improves confidence, and increases the chance of successful recovery.

## Why this matters
Wrong UPI payments create urgency and anxiety. People are left navigating fragmented steps across recipient communication, bank coordination, NPCI processes, and support channels. The experience is confusing, and the lack of transparency makes users feel stuck.

The goal is not to guarantee reversal in every case, but to make the recovery process faster, easier to understand, and more likely to succeed.

## Product goal
- Enable faster recovery initiation
- Make recovery more transparent and trackable
- Increase recovery success rates for eligible wrong-payment cases

## Non-goals
- Guarantee reversal of every payment
- Directly reverse all transactions without recipient action
- Prevent all accidental UPI payments

## North star metric
Percentage of eligible wrong-UPI-payment cases where the user successfully recovers the transferred money through the recovery flow.

Formula:
Successfully Recovered Cases / Eligible Recovery Cases × 100

## User persona
Primary user:
- PhonePe customer
- Accidentally sent money to the wrong UPI ID
- Wants a quick recovery path with minimal friction
- Needs clarity on next steps, timing, and responsibility

## Product priorities
1. One-tap recovery request
2. Easy return flow for the recipient
3. Live recovery tracker for transparency

## Key requirements
### Functional
- Users can raise a recovery request from any UPI receipt
- Transaction details are auto-filled from the original payment
- Recipient can approve or return the payment quickly
- Both parties can see case status and next steps
- Progress is visible through a simple timeline

### Non-functional
- Recovery request sent within 10 seconds
- Status updates within 1 minute of relevant bank changes
- Works on 3G connectivity
- Under 3 taps for customer recovery action
- Secure, privacy-aware, DPDP-friendly handling
- Available in 5+ Indian languages

## Sample screens included
This repo includes a mockup set designed around the proposed user flow:

- Transaction receipt with one-tap recover CTA
- Recovery request submission flow
- Recipient easy return screen
- Live recovery tracker screen

The sample screens live under [mockups/stitch_phonepe_ui_mockups](mockups/stitch_phonepe_ui_mockups).

## Project structure
- [docs/PRD.md](docs/PRD.md): full PRD (problem, goals, metrics, persona, empathy and journey maps, RICE, requirements)
- [docs/competitor-features.md](docs/competitor-features.md): 15-feature competitor benchmark with sources
- [docs/context.md](docs/context.md): project background
- [docs/plan.md](docs/plan.md): roadmap and phases
- [docs/images](docs/images): persona poster, empathy map, journey map
- [mockups](mockups): Stitch UI mock-ups of the four core screens
- [src](src): clickable React prototype (Vite + Tailwind)
- [site](site): case-study landing page for the live site
- [.github/workflows/pages.yml](.github/workflows/pages.yml): builds and deploys the live site to GitHub Pages

## Run the prototype locally
```bash
npm install
npm run dev
```

## Disclaimer
Portfolio concept, not affiliated with or endorsed by PhonePe. Personas, quotes and data are illustrative.

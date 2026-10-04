# Hyperframes Composition Brief: Wrong UPI Payment Recovery

## Objective
Create a short launch-style brag video for the PRD_Workshop case study.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape, 1920x1080
- Duration: 23.5 seconds

## Source Material
- Project root: `Sunday_PRD_Workshop`
- Primary files read: `site/index.html`, `README.md`, `docs/PRD.md`, `src/data/mockData.ts`, `src/components/screens/TransactionReceiptScreen.tsx`
- Product name: Wrong UPI payment recovery (site brand mark "UPI Recover")
- Tagline: "Sent money to the wrong UPI ID? Get it back, step by step."
- Key UI to recreate: receipt with "Recover Payment Now", recipient "Return ₹4,500", four-step tracker
- Copy that must appear verbatim:
  - "Recover Payment Now", "Recovery Claim Registered"
  - "Recovery Request Raised", "Recipient Bank (Axis Bank) Contacted", "Automated Reversal & Credit"
  - "Get it back, step by step."

## Creative Direction
- Tone preset: polished
- Creative direction: quiet product film for a PM case study, calm after the panic
- Angle: the mistake, the maze, three taps, the answer
- Hook: "₹4,500 to the wrong UPI ID."
- Outro: "Wrong UPI payment recovery." + "Get it back, step by step."
- Avoid: generic SaaS language, abstract filler, PhonePe logos or marks

## Visual Identity
- Background #17162a, text #ffffff, accent #6b2fd6 / #8b5cf6, highlight #ffd94d, red #e5484d, green #25a55f
- Font: Inter stack

## Storyboard
See `brag-plan.md`. Scenes: Hook 0-3.0, Maze 3.0-7.5, One tap 7.5-12.0, Easy return 12.0-16.0, Live tracker 16.0-20.0, Outro 20.0-23.5.

## Audio
- Role: warm bed with sparse accents
- Music: `assets/music/bed.mp3` (happy-beats-business-moves-vol-1, 120 BPM), faded in over 0.6s and out over the last 1.2s
- Cue guidance: bundled preset. Strong cues 16.02s and 20.02s, beat grid every 0.5s from 3.02s
- Audio-reactive: subtle, bass drives background glow; data in `assets/audio-data.js`
- SFX: `click_003` (taps), `card-slide-1` (chips, steps), `impactSoft_medium_001` (hook), `bong_001` (success), `impactBell_heavy_000` (tracker payoff, outro)

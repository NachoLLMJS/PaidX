# PAIDX Profile Launchpad

A BNB Chain profile-token launchpad frontend. The presentation is a clean-room recreation of the layout language and information density of `thecardpad.xyz`, rebuilt for PAIDX with its own identity, BNB colors, original components, and no X sign-in surface.

## Run

```bash
npm install
npm run dev
```

## Current behavior

- Public X handle entry without X authentication.
- Editable token name and ticker.
- Flap / Four.Meme venue selection.
- Live token-card preview.
- User-initiated EIP-1193 wallet connection and BNB Chain switching.
- Review dialog with truthful adapter status.
- Responsive desktop sidebar and mobile bottom navigation
- Continuous profile carousel matching the reference geometry: 272 × 70 cards, 44 × 44 avatars, 12 px gaps and seamless motion
- Real public X profile avatars frozen locally under `public/profiles/`, with source provenance in `manifest.json`
- PaidX P/X monogram in `public/brand/paidx-logo.svg` plus a 1024 px PNG master.
- Empty market, launch-intent, and fee-routing states instead of fabricated protocol data.

## Safety and integration status

- No private keys are stored or requested.
- No X credentials or X login are requested.
- Wallet connection is user-initiated.
- Launching is fail-closed until a server-side venue adapter and creator-fee routing contract are configured.
- Four.Meme requires wallet-authenticated private API calls and protocol-signed creation bytes through a secure backend relay.
- Flap integration must verify current configuration and fee-recipient semantics before enabling writes.
- Profile ownership verification and an audited fee-claim mechanism are required before automatic owner payouts can be claimed.

The current frontend creates and reviews a launch intent and can continue to the official venue. It does not submit a token-creation transaction.

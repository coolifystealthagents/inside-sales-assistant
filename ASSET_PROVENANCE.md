# Asset provenance

This release uses subsidiary and parent-brand assets without altering their represented identity.

| Candidate asset | Purpose | Approved source | Verification |
| --- | --- | --- | --- |
| `public/logo.svg` | Inside Sales Assistant subsidiary logo and favicon source | Existing production repository baseline | Reused in the header, footer, metadata icons, and rasterized `app/favicon.ico`. |
| `public/images/stealth-agents-logo-black.png` | Official parent-brand logo | `https://stealthagents.com/stealth-agents-logo-black.png` on the StealthAgents-owned domain | Exact first-party bytes: SHA-256 `bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45`; dimensions 149 × 50. |
| `public/images/team-bacolod.jpg` | Official Stealth Agents Bacolod team photograph on `/contact-us` | `https://stealthagents.com/team-bacolod.jpg` on the StealthAgents-owned domain | Exact first-party bytes: SHA-256 `e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767`; dimensions 953 × 540. The photograph visibly contains Stealth Agents shirts and “CITY OF BACOLOD” / “BACOLOD” signage. |
| `public/images/stealth-agents-team.webp` | Legacy coworking photograph still used outside the contact-page scope | Existing repository baseline; **not verified as an official Stealth Agents or Bacolod team photograph** | SHA-256 `58d4a9d71f30927c0447a44ce91b818ba7a5f6ebcae495b64acaf5518161c721`; dimensions 1600 × 1067. It must not be used as evidence of Stealth Agents identity or Bacolod association. |
| `app/review-provenance.json` | Ten first-party review records | Certified first-party review set from `/workspace/hireassistantnearme-release/app/review-provenance.json`, sourced from `https://stealthagents.com/` | Review text is rendered without strengthening or adding outcome claims, and the page links to the recorded source. |

The certified portfolio paths document the controlled source used to assemble this candidate; they are not runtime dependencies.

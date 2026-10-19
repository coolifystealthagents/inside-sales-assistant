# Asset provenance

This release uses subsidiary and parent-brand assets without altering their represented identity.

| Candidate asset | Purpose | Approved source | Verification |
| --- | --- | --- | --- |
| `public/logo.svg` | Inside Sales Assistant subsidiary logo and favicon source | Existing production repository baseline | Reused in the header, footer, metadata icons, and rasterized `app/favicon.ico`. |
| `public/images/stealth-agents-logo-black.png` | Official parent-brand logo | Certified first-party portfolio asset from `/workspace/hireassistantnearme-release/public/images/stealth-agents-logo-black.png`; publicly associated with StealthAgents | Used only with the exact attribution “Powered by StealthAgents.” |
| `public/images/stealth-agents-team.webp` | Official StealthAgents Bacolod team photograph | Certified first-party portfolio asset from `/workspace/hireassistantnearme-release/public/images/stealth-agents-team.webp` | Candidate and certified source SHA-256: `58d4a9d71f30927c0447a44ce91b818ba7a5f6ebcae495b64acaf5518161c721`; dimensions 1600 × 1067. |
| `app/review-provenance.json` | Ten first-party review records | Certified first-party review set from `/workspace/hireassistantnearme-release/app/review-provenance.json`, sourced from `https://stealthagents.com/` | Review text is rendered without strengthening or adding outcome claims, and the page links to the recorded source. |

The certified portfolio paths document the controlled source used to assemble this candidate; they are not runtime dependencies.

# Asset provenance

This release uses subsidiary and parent-brand assets without altering their represented identity.

| Candidate asset | Purpose | Approved source | Verification |
| --- | --- | --- | --- |
| `public/logo.svg` | Inside Sales Assistant subsidiary logo and favicon source | Existing production repository baseline | Reused in the header, footer, metadata icons, and rasterized `app/favicon.ico`. |
| `public/images/stealth-agents-logo-black.png` | Official parent-brand logo | `https://stealthagents.com/stealth-agents-logo-black.png` on the StealthAgents-owned domain | Exact first-party bytes: SHA-256 `bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45`; dimensions 149 × 50. |
| `public/images/team-bacolod.jpg` | Official Stealth Agents Bacolod team photograph on `/contact-us` | `https://stealthagents.com/team-bacolod.jpg` on the StealthAgents-owned domain | Exact first-party bytes: SHA-256 `e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767`; dimensions 953 × 540. The photograph visibly contains Stealth Agents shirts and “CITY OF BACOLOD” / “BACOLOD” signage. |
| `public/images/stealth-agents-team.webp` | Retained legacy repository asset; no longer rendered by the reviewed public templates | Existing repository baseline; **not verified as an official Stealth Agents or Bacolod team photograph** | SHA-256 `58d4a9d71f30927c0447a44ce91b818ba7a5f6ebcae495b64acaf5518161c721`; dimensions 1600 × 1067. It is not used as identity or team evidence. |
| `app/review-provenance.json` | Ten first-party review records | Certified first-party review set from `/workspace/hireassistantnearme-release/app/review-provenance.json`, sourced from `https://stealthagents.com/` | Review text is rendered without strengthening or adding outcome claims, and the page links to the recorded source. |

## Licensed contextual photography

The following photographs are from Pexels pages marked “Free to use.” Source files were downloaded as 2400 × 1600 WebP derivatives using Pexels' image delivery endpoint. They are used as contextual illustrations, never as evidence of a customer, result, conversion rate, dashboard, or Stealth Agents employee identity. Crop positions and alt text are defined in `lib/site-imagery.ts`.

| Local asset | Rendered context | Pexels source / photographer |
| --- | --- | --- |
| `public/images/inside-sales/team-crm-review.webp` | Services overview / collaborative record review | [Using laptop in a business meeting](https://www.pexels.com/photo/using-laptop-in-a-business-meeting-7693683/) — Yan Krukau |
| `public/images/inside-sales/prospect-research.webp` | Prospect research / source-document review | [Businessman looking through documents](https://www.pexels.com/photo/businessman-looking-through-documents-7679128/) — Mikhail Nilov |
| `public/images/inside-sales/crm-workflow.webp` | CRM workflow / record reconciliation | [Person analyzing business reports](https://www.pexels.com/photo/person-analyzing-business-reports-and-working-on-laptop-6801643/) — Anna Nekrashevich |
| `public/images/inside-sales/remote-meeting.webp` | Homepage and meeting coordination / remote collaboration | [Video call in close-up](https://www.pexels.com/photo/video-call-in-close-up-12911769/) — Mizuno K |
| `public/images/inside-sales/follow-up-call.webp` | Blog and sales follow-up / phone outreach | [Businessman on smartphone in office](https://www.pexels.com/photo/businessman-talking-on-smartphone-in-office-7644075/) — MART PRODUCTION |
| `public/images/inside-sales/pipeline-review.webp` | Research and pipeline reporting / report review | [Businessman analyzing documents at desk](https://www.pexels.com/photo/businessman-analyzing-documents-at-desk-10376258/) — Mikhail Nilov |
| `public/images/inside-sales/sales-enablement.webp` | Sales enablement / document presentation | [Businesswoman sharing information from documents](https://www.pexels.com/photo/confident-businesswoman-sharing-information-from-documents-in-workplace-3757946/) — Andrea Piacquadio |
| `public/images/inside-sales/collaboration.webp` | Managed support / laptop collaboration | [Colleagues discussing project at office table](https://www.pexels.com/photo/colleagues-discussing-project-at-office-table-8117473/) — cottonbro studio |

The certified portfolio paths document the controlled source used to assemble this candidate; they are not runtime dependencies.

# OnceHub deployment contract

The booking completion redirect is configured in the external OnceHub account, not simulated by this application.

Required completion redirect:

`https://insidesalesassistant.com/thanks-whats-next`

Before deployment, the release owner must confirm this exact redirect in the OnceHub event or booking page configuration. The application provides the branded, nonindexable destination route. Source side booking completion must not be inferred from loading the scheduler.

## Lead acceptance ownership

`POST /api/submit-lead` is the server-owned acceptance gate. It validates the fixed first-party origin, multipart media type, declared and actual body size, request rate, honeypot, required contact fields, and business-email policy. It then waits for ACR to acknowledge a `lead_acceptance` record. Only that acknowledgement returns `{ ok: true, acceptanceId }` and permits client navigation.

After the acceptance receipt, the centrally hosted browser tracker remains the sole owner of the standard `trackLead` event. The client includes the server `acceptanceId` so analytics and acceptance records can be reconciled without treating browser delivery as the acceptance guarantee. ACR failures return a retryable error and never advance the visitor to `/thank-you`.

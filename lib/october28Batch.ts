import type { BlogPost, ResearchPost } from './types';

export const october28BlogBatch: readonly BlogPost[] = [
  {
    "slug": "insidesalesassistant-inbound-routing-sla-oct28",
    "title": "Inbound Lead Routing Against a Response SLA",
    "description": "A routing desk that measures arrival, enrichment, assignment, and first attempt without hiding queue time.",
    "category": "Lead operations",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-inbound-routing-sla-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Inbound Lead Routing Against a Response SLA is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the first attempt looks fast while the lead sat unassigned in a stale round-robin queue. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the routing event log. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the first attempt looks fast while the lead sat unassigned in a stale round-robin queue. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A demo request arrives at 9:02 and is assigned at 9:31. The log shows enrichment completed at 9:06 and the assignment delay was a stale roster. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns inbound routing SLA. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track assignment lag by source, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-round-robin-fairness-oct28",
    "title": "Round-Robin Fairness Audit",
    "description": "An audit that checks whether round-robin assignments match capacity, territory, and account ownership.",
    "category": "Territory design",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-round-robin-fairness-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Round-Robin Fairness Audit is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the same reps receive the best leads because the roster order never rotates across shifts. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the assignment history and roster. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the same reps receive the best leads because the roster order never rotates across shifts. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A roster lists six reps but only three were active during the weekend. The audit should show the effective roster, not the configured list. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns round-robin fairness. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track assignment spread and ownership overrides, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-enrichment-confidence-oct28",
    "title": "Lead Enrichment Confidence Before Assignment",
    "description": "A confidence rule that labels enriched fields by source and keeps uncertain values out of routing decisions.",
    "category": "Data quality",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-enrichment-confidence-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Lead Enrichment Confidence Before Assignment is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because a guessed employee count changes the segment and sends the lead to the wrong sequence. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the enrichment record and source. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: a guessed employee count changes the segment and sends the lead to the wrong sequence. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A company website lists two offices. The record should preserve the source and mark the employee range as estimated, not verified. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns lead enrichment confidence. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track field confidence and correction rate, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-sdr-ae-handoff-oct28",
    "title": "SDR to AE Handoff Acceptance",
    "description": "A handoff record that carries the qualification evidence and requires the AE to accept or return the lead.",
    "category": "Handoff",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-sdr-ae-handoff-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "SDR to AE Handoff Acceptance is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the lead is marked qualified but the AE cannot see the problem, budget, or timeline behind the score. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the handoff note and acceptance. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the lead is marked qualified but the AE cannot see the problem, budget, or timeline behind the score. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "The SDR logs the use case and the next step. The AE accepts within the stated window or returns it with one specific missing item. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns SDR to AE handoff. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track acceptance rate and return reasons, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-followup-cadence-ownership-oct28",
    "title": "Follow-Up Cadence Ownership",
    "description": "A cadence control that names the owner, the channel, the next date, and the stop condition for each lead.",
    "category": "Sequences",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-followup-cadence-ownership-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Follow-Up Cadence Ownership is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because two reps follow up on the same lead while a third lead receives no touch. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the sequence record and next action. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: two reps follow up on the same lead while a third lead receives no touch. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A lead replies to an automated email. The cadence should stop the automation and assign a human owner with a dated next step. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns follow-up cadence ownership. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track cadence stops and duplicate touches, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-disqualified-reason-codes-oct28",
    "title": "Disqualified Lead Reason Codes",
    "description": "A reason-code set that separates fit, timing, authority, budget, and data quality so the team can act on the pattern.",
    "category": "Qualification",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-disqualified-reason-codes-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Disqualified Lead Reason Codes is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because every lost lead is marked not a fit and the team cannot tell a pricing problem from a bad list. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the disqualification record. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: every lost lead is marked not a fit and the team cannot tell a pricing problem from a bad list. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A lead has the right title but no budget. The reason code should preserve both facts instead of collapsing them into one label. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns disqualified lead reason codes. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track reason mix and rework, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-meeting-no-show-recovery-oct28",
    "title": "Meeting No-Show Recovery",
    "description": "A recovery sequence that distinguishes a reschedule request, a wrong contact, and a lost interest signal.",
    "category": "Meetings",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-meeting-no-show-recovery-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Meeting No-Show Recovery is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the rep sends the same reschedule link three times and never asks whether the meeting was booked with the right person. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the meeting record and follow-up. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the rep sends the same reschedule link three times and never asks whether the meeting was booked with the right person. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A prospect misses a demo because the calendar invite went to a shared inbox. The recovery should confirm the attendee and the new time. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns meeting no-show recovery. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track no-show recovery and reschedules, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-outbound-reply-triage-oct28",
    "title": "Outbound Reply Triage",
    "description": "A triage routine that separates positive replies, referrals, objections, opt-outs, and wrong-person responses.",
    "category": "Outbound",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-outbound-reply-triage-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Outbound Reply Triage is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because an opt-out is treated as a warm lead and the prospect receives another sequence. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the reply record and routing rule. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: an opt-out is treated as a warm lead and the prospect receives another sequence. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A reply says stop and refers a colleague. The triage should honor the opt-out and route the referral separately. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns outbound reply triage. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track reply categories and opt-out compliance, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-crm-activity-quality-oct28",
    "title": "CRM Activity Data Quality",
    "description": "A weekly check for missing activities, duplicate logs, stale next steps, and stage changes without evidence.",
    "category": "CRM operations",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-crm-activity-quality-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "CRM Activity Data Quality is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because a stage advances with no meeting or note, so the forecast includes work that never happened. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the activity report and opportunity record. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: a stage advances with no meeting or note, so the forecast includes work that never happened. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "An opportunity moves to proposal without a sent document. The review should flag the stage change and the missing evidence. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns CRM activity quality. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track missing activities and stage evidence, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-territory-reassignment-oct28",
    "title": "Territory Reassignment Without Losing Context",
    "description": "A reassignment record that carries account history, open tasks, and the new owner's acceptance.",
    "category": "Territory design",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-territory-reassignment-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Territory Reassignment Without Losing Context is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the account moves to a new rep and the open next step disappears with the old owner. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the account transfer log. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the account moves to a new rep and the open next step disappears with the old owner. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A rep leaves and 40 accounts move to a new territory. The transfer should preserve the last touch, the open task, and the buyer's stated priority. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns territory reassignment. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track transfers accepted and task carryover, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-sales-play-adoption-oct28",
    "title": "Sales Play Adoption Review",
    "description": "An adoption review that checks whether the play was used in the right stage and whether it changed the next step.",
    "category": "Enablement",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-sales-play-adoption-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Sales Play Adoption Review is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the team counts downloads and calls the play adopted even when no seller used it in a live deal. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the play usage record and opportunity. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the team counts downloads and calls the play adopted even when no seller used it in a live deal. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A discovery play is attached to three late-stage deals. The review should ask whether the questions changed the qualification, not only whether the file was opened. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns sales play adoption. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track play usage by stage, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  },
  {
    "slug": "insidesalesassistant-pipeline-stage-exit-oct28",
    "title": "Pipeline Stage Exit Criteria",
    "description": "An exit-criteria check that names the evidence required before an opportunity moves to the next stage.",
    "category": "Pipeline",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-pipeline-stage-exit-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Pipeline Stage Exit Criteria is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the lead moved.",
          "The control matters because the stage changes because the rep is optimistic and the next team plans work that has no buyer commitment. A record can look complete while the evidence for the next action sits in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the stage evidence and approval. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The assistant prepares and routes the record. The sales lead keeps the decisions that change an assignment, a stage, a discount, or a customer commitment."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the stage changes because the rep is optimistic and the next team plans work that has no buyer commitment. It becomes expensive when the next owner cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked sales example",
        "paragraphs": [
          "A deal moves to negotiation without a mutual action plan. The exit check should require the plan and the buyer contact who accepted it. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns pipeline stage exit. If they cannot explain the next action from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary lead, one exception, and one recently corrected record. Track stage exits with evidence, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the required field, or the source map before coaching the same rep again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One sales lead approves the rule and exceptions; the assistant prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever routing, territory, or a sequence changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/inside-sales-support",
    "internalSibling": "/services/lead-generation",
    "source": {
      "label": "HubSpot Knowledge Base",
      "url": "https://knowledge.hubspot.com/"
    }
  }
];

export const october28ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "insidesalesassistant-lead-response-qualification-oct28-study",
    "title": "Lead Response Time and Qualification Quality",
    "summary": "Does a faster first attempt predict a better-qualified lead, or does it hide rushed routing?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-lead-response-qualification-oct28-study.jpg",
    "finding": "A fast response with a high return rate is a routing problem, not a performance win.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Does a faster first attempt predict a better-qualified lead, or does it hide rushed routing?",
          "The scope is the sales record and the events the team can observe in a defined window. It does not estimate an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Inbound leads in a defined quarter, grouped by source, assignment path, and first-attempt time.",
          "The unit is one lead, handoff, cadence, or opportunity event. Linked events are recorded separately so a correction is not counted as an independent success."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "First-attempt time, qualification acceptance, return rate, and the share of leads with a documented next step.",
          "Define the window and evidence standard before the sample begins. A count without its denominator and source is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Fast attempts often follow a stale roster or a rep who claims the lead without checking ownership.",
          "A failure needs a reason code, a next owner, and a recheck date. Silence is not a disposition."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A fast response with a high return rate is a routing problem, not a performance win.",
          "The numbers are illustrative. The value is the stage split, which shows whether the delay belongs to intake, routing, the receiving owner, or the follow-up."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Samples may exclude untracked calls, offline notes, or leads that never reached the CRM.",
          "Record the sample frame, extraction time, and fields that were unavailable so a later reviewer can see what the study could not observe."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time: the routing rule, the required field, the owner, or the review cadence. Recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "HubSpot Knowledge Base",
        "url": "https://knowledge.hubspot.com/"
      },
      {
        "label": "Salesforce Trailhead",
        "url": "https://trailhead.salesforce.com/"
      },
      {
        "label": "Federal Trade Commission - CAN-SPAM",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "Google Workspace email best practices",
        "url": "https://support.google.com/a/answer/81126"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/"
      },
      {
        "label": "U.S. Chamber of Commerce",
        "url": "https://www.uschamber.com/co"
      }
    ]
  },
  {
    "slug": "insidesalesassistant-routing-pause-reasons-oct28-study",
    "title": "Routing Pause Reasons",
    "summary": "Which waits count against the response SLA, and how much time is lost to each pause?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-routing-pause-reasons-oct28-study.jpg",
    "finding": "Report the pause categories and the age of unresolved items, not only the average.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Which waits count against the response SLA, and how much time is lost to each pause?",
          "The scope is the sales record and the events the team can observe in a defined window. It does not estimate an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Leads with a routing event in a defined month, sampled across source and shift.",
          "The unit is one lead, handoff, cadence, or opportunity event. Linked events are recorded separately so a correction is not counted as an independent success."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Arrival-to-assignment time, enrichment pause, roster pause, ownership hold, and unclassified wait.",
          "Define the window and evidence standard before the sample begins. A count without its denominator and source is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Unclassified waits usually dominate. They are the queue time no one has named.",
          "A failure needs a reason code, a next owner, and a recheck date. Silence is not a disposition."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "Report the pause categories and the age of unresolved items, not only the average.",
          "The numbers are illustrative. The value is the stage split, which shows whether the delay belongs to intake, routing, the receiving owner, or the follow-up."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Samples may exclude untracked calls, offline notes, or leads that never reached the CRM.",
          "Record the sample frame, extraction time, and fields that were unavailable so a later reviewer can see what the study could not observe."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time: the routing rule, the required field, the owner, or the review cadence. Recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "HubSpot Knowledge Base",
        "url": "https://knowledge.hubspot.com/"
      },
      {
        "label": "Salesforce Trailhead",
        "url": "https://trailhead.salesforce.com/"
      },
      {
        "label": "Federal Trade Commission - CAN-SPAM",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "Google Workspace email best practices",
        "url": "https://support.google.com/a/answer/81126"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/"
      },
      {
        "label": "U.S. Chamber of Commerce",
        "url": "https://www.uschamber.com/co"
      }
    ]
  },
  {
    "slug": "insidesalesassistant-enrichment-field-errors-oct28-study",
    "title": "Enrichment Field Errors",
    "summary": "Which enriched fields are most likely to change a routing decision incorrectly?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-enrichment-field-errors-oct28-study.jpg",
    "finding": "A field without a source and observation date is not verified. Mark it estimated or leave it blank.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Which enriched fields are most likely to change a routing decision incorrectly?",
          "The scope is the sales record and the events the team can observe in a defined window. It does not estimate an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Leads enriched in a defined quarter, sampled by source and field.",
          "The unit is one lead, handoff, cadence, or opportunity event. Linked events are recorded separately so a correction is not counted as an independent success."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Field error rate, source confidence, correction time, and routing changes caused by the error.",
          "Define the window and evidence standard before the sample begins. A count without its denominator and source is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Employee count, industry, and title are the fields most likely to move a lead into the wrong segment.",
          "A failure needs a reason code, a next owner, and a recheck date. Silence is not a disposition."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A field without a source and observation date is not verified. Mark it estimated or leave it blank.",
          "The numbers are illustrative. The value is the stage split, which shows whether the delay belongs to intake, routing, the receiving owner, or the follow-up."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Samples may exclude untracked calls, offline notes, or leads that never reached the CRM.",
          "Record the sample frame, extraction time, and fields that were unavailable so a later reviewer can see what the study could not observe."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time: the routing rule, the required field, the owner, or the review cadence. Recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "HubSpot Knowledge Base",
        "url": "https://knowledge.hubspot.com/"
      },
      {
        "label": "Salesforce Trailhead",
        "url": "https://trailhead.salesforce.com/"
      },
      {
        "label": "Federal Trade Commission - CAN-SPAM",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "Google Workspace email best practices",
        "url": "https://support.google.com/a/answer/81126"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/"
      },
      {
        "label": "U.S. Chamber of Commerce",
        "url": "https://www.uschamber.com/co"
      }
    ]
  },
  {
    "slug": "insidesalesassistant-cadence-completion-oct28-study",
    "title": "Follow-Up Cadence Completion",
    "summary": "How often does a lead receive the planned touches, and where does the cadence stop?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-cadence-completion-oct28-study.jpg",
    "finding": "A completed cadence is not the same as a completed follow-up. Check the next step and the buyer response.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How often does a lead receive the planned touches, and where does the cadence stop?",
          "The scope is the sales record and the events the team can observe in a defined window. It does not estimate an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Leads enrolled in a cadence during a defined month, sampled by owner and channel.",
          "The unit is one lead, handoff, cadence, or opportunity event. Linked events are recorded separately so a correction is not counted as an independent success."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Touch completion, stop reasons, duplicate touches, and the share with no dated next step.",
          "Define the window and evidence standard before the sample begins. A count without its denominator and source is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Cadences stop at ownership changes, replies that are not logged, and sequences that are not paused after a meeting.",
          "A failure needs a reason code, a next owner, and a recheck date. Silence is not a disposition."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A completed cadence is not the same as a completed follow-up. Check the next step and the buyer response.",
          "The numbers are illustrative. The value is the stage split, which shows whether the delay belongs to intake, routing, the receiving owner, or the follow-up."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Samples may exclude untracked calls, offline notes, or leads that never reached the CRM.",
          "Record the sample frame, extraction time, and fields that were unavailable so a later reviewer can see what the study could not observe."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time: the routing rule, the required field, the owner, or the review cadence. Recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "HubSpot Knowledge Base",
        "url": "https://knowledge.hubspot.com/"
      },
      {
        "label": "Salesforce Trailhead",
        "url": "https://trailhead.salesforce.com/"
      },
      {
        "label": "Federal Trade Commission - CAN-SPAM",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "Google Workspace email best practices",
        "url": "https://support.google.com/a/answer/81126"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/"
      },
      {
        "label": "U.S. Chamber of Commerce",
        "url": "https://www.uschamber.com/co"
      }
    ]
  },
  {
    "slug": "insidesalesassistant-handoff-acceptance-lag-oct28-study",
    "title": "SDR to AE Handoff Acceptance Lag",
    "summary": "How long does an AE take to accept or return a qualified lead, and what predicts the delay?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/insidesalesassistant-handoff-acceptance-lag-oct28-study.jpg",
    "finding": "A handoff is not complete until the receiving owner accepts it. Measure acceptance, not only the send.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How long does an AE take to accept or return a qualified lead, and what predicts the delay?",
          "The scope is the sales record and the events the team can observe in a defined window. It does not estimate an industry rate or a causal effect."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Handoffs created in a defined quarter, sampled by segment and AE.",
          "The unit is one lead, handoff, cadence, or opportunity event. Linked events are recorded separately so a correction is not counted as an independent success."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Acceptance time, return rate, missing evidence, and the share that received no first touch after acceptance.",
          "Define the window and evidence standard before the sample begins. A count without its denominator and source is not a measure."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Delays cluster when the handoff lacks a problem statement or when the AE is not named in the routing rule.",
          "A failure needs a reason code, a next owner, and a recheck date. Silence is not a disposition."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A handoff is not complete until the receiving owner accepts it. Measure acceptance, not only the send.",
          "The numbers are illustrative. The value is the stage split, which shows whether the delay belongs to intake, routing, the receiving owner, or the follow-up."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Samples may exclude untracked calls, offline notes, or leads that never reached the CRM.",
          "Record the sample frame, extraction time, and fields that were unavailable so a later reviewer can see what the study could not observe."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time: the routing rule, the required field, the owner, or the review cadence. Recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "HubSpot Knowledge Base",
        "url": "https://knowledge.hubspot.com/"
      },
      {
        "label": "Salesforce Trailhead",
        "url": "https://trailhead.salesforce.com/"
      },
      {
        "label": "Federal Trade Commission - CAN-SPAM",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "Google Workspace email best practices",
        "url": "https://support.google.com/a/answer/81126"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/"
      },
      {
        "label": "U.S. Department of Labor",
        "url": "https://www.dol.gov/"
      },
      {
        "label": "U.S. Chamber of Commerce",
        "url": "https://www.uschamber.com/co"
      }
    ]
  }
];

import type { ResearchPost } from './types';

export const november10ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-often-do-reassigned-leads-sit-uncontacted-after-a-seller-absence",
    "title": "How often do reassigned leads sit uncontacted after a seller absence?",
    "summary": "A measurement protocol for coverage gaps, using the leave start as the clock and the first logged attempt as the endpoint.",
    "cluster": "Coverage",
    "publishedAt": "2026-11-10",
    "finding": "Coverage delay is only comparable across teams when the clock starts at the leave date rather than the CRM owner change and the endpoint is a logged buyer attempt rather than an internal note.",
    "thumbnail": "/thumbnails/november-10/how-often-do-reassigned-leads-sit-uncontacted-after-a-seller-absence.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how often a lead sits without a buyer contact after its owner goes on leave. The unit is the lead that was open at the start of the absence and reassigned for coverage. The question matters because a change of owner in the CRM can look complete while the buyer hears nothing. The protocol measures the buyer-facing gap, not the administrative record.",
          "The scope covers planned absences of at least three business days in a business-to-business sales desk. It excludes departures, terminations, and medical leaves that begin without notice. Those events have different constraints and should be measured separately. The output is a delay rate by lead stage and by coverage owner."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from leads that had an open next step on the day before the leave began. A lead with no next step is a pipeline hygiene problem, not a coverage problem. Record the stage, the last buyer contact, and the promised date. Those fields define whether the lead was waiting on the seller or on the buyer.",
          "Exclude leads where the buyer had clearly asked not to be contacted before a future date. A scheduled pause is not a coverage failure. Keep a list of exclusions and the reason for each. The list should be short enough for a reviewer to check by hand."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define the start as the first business day of the absence. Do not use the date the CRM owner changed, because that often happens a day or two later. Define the endpoint as the first logged call, personal email, or message to the buyer by the covering owner. A note that says will call next week is not an attempt.",
          "Define a coverage gap as more than one full business day between the start and the first attempt. Report both the share of leads with any gap and the median gap in business hours. The share shows how widespread the problem is, and the median shows how long a typical buyer waits. Report the count behind every rate."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the CRM owner history for the reassignment timestamp. Use the dialer and email log for the first buyer attempt. Join on the lead identifier rather than the buyer name, because names can repeat or change. Export the raw event times so the calculation does not depend on a summary field.",
          "Capture the coverage brief and the queue priority list if they exist. These documents show whether the covering seller had guidance. A gap that occurs despite a clear priority list points to capacity or access. A gap with no brief points to a handoff design problem. Keep the documents with the dataset for context."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the period has fewer than three hundred affected leads, measure all of them. For a larger set, take a random sample within each stage and week. Stratify by coverage owner so one overloaded person does not dominate the result. Record the selection method and the random seed.",
          "Have two reviewers classify twenty leads independently. Compare the first-attempt time and the exclusion decisions. Discuss every disagreement against the written definitions. If agreement is low, the definition of a buyer attempt is too broad. Revise the examples and check a second batch."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the gap rate by stage and by coverage owner. Early-stage leads may tolerate a day, while a late-stage buyer with a scheduled decision may not. A single overall rate hides that difference. Show the stage breakdown alongside the total.",
          "Report the oldest lead in the sample and the reason for its delay. One extreme case often explains a systemic issue, such as a missing login or an unclear owner. Pair the case with the aggregate so the reader sees both the pattern and the mechanism. Avoid naming the buyer in the summary."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "A buyer attempt does not guarantee that the buyer responded. The measure stops at the seller's action, so it cannot show whether the coverage actually advanced the deal. Treat the result as a responsiveness measure, not an outcome measure. A short gap is better than a long one, but it is not proof of quality.",
          "The leave may coincide with a campaign, a holiday, or a product change that affects volume. Note those events beside the result. A gap rate that rises during a known surge may reflect capacity rather than handoff design. Compare only periods with similar volume and stage mix."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "The dataset contains buyer contact details and message history. Keep exports in the approved storage and limit access to the sales operations lead and the analyst. Report aggregate rates and coded examples rather than names. Check the retention policy before keeping raw records.",
          "Remove free-text notes unless a reviewer needs them to classify an attempt. Free text can contain personal details that are irrelevant to the measure. Keep the method, the coded dataset, and the aggregate result after the review. Record the deletion date beside the summary."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Choose one fix based on the pattern. If gaps cluster at the start of the leave, require a same-morning queue review. If they cluster with one coverage owner, examine access and workload. If they cluster in late-stage leads, add a named backup for each active opportunity before the leave begins.",
          "Set a target for the next leave and measure the same way. A target such as no more than one business day for late-stage leads is concrete and testable. Review the result with the covering sellers, because their experience explains the numbers. Repeat the protocol only when the queue or the coverage model changes."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, sales occupations",
        "url": "https://www.bls.gov/ooh/sales/home.htm"
      },
      {
        "label": "U.S. Department of Labor, work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "internalService": "/services/sales-follow-up",
    "internalSibling": "/blog/write-an-out-of-office-coverage-brief-for-a-sales-desk"
  },
  {
    "slug": "what-share-of-expansion-signals-from-support-reach-the-sales-pipeline",
    "title": "What share of expansion signals from support reach the sales pipeline?",
    "summary": "A consent-based measurement design for tracking whether support-observed expansion needs become a sales conversation.",
    "cluster": "Handoffs",
    "publishedAt": "2026-11-10",
    "finding": "The useful rate is consented signals that reach a named account owner and produce a logged conversation, not the raw count of support comments that mention growth.",
    "thumbnail": "/thumbnails/november-10/what-share-of-expansion-signals-from-support-reach-the-sales-pipeline.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks what share of support-observed expansion signals reach the sales pipeline. The unit is a signal raised during a support conversation about a stated need for more seats, another module, or a new location. The question matters because support often hears the need before sales does. A route that loses most signals is invisible without a denominator.",
          "The scope covers inbound support tickets from existing business customers over one quarter. It excludes complaints, billing disputes, and comments about competitors. Those may be important, but they are not expansion signals. The output is a funnel from observation to consent to conversation."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from support tickets that contain a qualifying signal. Use the ticket as the starting unit and the customer account as the linking key. A customer may raise two signals in one quarter, so deduplicate by account and topic. Record the ticket date and the support agent.",
          "Exclude signals raised by the account team during a support call. Those are sales activity, not support-sourced signals. Exclude also any signal where the customer asked for no follow-up. The exclusion list should be visible in the report so the denominator is reproducible."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a qualifying signal as a customer statement of a future need, not a hypothetical question. A customer asking whether a feature exists is curiosity; a customer saying the new team will need access next month is a signal. Record the exact phrase and the agent's interpretation separately. A short example from a recent ticket helps the agent recognize the boundary in the moment.",
          "Define consent as the customer agreeing that the account team may follow up. Define reached as a logged conversation between the account owner and the customer within ten business days. The funnel has three rates: signal to consent, consent to contact, and contact to conversation. Report each rate with its count."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the support ticket system for the signal and the consent status. Use the CRM for the account owner and the logged conversation. Match on the account identifier, not on the customer name. A mismatch between systems should be recorded as a data issue rather than silently dropped.",
          "Capture the handoff record if the team uses one. A missing record can explain a lost signal as much as a missing follow-up. Note the ticket tag or category that support used. That tag lets you compare signals that were formally routed with those that were only mentioned in notes."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the quarter has more than five hundred tickets with a potential signal, sample by week and support agent. Do not sample only the tickets that were routed, because that would hide the unreported ones. Include a short review of tickets without a signal to estimate false negatives. A simple count of unreported signals is enough to show whether the route is missing most of the work.",
          "Have two reviewers read thirty tickets and independently mark the signal and consent status. Resolve disagreements against the written definitions. A disagreement about whether a question was a signal usually means the definition needs a sharper example. Report the agreement rate beside the result."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the funnel as counts and rates, not as a single conversion number. A low consent rate points to how the agent asked, while a low contact rate points to the account owner. The two problems need different fixes. Separating them prevents a training program from being applied to a follow-through failure.",
          "Break the result down by support team and by account segment. A team with strong consent but weak contact may be handing off to an overloaded owner. A segment with low consent may need a different script. Show the number of accounts in each group so a small group does not dominate the conclusion."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "A logged conversation is not the same as a qualified opportunity. The measure stops at the conversation because later stages depend on budget and timing. Treat the result as a routing quality measure, not a revenue forecast. A high conversation rate can still produce few deals.",
          "Support agents may change how they record signals during the quarter, especially after training. Note the training date and compare the periods separately. A rise after training may reflect better recording rather than more customer need. Keep the definitions stable across the comparison."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Support tickets can contain sensitive operational detail and personal information. Limit the export to the fields needed for the measure and remove attachments. Store the dataset in the approved location and restrict access to the analyst and the support lead. Do not include ticket text in a widely shared report.",
          "Use coded examples in the summary and keep the raw text only for the review period. Check the retention rule before keeping the export. Record what was deleted and when. The customer should never appear in a training slide without consent."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Choose one stage for the first improvement. If consent is the gap, rewrite the agent script and test it with a small group. If contact is the gap, set a named owner and a response window for every consented signal. If conversation is the gap, review the first message the account owner sends.",
          "Set a baseline and a target for the next quarter. A target such as half of consented signals reaching a logged conversation is a starting point, not a universal standard. Review the result with support agents and account owners together. The route works only when both sides trust it."
        ]
      }
    ],
    "sources": [
      {
        "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "U.S. Small Business Administration, provide excellent customer service",
        "url": "https://www.sba.gov/business-guide/manage-your-business/provide-excellent-customer-service"
      },
      {
        "label": "U.S. Census Bureau, Statistics of U.S. Businesses",
        "url": "https://www.census.gov/programs-surveys/susb.html"
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/route-expansion-conversations-from-support-to-sales"
  },
  {
    "slug": "how-stale-are-firmographic-fields-in-a-typical-sales-crm",
    "title": "How stale are firmographic fields in a typical sales CRM?",
    "summary": "A field-level staleness audit that measures age against the decision each field is supposed to support.",
    "cluster": "Data quality",
    "publishedAt": "2026-11-10",
    "finding": "Staleness should be measured per field and per decision, because a stable industry code and a fast-changing headcount range do not deserve the same refresh interval.",
    "thumbnail": "/thumbnails/november-10/how-stale-are-firmographic-fields-in-a-typical-sales-crm.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how stale the firmographic fields in a sales CRM are at the moment a seller uses them. The unit is the account field, not the account. A single record can have a fresh website and a three-year-old employee range. The question matters because sellers personalize messages with whatever the record shows.",
          "The scope covers active accounts that had at least one seller touch in the last quarter. Dormant accounts are excluded because their fields are not being used for decisions. The output is a staleness distribution by field and by account segment. The protocol does not attempt to prove that stale data caused a lost deal."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Start with the accounts that appear in seller activity during the quarter. Include accounts with an open opportunity, a meeting, or an outbound touch. Exclude test records and internal accounts. Record the account segment and the owner at the time of the export.",
          "For each account, list the fields the team uses for segmentation or personalization. Keep the list fixed before looking at the data. A field added after the results are visible can make the audit look better or worse. Version the list with the report."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define field age as the time between the last verified update and the date of use. A bulk import is not a verification unless the source was checked. Use the source date in the change log rather than the record update timestamp. A field overwritten by an automated sync may look fresh while carrying old data.",
          "Define stale as age beyond the interval set for that field. Website and headcount might be stale after six months, while industry and country might be stale after two years. The interval should reflect how often the field changes in reality. Report both the age distribution and the share beyond the interval."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the CRM field history for the last verified change. Use the refresh log for the source and the reviewer. If the history is incomplete, mark the field as unmeasured rather than guessing. A missing history is itself a finding about data governance.",
          "Capture a snapshot of the current value for each field so the audit can be repeated. Snapshot the account segment and owner as well. Store the export with the field list and the staleness intervals. A later reviewer should be able to reproduce the same rate from the same files."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the active account list is small, measure all of it. For a larger list, sample within segment and owner. Include a minimum number of accounts per owner so one large book does not dominate. Record the sampling method and the seed.",
          "Have two reviewers check twenty accounts against the source of truth. Compare the field values and the source dates. Disagreements usually come from a source that changed after the refresh. Resolve them with a dated snapshot and update the definition if needed."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the median age and the share stale for each field. Do not combine fields into one freshness score, because the score hides which field is failing. Show the count of accounts with an unknown source date separately. Unknown is not the same as fresh.",
          "Break the result down by segment and by owner. A segment with many new accounts may look stale because onboarding has not finished. An owner with a large stale share may need support rather than blame. Pair the rate with a short explanation of the likely cause."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "A recent update can still be wrong. The audit measures age, not accuracy, so a field refreshed from a poor source may look healthy. Pair the staleness result with a small accuracy check on a sample. The two measures answer different questions.",
          "The decision to call a field stale depends on the interval the team chose. A different interval would produce a different rate. Report the interval beside the result and avoid comparing reports that used different rules. Consistency matters more than the exact threshold."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Firmographic data is usually less sensitive than contact data, but the account list can still reveal customers and pipeline. Keep the export in the approved storage and limit access. Report aggregate rates by segment rather than a list of named accounts. Store the account list separately from the summary so the two can have different retention periods.",
          "Remove personal contact fields that are not needed for the audit. If a reviewer needs a sample, use account identifiers rather than buyer names. Delete the raw export when the summary is approved and keep the method and aggregate result. Record the deletion date."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Choose the field with the highest stale share among the fields that affect a message or a segment. Fix that field first and measure again next quarter. A broad cleanup that touches every field rarely finishes. A narrow refresh with an owner is more likely to hold.",
          "Set a refresh interval for each field and put it in the operating calendar. Assign one owner for the field list and one reviewer per account segment. Review the intervals once a year, because a field that mattered last year may no longer drive a decision. A named owner for each interval prevents the calendar from becoming a wish list."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Census Bureau, Statistics of U.S. Businesses",
        "url": "https://www.census.gov/programs-surveys/susb.html"
      },
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/set-a-quarterly-account-data-refresh-for-the-sales-desk"
  },
  {
    "slug": "can-lost-deal-reviews-be-traced-to-a-specific-playbook-change",
    "title": "Can lost-deal reviews be traced to a specific playbook change?",
    "summary": "A traceability protocol that connects a review decision to a written playbook edit, a test window, and an observed behavior.",
    "cluster": "Reviews",
    "publishedAt": "2026-11-10",
    "finding": "A review is traceable only when the change is written before the test window, the baseline is recorded, and the observed behavior is checked in later deals rather than inferred from the outcome.",
    "thumbnail": "/thumbnails/november-10/can-lost-deal-reviews-be-traced-to-a-specific-playbook-change.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks whether a lost-deal review can be traced to a specific change in the sales playbook. The unit is a review that produced a written change and a test window. The question matters because most reviews end with a lesson that nobody can find later. A traceable review leaves evidence that the team tried something.",
          "The scope covers business-to-business sales teams that hold reviews at least monthly. It excludes win-loss interviews conducted by an outside researcher, because those often serve a different purpose. The output is a traceability rate and a description of where the chain breaks. The same protocol can be repeated after a quarter without changing the unit of analysis."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from reviews held during the quarter that were expected to produce a change. Use the review record as the unit and link it to the deal or deals discussed. A review that explicitly decided to change nothing is still a unit, because the decision is part of the record. The review record should include the date, the attendees, and the decision, even when the decision is to wait.",
          "Exclude reviews that were purely informational or focused on a single administrative issue. Those may be useful, but they do not test the traceability question. Record the review date, the owner, and the number of deals discussed. Keep the list small enough to inspect by hand."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a playbook change as a written edit to a script, checklist, sequence, or qualification rule. A verbal suggestion is not a change. Define traceability as three links: the review names the change, the playbook contains the edit, and a later deal shows the behavior. Missing any link breaks the chain.",
          "Define the test window as the period in which the team agreed to use the change. Record the baseline behavior before the window. A review with no baseline can still be traced to an edit, but it cannot show whether the edit changed anything. Report the three links separately so a partial result is visible."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the review notes for the decision and the owner. Use the playbook version history for the edit date and content. Use call notes, recordings, or CRM fields for the observed behavior. Join the records by the change identifier rather than by the review title.",
          "Capture the playbook version that was active before and after the review. A version history is the strongest evidence that the change was real. If the team edits a shared document without versioning, the traceability rate will be lower. Note that limitation in the report."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the quarter has fewer than forty reviews, inspect all of them. For a larger set, sample by team and by review owner. Include reviews that produced no change so the rate reflects the whole practice. Record the selection method.",
          "Have two reviewers trace ten reviews independently. Compare the three links and discuss every disagreement. A disagreement about whether a verbal comment became a written edit usually means the review record is too thin. Update the template and recheck."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the share of reviews with a written change, the share with a playbook edit, and the share with observed behavior. The three rates show where the chain breaks. A team with many written changes but few edits has a documentation gap. A team with edits but no observed behavior has an adoption gap.",
          "Include one traced example and one broken example in the report. The examples make the chain concrete for a reader who was not in the review. Redact buyer details and keep the focus on the process. A short example is more useful than a long methodology note."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Observed behavior does not prove that the change caused a better outcome. The deal may have advanced for reasons unrelated to the playbook. The protocol measures whether the change was used, not whether it worked. Keep the causal claim out of the report.",
          "A playbook edit can be made for several reviews at once, which makes attribution difficult. Record the edit as a bundle and note the reviews it serves. If the team edits the same section every month, the problem may be the review process rather than the script. Use the pattern as a question for the next review."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Review notes and call recordings contain buyer information. Keep the traceability dataset in the approved storage and limit access to the sales operations lead and the reviewer. Report behavior rates and redacted examples rather than raw quotes. Check the recording retention policy before linking to a call.",
          "Remove names and company details from the summary. Keep the change identifier and the playbook version, which are internal and sufficient for tracing. Delete the raw review notes when the quarter is closed and keep the coded links. Record the deletion date."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "If the break is at the review, add a required field for the change and the owner. If the break is at the playbook, give one person edit rights and a weekly publishing slot. If the break is at behavior, add the change to the next call review sample. Fix one link before adding another.",
          "Repeat the traceability check after two quarters. A rising rate means the review habit is producing usable change. A flat rate means the team is still generating lessons without a path to practice. The goal is not a perfect score but a visible chain from conversation to behavior."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, sales occupations",
        "url": "https://www.bls.gov/ooh/sales/home.htm"
      },
      {
        "label": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      }
    ],
    "internalService": "/services/sales-enablement",
    "internalSibling": "/blog/run-a-lost-deal-review-that-ends-with-one-change"
  },
  {
    "slug": "how-much-preparation-time-does-a-one-on-one-packet-consume",
    "title": "How much preparation time does a one-on-one packet consume?",
    "summary": "A time-study protocol for measuring whether a manager preparation packet saves or adds work across a full sales team.",
    "cluster": "Management",
    "publishedAt": "2026-11-10",
    "finding": "The packet is worth its cost only when preparation time falls after the first month and the meeting produces a completed action that would otherwise have been missed.",
    "thumbnail": "/thumbnails/november-10/how-much-preparation-time-does-a-one-on-one-packet-consume.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how much manager time a one-on-one preparation packet consumes and whether that time falls with practice. The unit is one preparation session for one seller meeting. The question matters because a tool that saves meeting time but adds an hour of preparation is not a saving. The protocol measures the whole routine.",
          "The scope covers sales managers with at least four direct reports who prepare a written packet before each one-on-one. It excludes managers who only review a dashboard during the meeting. The output is a median preparation time, a learning curve, and a short assessment of meeting value. A shorter window is easier for managers to complete and easier for the analyst to compare."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from scheduled one-on-one meetings over six weeks. Include the preparation session and the meeting itself. Exclude meetings that were cancelled or moved at the last minute, because they do not represent the routine. Record the manager, the seller, and the week.",
          "Ask managers to log start and stop times for preparation rather than estimating afterward. A timer or a simple note at the start and end is enough. Estimation tends to round toward a convenient number. Keep the log separate from the packet so the act of measuring does not change the document."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define preparation time as the minutes spent reading data, writing the packet, and selecting questions. Do not include the meeting itself. Define meeting value as one completed action with an owner and a date. The two measures answer different questions and should be reported together.",
          "Define a learning curve as the change in median preparation time between week one and week six. A falling curve suggests the routine is becoming efficient. A flat or rising curve suggests the packet is collecting more work than it removes. Report the number of packets in each week so a small sample is visible."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the manager's time log for preparation minutes. Use the packet files for the number of sections and the length. Use the meeting notes for the completed action. Match the three sources by manager, seller, and date.",
          "Capture the data sources the manager used. A packet built from three systems may take longer than one built from a single view. Note whether the manager had a template or started from a blank page. The source and template are likely explanations for variation."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Include every scheduled one-on-one in the six-week window if the team is small. For a larger group, sample managers rather than meetings so one manager's habit does not dominate. Record the selection method and the number of managers. A manager who joins the study late should be marked so the learning curve is not mixed.",
          "Check the time logs against the packet timestamps where possible. A large gap between the logged time and the file history is worth a conversation. Do not treat the log as an accusation; treat it as a recall aid. The goal is a realistic estimate, not a precise audit."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the median and range of preparation time for each week. The range matters because one manager may spend far longer than another on the same format. Pair the time with the number of packet sections and the number of data sources. That pairing shows what drives the cost.",
          "Report the share of meetings with a completed action. A fast packet that produces no action is cheap but not useful. A slower packet that reliably produces an action may be worth the cost. Present both numbers before recommending a change."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The first week of any new routine is slower because the manager is learning the format. Including it in the average can make the packet look more expensive than it is. Report the first week separately and use the later weeks for the steady-state estimate. A steady-state number is the right basis for a staffing or workload decision.",
          "A manager may prepare more carefully because the study is watching. That attention can inflate both time and quality. Note the observation effect and compare with a later unobserved month if possible. A small follow-up check is better than assuming the effect disappeared."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Time logs and meeting notes can reveal performance concerns about individual sellers. Keep the dataset limited to the manager and the operations analyst. Report aggregate times and coded actions rather than named sellers. Do not share the raw packet outside the management group.",
          "Remove seller names from the summary and use role labels. Keep the method and the aggregate result after the study. Delete the raw logs when the review is complete. Record the deletion date beside the summary."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "If preparation time stays high after week four, reduce the packet to the blocks that produce an action. If the action rate is low, the problem may be the meeting rather than the packet. Test one change at a time and keep the time log running for another month. The next study can then test whether the smaller packet still produces the same action rate.",
          "Set a practical target such as ten minutes of preparation for a thirty-minute meeting. A target is not a rule, but it gives the manager a way to notice drift. Review the routine each quarter and remove any block that no longer earns its place. The manager should be able to explain the target to the seller without reading a policy."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, sales occupations",
        "url": "https://www.bls.gov/ooh/sales/home.htm"
      },
      {
        "label": "U.S. Department of Labor, work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "internalService": "/services/pipeline-reporting",
    "internalSibling": "/blog/prepare-a-one-on-one-packet-a-sales-manager-can-use"
  },
  {
    "slug": "how-consistent-are-call-outcome-codes-across-a-sales-team",
    "title": "How consistent are call outcome codes across a sales team?",
    "summary": "A calibration study for measuring agreement on call outcome codes before the data is used in reporting.",
    "cluster": "Measurement",
    "publishedAt": "2026-11-10",
    "finding": "Code consistency should be measured on the same recorded calls by multiple sellers, because a clean dashboard can hide wide disagreement about what a connected call means.",
    "thumbnail": "/thumbnails/november-10/how-consistent-are-call-outcome-codes-across-a-sales-team.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how consistently sellers apply the same call outcome codes to the same calls. The unit is a coded call, and the comparison is between reviewers. The question matters because reports built on inconsistent codes describe the reviewers rather than the buyers. A high agreement rate is a precondition for using the data.",
          "The scope covers outbound sales calls with a written outcome code list of six to eight options. It excludes inbound support calls and calls with no buyer contact. The output is an agreement rate, a confusion pattern, and a short list of definitions that need repair. The coding sheet should match the live form exactly so the exercise reflects real use."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from recorded calls that represent normal work across stages and sellers. Include calls that ended in voicemail as well as calls with a conversation. Exclude test calls and calls with colleagues. Record the stage, the seller, and the duration.",
          "Use the same call set for every reviewer. A comparison across different calls measures the calls, not the reviewers. Keep the set to twenty or thirty calls so the task is realistic. Randomize the order to reduce fatigue effects."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define agreement as the share of calls where two reviewers choose the same code. Report pairwise agreement and a summary rate across the group. Do not use a single reviewer as the standard, because that person may be wrong. The group pattern is the evidence.",
          "Define a confusion pair as two codes that reviewers frequently swap. A confusion pair points to a boundary that the definitions do not resolve. Report the top three pairs with the calls that produced them. That detail is more useful than a single agreement score."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use recorded calls and a coding sheet that mirrors the live call form. Do not give reviewers the original seller's code before they choose. Seeing the original invites anchoring and hides disagreement. Collect the codes independently before any discussion.",
          "Capture the reviewer's confidence for each call on a three-point scale. Low confidence on a call that is frequently miscoded is a strong signal that the definition needs work. Record the reviewer's role and tenure so the analysis can compare groups. A reviewer who is unsure should mark the call rather than force a choice."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Include at least three reviewers, because two can agree by accident. If the team is large, sample reviewers across tenure and team. Record the selection method. A group of only senior sellers will overstate consistency.",
          "Run the coding twice with a two-week gap for a small subset. A reviewer who chooses a different code on the second pass reveals an unstable definition. Report the within-reviewer agreement alongside the between-reviewer rate. Both numbers matter."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the agreement rate by code as well as overall. A high overall rate can hide one code that nobody applies consistently. Show the count of calls for each code so a rare code is not overinterpreted. Pair the rate with the confusion pairs.",
          "Present the result as a calibration finding, not a performance score. The purpose is to improve definitions, not to rank sellers. A short report with examples is more actionable than a leaderboard. Share it with the team before changing the form."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Reviewers may code differently when they know they are being studied. The attention can improve agreement above normal practice. Repeat the exercise later without advance notice if the team can do so fairly. Note the difference in the report.",
          "The call sample may not represent the mix of outcomes in a normal week. If most sampled calls are conversations, the agreement rate may be higher than the real rate. Weight the sample by the actual outcome mix when possible. Report the weighting method."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Recorded calls contain buyer voices and personal details. Keep the recordings in the approved system and limit access to the reviewers. Use call identifiers rather than buyer names in the coding sheet. Check the recording retention rule before extending the study.",
          "Delete the coding sheets when the summary is complete and keep the aggregate result. Do not include identifiable audio in a training deck without consent. Record the deletion date and the approval path. The team should know how the recordings will be used before the exercise starts."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Repair the top confusion pair first. Rewrite the two definitions with one positive and one negative example, then rerun the coding on the same calls. A rise in agreement shows the definition helped. A flat result suggests the problem is the code list rather than the wording.",
          "Set a quarterly calibration check and keep the call set fresh. Codes drift as the sales motion changes, and an old set stops representing current work. Review the list with the sellers who use it and retire codes that no longer earn a distinct action. A short note in the playbook explains what changed and why the old code was retired."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, wholesale and manufacturing sales representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "National Institute of Standards and Technology, Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/records"
      }
    ],
    "internalService": "/services/pipeline-reporting",
    "internalSibling": "/blog/define-call-outcome-codes-sellers-will-actually-use"
  },
  {
    "slug": "what-share-of-quiet-buyers-return-after-a-pricing-conversation",
    "title": "What share of quiet buyers return after a pricing conversation?",
    "summary": "A cohort protocol for measuring re-engagement after pricing silence without misreading a pause as a lost deal.",
    "cluster": "Follow-up",
    "publishedAt": "2026-11-10",
    "finding": "The return rate is meaningful only when the cohort is fixed at the pricing conversation and re-engagement is defined as a buyer-initiated reply or meeting, not any seller touch.",
    "thumbnail": "/thumbnails/november-10/what-share-of-quiet-buyers-return-after-a-pricing-conversation.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks what share of buyers who go quiet after a pricing conversation return to an active conversation. The unit is the buyer who received a price and then stopped responding. The question matters because teams often treat silence as a final answer and stop learning from the deal. Some buyers return, and the pattern is worth measuring.",
          "The scope covers business-to-business opportunities where a price was discussed on a call or sent in writing. It excludes renewals, which have a fixed decision date, and inbound buyers who never had a conversation. The output is a return rate within a fixed window and a description of what preceded the return. A narrow definition keeps the cohort comparable when the sales cycle changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the cohort from opportunities where the last seller message contained a price and the buyer did not reply within five business days. Use the date of that message as the cohort date. Record the stage, the deal size band, and the buyer role. Those fields help explain differences later.",
          "Exclude buyers who explicitly declined or asked for a pause. A stated no is not silence. Exclude also opportunities where the seller never followed up, because the silence may belong to the seller. Keep the exclusion list with the dataset."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define return as a buyer-initiated email, call, or meeting request within sixty days of the cohort date. A seller's unanswered follow-up is not a return. Define re-engagement as any buyer response that moves the opportunity to a scheduled next step. The two measures separate a polite reply from renewed interest.",
          "Define the observation window before looking at the data. Sixty days is practical for most small and mid-sized deals, but a longer cycle needs a longer window. Report the share that returns within thirty days separately. Early returns may have different causes than late ones."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the email and call log for the price message and the buyer reply. Use the CRM stage history for the scheduled next step. Join on the opportunity identifier. Record the seller follow-up dates so the analysis can distinguish buyer-initiated returns from seller-driven ones.",
          "Capture the reason given at return if the buyer states one. Code the reasons into a short list such as timing, internal approval, budget, or a changed requirement. Keep the original phrase for a sample so the codes can be checked. A coded reason is more useful than a guess."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the cohort is small, measure all of it. For a larger cohort, sample within deal size and seller. Include opportunities that never returned so the rate is not biased toward successes. Record the selection method and the seed.",
          "Have two reviewers classify twenty opportunities as returned or not. Compare the event dates and the reason codes. Discuss disagreements about a reply that did not schedule a next step. Update the definition if the boundary is unclear."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the return rate within thirty and sixty days, with counts. Break the rate down by deal size band and buyer role. A small deal may return faster because the approval path is shorter. A large deal may take longer without being lost. The breakdown prevents a single average from misleading the team.",
          "Report the top return reasons and the time to return. A cluster of timing reasons suggests a nurture path rather than a discount. A cluster of budget reasons suggests a different qualification question. Pair each reason with a recommended next step rather than a generic conclusion."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "A buyer may return because of a new event unrelated to the follow-up. The protocol cannot attribute the return to a specific message. Treat the result as a base rate for planning, not as proof that a sequence works. A controlled test is needed for a causal claim.",
          "The cohort definition depends on what counts as a price conversation. A range mentioned early in discovery is different from a formal quote. Keep the definition narrow and report it with the result. A broad definition mixes different buyer experiences."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "The dataset contains buyer communications and pricing. Keep it in the approved storage and limit access to the analyst and the sales operations lead. Report aggregate rates and coded reasons rather than buyer names. Check the retention policy before keeping message text.",
          "Remove free-text notes that are not needed for classification. Keep the method and the aggregate result after the review. Delete the raw export when the summary is approved. Record the deletion date beside the summary."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Use the result to set a realistic follow-up plan. If a meaningful share returns after thirty days, a long silence is not a reason to delete the record. If returns are rare, the team should close the loop sooner and move the account to a clear nurture status. Review the follow-up plan with the seller who owns the account before the next cohort starts.",
          "Test one change in the follow-up, such as offering two decision paths or adding a useful internal summary. Measure the next cohort the same way and compare. Keep the definition stable so the comparison means something. The goal is a calmer, more honest follow-up habit."
        ]
      }
    ],
    "sources": [
      {
        "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "U.S. Small Business Administration, provide excellent customer service",
        "url": "https://www.sba.gov/business-guide/manage-your-business/provide-excellent-customer-service"
      },
      {
        "label": "U.S. Bureau of Labor Statistics, sales occupations",
        "url": "https://www.bls.gov/ooh/sales/home.htm"
      }
    ],
    "internalService": "/services/sales-follow-up",
    "internalSibling": "/blog/write-a-follow-up-plan-for-buyers-who-go-quiet-after-pricing"
  }
];

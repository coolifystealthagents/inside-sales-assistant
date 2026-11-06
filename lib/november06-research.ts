import type { ResearchPost } from './types';

export const november06ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-much-rework-follows-an-unclear-prospect-research-brief",
    "title": "How much rework follows an unclear prospect research brief?",
    "summary": "A measurement protocol for counting prospect research rework, with population rules, reason codes, sampling, and honest limits.",
    "cluster": "Rework measurement",
    "publishedAt": "2026-11-06",
    "finding": "A repeatable handoff review can show whether unclear briefs drive returns, but the rate should be read as a workload signal rather than a score for individual researchers.",
    "thumbnail": "/thumbnails/november-06/how-much-rework-follows-an-unclear-prospect-research-brief.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks a narrow measurement question: how often does a prospect research handoff return for correction because the original brief left a material point unclear? The unit is the handoff, not the researcher or the seller, so the answer describes the process rather than a person. The method is designed for a sales operations team that already keeps a research queue and a review step. It does not estimate the value of research or the quality of an individual researcher.",
          "The scope covers briefs prepared for active opportunities during one quarter. It excludes one-off market studies and requests that were cancelled before review. The output is a rate and a small set of reasons that a manager can use to revise the template. The method is repeatable, but it is not an audit opinion or a legal conclusion.",
          "The protocol is intended for a team that can inspect its own queue without a special tool. A shared spreadsheet with a dated export is enough if the columns are stable and the definitions are written down. The team should agree on the observation window before the first count. That agreement prevents a later argument about which briefs belonged in the study."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as every prospect research brief delivered to a seller during the observation window. A brief that is revised before delivery is still one unit; a brief that is returned after delivery creates a rework event attached to that unit. Count each delivered brief once in the denominator. This rule prevents a single messy handoff from inflating the rate.",
          "State the opening and closing dates before collection begins. Include briefs that were reopened during the window and note their original delivery date. Exclude duplicates created by the same request unless the team treats them as separate deliverables. Write the inclusion rule in the collection sheet so another analyst can reproduce the count.",
          "Keep a case identifier that links the delivered brief to the original request. If the team uses a ticketing system, use its identifier rather than a new one. If it uses email, create a short identifier in the subject line. A stable link is what makes a return countable without searching through personal inboxes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define rework as a return that requires the researcher to change a material fact, add a missing source, or redo a section because the original did not meet the brief standard. A seller asking a clarifying question is not automatically rework. A cosmetic edit is not rework unless it changes meaning. The definition should be applied by two reviewers on a sample before the full count.",
          "Record the reason for each return using a short code list. Useful codes include missing source, conflicting source, wrong account, unclear inference, and incomplete next step. Add an 'other' code but require a one-line explanation when it is used. The codes make the reasons countable without flattening the detail.",
          "When a return involves more than one reason, code the reason that triggered the return rather than every issue found. The trigger is the actionable part because it explains why the handoff stopped. Note secondary issues in a short comment if they matter for the template. This rule keeps the counts from double counting a single event."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use two data sources: the research queue or ticketing system and the delivered brief itself. The queue shows delivery and return timestamps, while the brief shows what changed. If the team works in email, export the thread and store it with the case identifier. The method needs a durable record, not a memory of the week.",
          "Capture the researcher, the seller, the account, the delivery date, the return date, and the reason code. Avoid collecting free text beyond the short explanation needed for 'other'. Personal notes and performance commentary are out of scope. The dataset should be small enough to audit and specific enough to answer the question.",
          "Collect the data in a template with one row per delivered brief and a separate row for each return event. The separation lets the analysis count both the brief and the event without losing the link. Validate the date fields before analysis because a text date will break the elapsed-time calculation. A short validation step saves a long cleanup."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the full population is too large, sample delivered briefs at random within each month. Stratify by researcher and by seller so one heavy reviewer does not dominate the sample. Record the random seed or selection method. A convenience sample drawn from the most recent week will overstate or understate the rate without warning.",
          "Have two reviewers code the first twenty returns independently. Compare their decisions and resolve disagreements with the written definitions. If agreement is low, revise the definitions before continuing. Report the disagreement rate alongside the main finding so readers can judge the measurement. Record the reviewer initials with each coded decision so a later question can be traced.",
          "If the team changes the brief template during the quarter, mark the change date and analyze the periods separately. A pooled rate across the change can hide whether the new template helped. Keep the same reason codes for both periods so the comparison is possible. If a code changes meaning, start a new series rather than merging the old one."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Calculate the rework rate as the number of briefs with at least one return divided by the number of delivered briefs. Report the count and the rate together because a small denominator can make a rate look dramatic. Also report the median days between delivery and return. A fast return often points to a missing field, while a slow return may point to a changed account.",
          "Break the rate down by reason code and by researcher only when the group sizes are large enough to avoid identifying individuals. Compare the first half of the quarter with the second half to see whether a template change moved the rate. Do not compare rates across teams with different definitions. The analysis should answer whether the process improved, not who to blame.",
          "Report a confidence interval only if the sample is large enough to support one. With a small team, the count and the direction of change are more honest than a precise-looking percentage. Use the reason codes to describe what changed, not just how much. A manager can act on a clear reason even when the rate is uncertain."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The method cannot distinguish a brief that was unclear from a seller who changed the request after delivery. A return can be legitimate and still count as rework, so the rate is a workload signal rather than a quality score. Missing queue data will undercount returns that happened in chat or in person. State these limits in the report.",
          "Seasonality and account mix can also affect the rate. A quarter with many new accounts may produce more returns because the research is harder, not because the template got worse. Compare similar periods and note any major change in the sales motion. The finding is strongest when the process and the population stay stable.",
          "The report should separate a return caused by a missing source from one caused by a changed business event. The first points to the template, while the second may be a normal part of a live opportunity. If the two are merged, the team may over-correct the template and miss the value of updating the brief when the account changes. A short comment field can carry that distinction."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Report the question, the window, the denominator, the rate, and the top three reason codes on one page. Add a short note on what changed during the quarter and what the team plans to test next. Keep individual names out of the summary unless the audience needs them for coaching. The page should let a manager decide whether to revise the template.",
          "Set a follow-up date and a single success measure, such as a lower rate of missing-source returns. Re-run the same method after the change so the comparison is fair. If the rate does not move, examine whether the change reached the work. A measurement that is never repeated is only a snapshot."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "National Institute of Standards and Technology, Security and Privacy Controls",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      },
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ],
    "internalService": "/services/prospect-research",
    "internalSibling": "/blog/how-to-hand-off-prospect-research-without-losing-source-provenance"
  },
  {
    "slug": "what-crm-administration-errors-recur-after-a-handoff-change",
    "title": "What CRM administration errors recur after a handoff change?",
    "summary": "A method for reviewing CRM administration errors after ownership or pipeline handoffs, using audit logs and defined error categories.",
    "cluster": "Handoff quality",
    "publishedAt": "2026-11-06",
    "finding": "Handoff errors are most usefully reviewed as events tied to a specific transition, because the same field can fail for different reasons depending on who receives the record.",
    "thumbnail": "/thumbnails/november-06/what-crm-administration-errors-recur-after-a-handoff-change.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "A handoff change is any moment when a CRM record moves from one owner, team, or process to another. The question is which administration errors recur after that change and whether they cluster around particular fields. The unit is the record that changed hands during the window. The method looks for patterns that a manager can fix with a rule, a field, or a review step.",
          "The scope covers records that were reassigned, imported, or moved between pipelines. It excludes records created and closed by the same owner without a handoff. The output is a ranked list of error types with counts and examples. It is a process review, not an evaluation of the people involved.",
          "A handoff review should start with the transitions the team can control, such as reassignment, import, and pipeline change. Transitions caused by a departed employee may need a different review because the record history is incomplete. Separate the controllable and uncontrollable groups before comparing rates. The distinction keeps the finding useful for process design."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from the CRM audit log for the observation window. Include every record with an ownership or pipeline change, then remove test records and duplicates. Keep the original owner, the new owner, and the change timestamp. The log is the only reliable way to see the handoff without asking people to remember it.",
          "Define whether a record that changes hands twice counts once or twice. The recommended approach is to count each handoff as a separate event while keeping the record identifier for context. Report both the number of records and the number of events. This prevents a few heavily reassigned records from distorting the error rate.",
          "If the audit log stores only the final owner, reconstruct the sequence from activity history and reassignment notes. Mark records with an incomplete sequence and exclude them from the main rate. Report the excluded count so the reader knows how much of the population is missing. A clean sequence is more important than a large sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define the error types before reviewing records. Common categories include missing owner, stale close date, wrong stage, missing next step, duplicate account, and a note without a source. Each category needs a short test that two reviewers can apply the same way. Avoid a broad category such as 'bad data' because it cannot guide a fix.",
          "Distinguish an error from a legitimate blank. A field may be empty because it does not apply to the record, and forcing a value would create false data. Record 'not applicable' separately from 'missing'. This distinction keeps the review honest and prevents the team from filling fields just to pass the check.",
          "Add a category for a field that is correct but unsupported, such as a close date with no buyer commitment. This is different from a missing field and often more dangerous because it looks complete. The review should treat unsupported values as an error for decision purposes. That definition helps the team see the difference between form completion and reliable data."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the CRM audit log, the current record, and a sample of linked activities. The audit log shows what changed and when, the record shows the present state, and the activities show whether the note matches the work. If the team uses a separate research tool, include its timestamps for the handoff window. The method needs at least two sources to separate a data entry problem from a process problem.",
          "Capture the record identifier, the handoff date, the old and new owner, the field changed, and the error category. Add a short example for each error type during the pilot. Do not copy full customer notes into the analysis file. The review should use the minimum data needed to support the finding.",
          "Keep a data dictionary with the field names, the allowed values, and the date the definition was last confirmed. Handoffs often fail because the receiving team uses a different definition for the same field. The dictionary gives the reviewers a shared reference and gives the analysis a stable meaning. Update it when the CRM changes, not after the next audit."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Review all handoffs if the volume is manageable; otherwise sample randomly within each week. Stratify by old team and new team so a single difficult transition does not dominate. Record the selection method and the number of records excluded. A sample drawn only from the largest team will miss the transitions that need the most help.",
          "Pilot the error definitions on twenty events with two reviewers. Resolve disagreements and update the tests before the full review. If the pilot shows that one category is too broad, split it. The pilot is cheaper than discovering midway that the categories cannot be compared.",
          "If a team has very few handoffs, review all of them and report the count instead of a rate. A rate based on eight events can swing wildly with one error. The narrative should describe the cases and the pattern without pretending to statistical precision. Small teams benefit more from a checklist than from a dashboard."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Report the error rate per handoff and the share of handoffs with at least one error. Rank the categories by frequency, then look at whether they concentrate in the first week after the change. A cluster in the first week suggests a handoff checklist problem. A cluster later suggests a monitoring or ownership problem.",
          "Compare transitions that used a checklist with those that did not, if the data allows. Avoid claiming causation from a simple comparison because the teams may differ in other ways. Present the pattern as a hypothesis for a small test. The analysis should point to the next experiment, not declare a winner.",
          "Look at the time between the handoff and the first error, not just the total rate. Errors that appear within a day point to a missing handoff step, while later errors point to monitoring or ownership drift. Plot the timing for the top two categories. The pattern tells the team where to place the control."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Audit logs can be incomplete, especially if a tool syncs records without recording the source. A missing log entry may look like a missing handoff. The review should note the coverage of the log and any known gaps. It should also avoid treating a field change as an error when the field was legitimately updated.",
          "The method does not capture errors that were fixed before the review or problems that never reached the CRM. It also cannot measure the buyer's experience. Use the findings as an internal signal and pair them with seller feedback. A single data source is never the whole story.",
          "Review the records that were excluded for incomplete history before dismissing them. They may be the transitions with the weakest handoff, which makes them important even if they cannot be counted. Describe them in a short appendix and label the evidence gap. The main rate stays clean, and the reader still sees the risk."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Present the handoff volume, the error rate, the top categories, and two anonymized examples. Add a recommendation for one checklist change and one field definition change. Keep the report short enough for a sales operations review. The audience needs to see where to act, not every record.",
          "Set a follow-up review after the next handoff cycle and compare the same categories. If an error type disappears, confirm that the fix did not simply move the problem to another field. If the rate is unchanged, ask whether the checklist was used. The review closes only when the process changes.",
          "Write the follow-up review into the calendar before the current review ends. A date that depends on someone remembering will slip. Invite the same reviewers so the definitions stay consistent. The comparison is only useful if the group and the method are stable. Put the date and the reviewer in the calendar entry, not only in a message."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Institute of Standards and Technology, Security and Privacy Controls",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      },
      {
        "label": "Internal Revenue Service, Recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/audit-crm-notes-for-evidence-before-the-quarter-closes"
  },
  {
    "slug": "where-do-meeting-coordination-handoffs-lose-the-most-time",
    "title": "Where do meeting coordination handoffs lose the most time?",
    "summary": "A stage-by-stage timing method for meeting coordination handoffs, including time zone control, sampling, and reporting.",
    "cluster": "Timing",
    "publishedAt": "2026-11-06",
    "finding": "Measuring each stage of the meeting handoff separately shows where elapsed time concentrates and gives the team one place to test a change.",
    "thumbnail": "/thumbnails/november-06/where-do-meeting-coordination-handoffs-lose-the-most-time.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief measures elapsed time between the moments that make up a meeting handoff: the request, the proposed slot, the confirmation, the preparation packet, and the meeting itself. The question is where the largest delay accumulates. The unit is one requested meeting, followed from the first request to the scheduled start. The method is descriptive and does not attempt to prove why a delay occurred.",
          "The scope covers meetings coordinated for active sales opportunities during one quarter. It excludes internal team meetings and events booked directly by the prospect without a coordinator. The output is a median and a range for each stage, plus the share of total time consumed. A manager can use the result to decide which stage to inspect first.",
          "Use the same definition of a requested meeting for every coordinator so one person's queue does not look faster by counting only easy requests. Include the requests that were declined or cancelled after a long wait. The full picture is more useful than a clean subset. The report should say which requests were excluded and why."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define a requested meeting as a request that entered the coordination queue, even if it was later cancelled. Keep cancelled meetings in a separate group so they do not distort the completed flow. Record the request source and the account stage. The population should include the routine requests, not only the difficult ones that people remember.",
          "Set the observation window and the time zone used for all timestamps before collection. Convert every timestamp to a single reference zone so a meeting across regions is measured consistently. Note any daylight saving change during the window. A measurement that mixes local times will invent delays that do not exist.",
          "If the queue spans regions, record the region of the requester and the region of the host separately. A meeting may be slow because the two regions have little overlap in working hours, not because the coordinator delayed. This field also helps the team test a new booking window. Without it, the analysis may recommend the wrong fix."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define each stage with a clear start and end event. Request to first proposal, proposal to confirmation, confirmation to packet delivery, and packet delivery to meeting start are four useful stages. A stage ends only when the event is recorded in the queue or calendar. If a stage has no recorded event, mark it as missing rather than estimating.",
          "Separate coordinator time from buyer time. A delay while waiting for the prospect is different from a delay inside the coordination team. Record who held the item at each stage. This distinction prevents the review from blaming the coordinator for a buyer's slow reply. Use the same rule for every meeting so the split is comparable.",
          "Add a category for time spent waiting on an internal approval, such as a discount or a custom contract. That wait is often recorded as part of the coordination stage even though the coordinator cannot resolve it. Separating it prevents the review from overstating the coordinator's share of the delay. It also points to the owner who can actually reduce it."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the coordination queue, the calendar, and the message thread as the three data sources. The queue gives status changes, the calendar gives the scheduled start and reschedules, and the thread gives the request time when the queue entry is late. Match the records with a stable meeting identifier. Disagreements between sources should be logged, not silently resolved.",
          "Capture the request time, each status change, the meeting start, the attendee count, and the number of reschedules. Do not collect the meeting content or personal notes. The analysis needs timing and context, not the substance of the conversation. A smaller dataset is easier to keep accurate.",
          "Check whether the queue records status changes in real time or in a daily batch. A batch update can make several meetings look as if they moved at the same hour. Use the calendar or thread timestamps to confirm the sequence when the delay is material. Document the adjustment so the method remains transparent."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Sample meetings randomly across weeks and coordinators if the full population is too large. Include at least one request from each region and each major account stage. Record the sampling method and any excluded meetings. A sample of only successful meetings will understate the time lost to reschedules and no-shows.",
          "Check the timestamps on a small pilot before analyzing the full set. Look for entries created retroactively or rounded to the hour, because both distort elapsed time. If the queue rounds timestamps, use the message thread where possible. Document the correction so the method can be repeated.",
          "If the sample includes a holiday period, analyze it separately because working hours and buyer behavior change. A slow week in late December may say nothing about the process. Note the holiday dates in the report and avoid blending them with ordinary weeks. The comparison should use periods with similar working conditions."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Calculate the median and interquartile range for each stage, not just the average. A few very slow meetings can pull the average away from the typical experience. Report the share of total elapsed time held by each stage. The stage with the largest share is the first candidate for inspection.",
          "Group the results by region and by reschedule count to see whether the pattern is stable. Compare meetings that used a preparation packet with those that did not, but treat the comparison as exploratory. The goal is to find a promising place to test a change. It is not to rank coordinators.",
          "Report the number of meetings excluded for missing timestamps alongside the main result. An exclusion rate above a small threshold means the queue data is not ready for this kind of analysis. Fix the capture before drawing conclusions about the process. A precise median from incomplete data is still misleading."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The method cannot see work that happened outside the recorded systems, such as a phone call that resolved a scheduling problem. It also cannot separate a slow buyer from a slow internal approval. The report should state both limits and avoid causal language. Timing data shows where to look, not why the delay exists.",
          "Time zone conversion, calendar sync delays, and manual status updates can all add noise. A meeting that looks slow may simply have been entered late. Use the message thread to cross-check the largest delays. If the sources disagree, exclude the meeting from the main result and report the exclusion.",
          "Check whether a long delay is caused by a single stakeholder who is hard to reach. If so, the coordination fix may be a different contact path rather than a faster queue. Record the stakeholder role in the case notes, not the person's name. The pattern can guide a conversation with the account owner."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Report the number of meetings, the median total time, the stage medians, and the share of time in each stage. Add one chart that shows the distribution rather than only the average. Include a short note on data quality and exclusions. The reader should be able to see where the typical delay sits.",
          "Choose one stage for a two-week test, such as sending the preparation packet earlier or shortening the proposal window. Compare the same measures after the test. Keep the method unchanged so the comparison is fair. The brief is useful only if it leads to a tested change. The test should be small enough to finish without a second project manager.",
          "Keep the stage definitions in the report so a new coordinator can repeat the measurement. A chart without the definitions invites a different interpretation next quarter. Version the report when a definition changes. The version history is part of the evidence. A version number is enough when the report is stored with its source files."
        ]
      }
    ],
    "sources": [
      {
        "label": "Internet Assigned Numbers Authority, Time Zone Database",
        "url": "https://www.iana.org/time-zones"
      },
      {
        "label": "National Institute of Standards and Technology, Time and Frequency Division",
        "url": "https://www.nist.gov/pml/time-and-frequency-division"
      },
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/set-meeting-coordination-rules-for-time-zones-and-no-shows"
  },
  {
    "slug": "can-sales-follow-up-ownership-be-measured-from-queue-age",
    "title": "Can sales follow up ownership be measured from queue age?",
    "summary": "A practical test of queue age as a follow up ownership signal, with ownership checks and data-quality limits.",
    "cluster": "Queue health",
    "publishedAt": "2026-11-06",
    "finding": "Queue age is a useful early warning for follow up ownership only when it is paired with checks for a named owner, an accepted action, and a recorded next step.",
    "thumbnail": "/thumbnails/november-06/can-sales-follow-up-ownership-be-measured-from-queue-age.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Queue age is the time an open follow up item has waited since its due date. The question is whether that single measure can tell a manager whether ownership is working. The unit is the follow up item, not the seller or the account. The method tests how much of the ownership problem is visible in the queue and what the measure misses.",
          "The scope covers open follow up items in a shared queue during one quarter. It excludes items that were closed before the due date and items that were never assigned. The output compares queue age with a small set of ownership checks. The result is a practical signal, not a complete performance measure.",
          "The analysis should state whether the queue includes items from more than one team. A shared queue can hide a coverage problem because an item looks owned even when the assigned person is on leave. If multiple teams use the same queue, group the result by team. A single blended number will not show where the ownership risk sits."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define the population as every follow up item that entered the queue with a named owner and a due date. Include items created from calls, emails, and meetings. Exclude automated reminders that do not require a human action. The distinction matters because a reminder can age without anyone failing to act.",
          "Record the creation date, due date, owner, account, and current status. Note any reassignment during the item's life. If an item changes owners, keep the history rather than overwriting the field. Ownership is a sequence, and the age of the current owner may be much shorter than the age of the item.",
          "Record whether an item was paused at the buyer's request. Paused items should be excluded from the age measure because they are waiting by design. If the queue has no pause field, use the activity note to identify them and mark the inference. A measure that counts a requested delay as a failure will push the team toward unwanted contact."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define queue age as the number of business days between the due date and the review date, counting only days the team is open. A calendar-day measure overstates age across weekends and holidays. Use the same business calendar for every item. State the rule in the report so the number can be reproduced.",
          "Define ownership with three checks: a named person, an accepted action, and a recorded next step. A name alone is not ownership if the person has not accepted the item or cannot act. These checks let the analysis compare queue age with a richer view. The comparison is the point of the study.",
          "Add a fourth check for a next step that is specific enough to act on. A recorded step such as 'follow up' is technically present but does not tell the owner what to do. The review can rate specificity on a simple yes or no. This check often explains why an item with a named owner still ages. Rate it as specific only when the step names an action and a date."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the queue export and the CRM activity history. The export gives the due date and owner, while the activity history shows whether the owner acted. If the queue is maintained in a spreadsheet, keep a dated copy for each review. A live spreadsheet that is edited during analysis cannot support a reproducible result.",
          "Capture the owner's team and the account stage to allow grouped comparisons. Avoid collecting message content or personal performance notes. The analysis needs structure, not the details of each conversation. A clean dataset with a few fields is more useful than an exhaustive one. A short data dictionary can carry those definitions without adding a new system.",
          "Export the queue at the same time each week so the age comparison is stable. A midweek export after a cleanup will look better than a Monday export before it. Keep the raw file and the analysis file separate. The raw file is the evidence if a number is questioned later."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Include all open items on the review date if the queue is small. If it is large, sample randomly within owner and stage so one overloaded team does not dominate. Record the selection rule and the number of items excluded. A sample of the oldest items will overstate age by design.",
          "Run a pilot on fifty items and compare the queue due date with the activity history. Look for items that were completed but never closed, because those inflate age without a real ownership failure. Decide whether to correct them or exclude them, and apply the same rule throughout. The pilot protects the finding from a simple data artifact.",
          "If the queue is very small, review every item and use the counts rather than a sample. A sample of ten items cannot support a stable median, but a full review of ten can still reveal a broken handoff. Report the count and the specific cases. Small teams should optimize for learning, not for statistical appearance."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Compare median queue age for items with all three ownership checks against items missing at least one. Report the counts and the distribution, not only the averages. If age rises sharply when a check is missing, the checks are a useful early warning. If the groups look similar, queue age alone may not capture ownership.",
          "Break the result down by stage and team, but suppress groups that are too small to protect individuals. Look for a threshold where age begins to rise, such as five or ten business days. A threshold is more actionable than a single average because it can trigger a review. Test the threshold on the next quarter before adopting it as policy.",
          "Test the threshold against a second quarter before writing it into policy. A threshold that works in a quiet quarter may create false alarms during a launch. Track the share of items above the threshold and the share that were genuinely overdue. A good threshold catches problems without training the team to ignore the alert."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Queue age cannot show whether the follow up was useful or whether the buyer wanted contact. An item can be old because the buyer asked for a later date, which is not an ownership failure. The method should flag paused items and exclude them from the main measure. Without that flag, the number punishes good judgment.",
          "The measure also depends on accurate due dates and status updates. A queue with inconsistent entry will produce a confident number that means little. Report data quality alongside the result and avoid using the measure as a sole performance rating. It is a prompt for review, not a verdict.",
          "If the queue has no due date for some items, treat that as a missing ownership signal rather than excluding the item. A follow up without a date cannot become overdue, which means it can sit indefinitely. Count those items separately and report the share. The absence of a date is itself a finding."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Report the item count, median age, the share over the threshold, and the ownership check results. Add two anonymized examples, one healthy and one overdue, to show what the numbers mean in practice. Keep the report short enough for a weekly operations review. The reader should know which items to inspect first.",
          "Set a follow-up measure such as the share of items with all three ownership checks. Re-run the method after a queue or handoff change and compare the same groups. If age improves but the checks do not, ask whether the queue is being closed without action. The measure is useful when it is read alongside the work.",
          "Record the owner of each follow-up action in the report, not just in the meeting notes. A finding without an owner tends to disappear. Review the action at the next weekly meeting. The report closes when the action is visible, not when it is presented."
        ]
      }
    ],
    "sources": [
      {
        "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology, Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "internalService": "/services/sales-follow-up",
    "internalSibling": "/blog/design-sales-follow-up-cadences-that-survive-a-busy-week"
  },
  {
    "slug": "how-reliable-is-pipeline-reporting-when-the-owner-is-on-leave",
    "title": "How reliable is pipeline reporting when the owner is on leave?",
    "summary": "A coverage review that compares pipeline report delivery and restatement when the usual owner is away.",
    "cluster": "Coverage",
    "publishedAt": "2026-11-06",
    "finding": "Pipeline report reliability depends more on access, definitions, and a named backup than on the usual owner being present.",
    "thumbnail": "/thumbnails/november-06/how-reliable-is-pipeline-reporting-when-the-owner-is-on-leave.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how much a weekly pipeline report changes when its usual owner is away. Reliability here means the report can still be produced on time, with the same definitions and a traceable source. The unit is one weekly report cycle, not one deal. The method compares covered and uncovered cycles using the same measures.",
          "The scope covers reports produced for a sales leadership review during one quarter. It excludes ad hoc analyses and reports built for a board meeting, which usually have a different review path. The output describes delivery, completeness, and restatement. It does not evaluate the person on leave.",
          "The review should include the weeks before the leave, not only the weeks during it. A process that is already fragile may fail at the first absence, and the earlier weeks show whether the fragility was visible. Compare the trend rather than a single before-and-after pair. The pattern is more convincing than one missed report.",
          "If the leave is planned, run one covered cycle before the leave begins. A practice cycle reveals missing access and unclear definitions while the usual owner can still help. Treat the practice as a real cycle and measure it the same way. The rehearsal is cheaper than discovering the gap during the absence."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define a report cycle as the period between two scheduled leadership reviews. Include every cycle in the window, whether or not the usual owner was present. Mark the coverage arrangement for each cycle: usual owner, named backup, shared queue, or no cover. The distribution of arrangements is part of the result.",
          "Record the planned review date, the actual delivery time, and the number of source files expected. Note any cycle that was cancelled or merged with another. A cancelled review is not a missing report, and merging two cycles changes the denominator. Apply the rule consistently across covered and uncovered periods.",
          "Record who actually produced each report, even if the usual owner is named on the cover. The producer is the person who assembled the numbers and can explain the choices. If the producer changes within a cycle, note the handoff. Reliability often depends on that hidden role."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define reliability with three measures: on-time delivery, completeness against the expected fields, and restatement after the review. On-time means the report reached the reviewers before the stated cut-off. Completeness means every required section and source was present. A restatement is a material correction issued after the review.",
          "Separate a late report from a wrong report. A late report can still be accurate, while an on-time report can contain a restated number. Report both so a fast but unstable process is not mistaken for a reliable one. The combination is more informative than either measure alone.",
          "Add a measure for how long a restatement took to reach the reviewers. A quick correction limits the damage, while a late one leaves the wrong number in circulation. Record the time from the review to the corrected version. This measure shows whether the process can recover, not just whether it fails."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the report archive, the review calendar, and the source exports for each cycle. The archive shows what was delivered, the calendar shows the expected date, and the exports show whether the inputs were available. If the report is assembled in a spreadsheet, keep the version that was actually presented. A later edited copy is not evidence of what reviewers saw.",
          "Capture the coverage arrangement, the delivery timestamp, the missing sections, and any restatement. Avoid collecting the reasons as free text without a code. Useful codes include unavailable source, unclear definition, access problem, and late input. The codes make the pattern visible across cycles. A short note beside each code is enough to explain an unusual case.",
          "Keep the source exports for a defined period so a reviewer can reproduce a past report. A report that cannot be rebuilt is hard to defend when a number is challenged. Store the exports with the report version and the cut-off time. The retention period should be long enough to cover the next planning cycle."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Include all cycles in the quarter if the number is small, which is typical for a weekly review. If the organization runs several reviews, sample one per week and keep the same review in the comparison. Record the selection so the result is not biased toward the best-run meeting. If a cycle has no review, exclude it and note the reason.",
          "Have a second reviewer check the completeness coding on a sample of reports. Compare their list of missing sections with the original. Disagreements often reveal an undefined requirement rather than a careless reviewer. Resolve them before analyzing the full set. If the reviewers cannot agree, the requirement is probably not written down.",
          "If the quarter includes a holiday or a major event, mark it and analyze it separately. A missed report during a short week may reflect the calendar rather than the coverage plan. The report should describe the context before drawing a conclusion. Readers will trust a careful exception more than a clean average."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Compare on-time delivery, completeness, and restatement rates for cycles with and without the usual owner. Report counts as well as percentages because a quarter has few cycles. A single missed week can move a percentage by a large amount. The narrative should reflect that small sample.",
          "Look at whether a named backup performs better than a shared queue. A backup with access and a checklist may be more reliable than a team that assumes someone will pick it up. Treat this as an exploratory comparison and check whether the cycles differ in other ways. The result can guide the next coverage plan.",
          "Look at whether the backup had a written checklist, not just access. Access without a sequence often produces a report that is complete in form but missing a source. The checklist is the difference between a warm body and a reliable cover. Record whether the checklist was used in each cycle."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The method cannot separate the effect of leave from a product launch, a system outage, or a change in the review schedule. A quarter with unusual events may say more about the events than about coverage. Note those events and avoid attributing every difference to the absence. A short timeline of major events helps the reader judge the comparison.",
          "Small samples limit precision, and a report that was never delivered may leave no archive to review. Use the review calendar and messages to confirm whether a cycle happened. If the evidence is incomplete, report the gap rather than filling it with an assumption. The finding should be as strong as the record allows.",
          "If the report is produced by a different team during the leave, note the team as well as the person. A cross-team cover may have different definitions and a different review path. Compare within the same team where possible. The coverage arrangement is more than a name on a calendar."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Present the number of cycles, the coverage arrangement, and the three reliability measures in one table. Add a short note on unusual events and data gaps. Avoid naming the person on leave; the subject is the process. A manager should be able to see whether coverage needs a checklist or a named backup.",
          "Choose one change to test, such as a backup checklist or a fixed source-freeze time. Run it for the next several cycles and compare the same measures. If reliability improves, document the arrangement as the standard. If not, inspect whether the backup had real access and time.",
          "Record the owner of the coverage checklist and the date it was last tested. A plan without an owner becomes a document that everyone assumes someone else maintains. Review it before each planned absence. The checklist is part of the operating system, not a one-time favor."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Institute of Standards and Technology, Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "National Institute of Standards and Technology, Security and Privacy Controls",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      },
      {
        "label": "U.S. Census Bureau, Statistics of U.S. Businesses",
        "url": "https://www.census.gov/programs-surveys/susb.html"
      }
    ],
    "internalService": "/services/pipeline-reporting",
    "internalSibling": "/blog/build-a-pipeline-reporting-pack-managers-can-trust"
  },
  {
    "slug": "which-sales-enablement-assets-actually-get-used-after-launch",
    "title": "Which sales enablement assets actually get used after launch?",
    "summary": "A usage study for sales enablement assets that separates opens from application and repeat use.",
    "cluster": "Adoption",
    "publishedAt": "2026-11-06",
    "finding": "Asset usage should be measured at the level of application and repeat use, because opens alone do not show whether enablement changed seller behavior.",
    "thumbnail": "/thumbnails/november-06/which-sales-enablement-assets-actually-get-used-after-launch.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief measures whether the sales enablement assets published for a launch are used in real seller work after the training ends. Usage here means an asset was opened, cited, or attached in a seller workflow, not merely downloaded. The unit is the asset, observed over a defined period. The method separates a launch spike from sustained use.",
          "The scope covers assets released for one product or process launch and the sellers expected to use them. It excludes general brand materials and assets owned by other teams. The output is a usage rate, a repeat-use rate, and a short list of barriers. It is a practical adoption review, not a content quality score.",
          "The review should separate assets that support a required step from assets that are optional reference. A required proposal snippet should be judged by a higher usage standard than a background one-pager. Label each asset by its role before collecting data. The label prevents the team from comparing assets that serve different purposes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "List every asset in the launch package before collection begins. Include the brief, the talk track, the objection guide, the proposal snippet, and the training recording if sellers are expected to use it. Assign each asset a stable identifier. Without a fixed list, the review tends to focus on the assets that are easy to track.",
          "Define the eligible seller group by role and start date. Include new sellers who joined during the observation window and note their start date separately. Exclude sellers who were not expected to use the launch assets. The denominator should match the audience the launch was designed for.",
          "Record whether the seller had access to the asset from the tool they use every day. An asset stored in a separate portal may be invisible during a call even if it is well written. Access is part of adoption and should be captured as context. A usage gap can be a distribution problem rather than a content problem.",
          "If the launch has a formal enablement session, record attendance and the assets shown. A seller who never saw the asset may not know it exists, which is different from choosing not to use it. Compare attendees with non-attendees only when the groups are large enough. The context keeps the usage rate from becoming a verdict on content alone."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define usage with three levels: opened, cited in a seller artifact, and reused in a later opportunity. Opening an asset shows awareness, citing it shows application, and reuse shows habit. Report each level separately because a high open rate can coexist with low application. The distinction keeps the finding honest.",
          "Define a repeat user as a seller who used the asset in at least two separate weeks. A single busy week may reflect a launch push rather than a change in practice. Use the same week boundary for every seller. State whether views by managers or enablement staff are excluded from the seller count.",
          "Add a level for assets that were edited before use. An edit can show engagement, but it can also mean the original did not fit the situation. Review a small sample of edits to see whether sellers are adapting the same section. A repeated edit is a signal to update the source asset."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the content platform's access log, the CRM attachments, and a short seller survey. The access log shows opens, the attachments show citation in real opportunities, and the survey explains barriers that the logs cannot see. Match the sources by seller and week. If the platform does not log unique users, say so and use the best available proxy.",
          "Capture the asset identifier, the seller, the week, the usage level, and the opportunity stage where it was cited. Do not collect the content of seller notes. A short survey question about the biggest barrier is enough to explain the pattern. Keep the data collection light so it does not become a burden.",
          "If the content platform does not distinguish unique users, use the number of seller accounts that opened the asset at least once. State the proxy clearly and avoid treating it as a precise person count. The direction of the trend is still useful if the method is consistent. Precision claims should match the data."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the seller group is large, sample sellers randomly within tenure bands. Include new hires because their usage pattern may differ from experienced sellers. Record the selection and the response rate for the survey. A survey with a low response rate should be reported as context, not as the main finding.",
          "Pilot the usage coding on a small set of assets and sellers. Check whether the same asset is counted twice when it is opened from two links. Resolve duplicates before the full review. A clean asset list and a clear identity rule prevent most counting errors.",
          "Check whether the launch included a manager expectation, such as a review of the asset in a one-to-one. Manager attention can lift usage without improving the asset. Record the expectation and compare teams with and without it. The analysis should not credit the content for a management effect."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Report the share of eligible sellers who used each asset at least once and the share who used it in two or more weeks. Compare the launch month with the following month to see whether use held. A sharp drop suggests the asset was tied to the event rather than the work. A stable rate suggests it became part of the routine.",
          "Look at the stage where each asset was cited. An objection guide that only appears after a deal is lost may be arriving too late, while a discovery brief used early may be working. Pair the usage data with the survey barriers before recommending a change. The combination points to a specific fix.",
          "Look at the assets that were never cited and ask whether they solve a task that sellers actually have. An unused asset may be early, redundant, or simply unknown. The survey should include an open question about what sellers use instead. That answer is often more useful than the usage rate."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Access logs measure clicks, not understanding or quality. A seller can open an asset and still use it poorly. The method also misses assets shared in chat or printed for a call. Treat the usage rate as a lower bound and use the survey to fill the gap. Do not present clicks as proof of behavior change.",
          "The launch itself can distort the result through reminders, manager pressure, or a temporary spike in deal volume. Compare similar periods and note major campaigns. The review should avoid ranking sellers by usage because the opportunity mix affects what each person needs. The subject is the asset, not the individual.",
          "If a launch includes a required certification or training, record whether the seller completed it. Completion can explain usage differences that look like content preference. The review should not assume that a low-use asset was disliked. Context prevents a misleading recommendation. Record the completion source so the reader knows whether it was a system or a self-report."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Report the asset list, the eligible seller count, the usage levels, and the repeat-use rate. Add the top two barriers from the survey and one example of an asset that was cited in a real opportunity. Keep the report short enough for the launch review. The audience should see which assets earned a place in the workflow.",
          "Choose one asset to revise or retire and set a follow-up review after four weeks. Compare the same usage measures and check whether the change reached the sellers. If an asset is not used, ask whether it solves a real task before rewriting it. Usage data is a starting point for that conversation.",
          "Record the owner of each asset decision and the date it takes effect. A revision without an owner can be undone by the next edit. Tell the sellers where the current version lives. The next usage review should show whether the decision reached the work."
        ]
      }
    ],
    "sources": [
      {
        "label": "Cybersecurity and Infrastructure Security Agency, Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials"
      },
      {
        "label": "National Institute of Standards and Technology, Security and Privacy Controls",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      },
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ],
    "internalService": "/services/sales-enablement",
    "internalSibling": "/blog/write-sales-enablement-briefs-that-new-assistants-can-apply"
  },
  {
    "slug": "what-does-a-complete-exception-record-contain-in-prospect-research",
    "title": "What does a complete exception record contain in prospect research?",
    "summary": "A record completeness checklist for prospect research exceptions, with sampling and reporting guidance.",
    "cluster": "Evidence quality",
    "publishedAt": "2026-11-06",
    "finding": "A complete exception record makes the question, evidence, decision, owner, and close condition visible so a later reviewer can follow the reasoning.",
    "thumbnail": "/thumbnails/november-06/what-does-a-complete-exception-record-contain-in-prospect-research.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "An exception record documents a prospect research case that could not follow the normal path. The question is what a complete record must contain so a later reviewer can understand the decision without asking the researcher. The unit is one exception, from the trigger to the resolution. The method defines completeness and tests it on a sample.",
          "The scope covers exceptions raised during account research, such as conflicting sources, missing data, or a request outside the approved scope. It excludes ordinary briefs that followed the standard template. The output is a checklist of required elements and a completeness rate. It is a record design review, not an evaluation of the researcher.",
          "The review should include exceptions that were resolved in conversation if a short note exists. A complete record does not require a long narrative, but it does require the decision to be visible. If the team resolves cases verbally, add a one-line capture step at the end. The record is only as good as the habit that creates it.",
          "If the team has no exception log yet, start with a simple table and the five elements. A plain structure is better than a tool nobody uses. Review the first ten rows with the team before expanding. The habit matters more than the software. Start with the fields the team can fill in a few minutes, then add detail only if it changes a decision."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Define an exception as any research case that was paused, escalated, or completed with a documented deviation. Include cases that were resolved quickly if they still required a judgment. Exclude cases that were cancelled before any research began. The population should reflect the work that actually needed a decision.",
          "Record the trigger date, the researcher, the owner who resolved it, and the close date. If a case was reopened, keep it as one record with a history. Counting a reopened case as a new exception can inflate the volume and hide the original cause. Apply the rule consistently.",
          "If the exception log spans more than one tool, match records by the case identifier and the trigger date. A duplicate entry in two tools can look like two exceptions and distort the volume. Deduplicate before sampling and report the method. The count should reflect the work, not the number of systems."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completeness with five elements: the question, the evidence checked, the decision, the decision owner, and the close condition. A record missing any one of these is incomplete for the purpose of this review. The elements are deliberately small so they can be checked quickly. They also map to the questions a later reviewer will ask.",
          "Separate a complete record from a correct decision. A record can contain all five elements and still document a decision that later proved wrong. The review measures whether the reasoning is visible, not whether the outcome was ideal. That distinction keeps the method useful without pretending to judge judgment.",
          "Add a criterion for timeliness: the record should be closed within the agreed response window or have a documented reason for the delay. Completeness without timeliness can still leave the seller without an answer. The review can report the two measures separately. A record that is complete but late did not help the call."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the exception log and the linked brief or message thread. The log gives the structure, while the linked material shows whether the evidence and decision were actually recorded. If the team works in email, save the thread with the case identifier. A log entry that points to nothing is not a complete record.",
          "Capture the five elements as present or missing, plus a short note for any missing element. Avoid copying sensitive customer details into the review file. Use the case identifier and the record location instead. The review should be able to verify the record without duplicating it.",
          "If the linked evidence contains sensitive customer data, store the review extract separately with access limited to the reviewers. Use the case identifier in the analysis and keep the evidence in the original system. The review does not need to copy the content to judge whether it exists. Data minimization makes the review easier to approve."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Sample exceptions randomly across researchers and trigger types if the volume is large. Include at least one case from each quarter month so a process change is visible. Record the selection method and any exclusions. A sample of only resolved cases will miss the exceptions that are still open and may be the least complete.",
          "Have two reviewers code the first fifteen records independently. Compare their judgments and discuss the differences. If they disagree on whether an element is present, the definition needs an example. Revise the checklist before continuing so the completeness rate is comparable. Keep the coded sheet separate from the evidence so access can be limited.",
          "If the sample has very few exceptions, review all of them and describe the cases rather than reporting a rate. A rate from five records is not stable enough to guide a policy. The narrative can still show which element is usually missing. Small teams should use the review to build the template, not to rank performance."
        ]
      },
      {
        "heading": "Analysis and calculation",
        "paragraphs": [
          "Report the completeness rate for each of the five elements, not only the share of fully complete records. A record can be missing the same element across many cases, which points to a template problem. Rank the missing elements by frequency and by trigger type. The pattern is more actionable than a single score.",
          "Compare records created before and after any template change. If completeness improves, check whether the change was actually used in the cases sampled. If it did not, ask whether the template added fields without improving the decision. The analysis should connect the record design to the work.",
          "Compare the completeness of exceptions raised by different triggers only when the groups are large enough. A pricing exception may require more evidence than a missing-data exception, and that difference is legitimate. The goal is to find triggers that need a different template, not to force one standard onto every case. Group the cases by trigger and report the count for each group."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The method measures what is written down, not what the researcher knew. A complete record can still omit a nuance that mattered, and an incomplete record can reflect a sound decision made in conversation. Use the review to improve documentation, not to reconstruct intent. State this limit clearly.",
          "Sensitive cases may be stored outside the main log, which can bias the sample toward routine exceptions. Note any excluded categories and the reason. If the excluded cases are material, review them separately with the right access controls. The completeness rate should describe the population it actually covers.",
          "If a case was reopened after the close, review the original close condition rather than treating the reopening as a new exception. A weak close condition is a design problem, and the reopening is the evidence. Report the reopening rate separately. That measure shows whether the record actually closed the question."
        ]
      },
      {
        "heading": "Reporting and decisions",
        "paragraphs": [
          "Present the exception count, the five element rates, the top missing element, and one anonymized example of a complete record. Add a recommendation for the template and the review step. Keep the report short enough for an operations meeting. The reader should know exactly which element to fix first.",
          "Set a follow-up review after the next quarter and compare the same elements. If the missing element persists, test a required field or a short checklist at the point of escalation. A record design improves when the fix is tested in the workflow, not only described in a policy. The date should be tied to the next batch of exceptions, not to a general planning cycle.",
          "Record the owner of each template change and the date it takes effect. A change without an owner can be reversed by the next person who edits the file. Tell the researchers where the new version lives. The record should show not only what changed but who is responsible for keeping it."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Internal Revenue Service, Recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      }
    ],
    "internalService": "/services/prospect-research",
    "internalSibling": "/blog/when-to-escalate-a-prospect-research-question-instead-of-guessing"
  }
];

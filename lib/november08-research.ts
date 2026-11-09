import type { ResearchPost } from './types';

export const november08ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "how-much-of-a-sellers-week-goes-to-non-selling-work",
    "title": "How much of a seller's week goes to non-selling work?",
    "summary": "A measurement protocol for separating selling time from preparation, administration, and internal meetings across a representative seller-month.",
    "cluster": "Time allocation",
    "publishedAt": "2026-11-08",
    "finding": "The useful question is not whether non-selling work exists but which parts of it are necessary, because a time share becomes actionable only when preparation, administration, and internal meetings are separated and reported together.",
    "thumbnail": "/thumbnails/november-08/how-much-of-a-sellers-week-goes-to-non-selling-work.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How much of a seller's week is spent on work other than selling? This brief treats the question as a measurement problem rather than a claim about any particular team. The unit is the seller-week, and the goal is a share of time that a manager can defend. The protocol separates selling activity from preparation, administration, and internal meetings. It is designed for a small inside sales team that already keeps a calendar and a CRM.",
          "The scope covers full-time sellers during one representative month. It excludes managers, contractors, and anyone whose primary job is support. The output is a distribution of time shares, not a single benchmark. The method does not assume that all non-selling work is waste. Some of it is necessary, and the report should show which parts are which.",
          "A useful report also states what the team means by a week. Five working days is the default, but a week with a trade show or a holiday may not represent normal operations. Flag those weeks and explain the effect. A reader should be able to tell whether the result describes a quiet month or a peak one."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from every seller who worked the full month. Exclude anyone on leave for more than a week, because a partial month distorts the share. Count each seller once, even if they changed territory during the period. Record the territory and segment so the result can be read in context. A stable population is more important than a large one for this question.",
          "The unit is the seller-week, created by splitting the month into calendar weeks. A week with a public holiday should be flagged rather than dropped. Dropping unusual weeks makes the result look cleaner but hides the real experience. Report the number of weeks included and the number flagged.",
          "Record the seller's start date so a new hire's first month can be reviewed separately. A new seller spends more time learning and less time in live conversations. Pooling that week with a veteran's week hides the onboarding cost. The report can show both the pooled result and the experienced-seller result."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define selling activity as time in direct interaction with a buyer or a qualified prospect. That includes calls, demos, negotiation, and written exchanges that move a specific opportunity. Preparation for a named buyer counts as selling-adjacent and should be reported separately. Internal meetings about a deal do not count as direct selling.",
          "Define administration as CRM updates, reporting, internal coordination, and routine email that is not tied to a buyer conversation. Training and coaching form a third category. Every minute should land in exactly one category, even if the boundary is imperfect. Publish the category definitions before anyone fills in a time log.",
          "Set a rule for multitasking. A call with a buyer while updating the CRM is still selling time, but the update minutes should be counted as administration. Do not split a block into invented percentages. If the categories cannot be separated cleanly, mark the block as mixed and report it separately."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use two sources and compare them. The calendar supplies meetings, focus blocks, and recurring events, while the CRM supplies calls and logged emails. Neither source captures everything, so the method needs a short self-report to fill the gaps. A daily log of five categories is usually enough. Ask sellers to complete it at the end of the day, not at the end of the month.",
          "Do not rely on memory for a monthly reconstruction. Recall tends to overstate productive work and understate fragmented time. Export the calendar in the same time zone for every seller. Check that recurring events are not duplicated by the export. Keep the raw files so the calculation can be repeated.",
          "Use a consistent export window for every seller. A calendar exported at noon misses the afternoon, and a CRM exported on a different day may include late entries. Pull all sources at the end of the period and record the export time. Consistency matters more than the exact hour."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the team is small, measure every seller for the full month. If the team is larger, sample sellers rather than days, because a single day rarely represents a week. Stratify by segment and tenure so the sample is not all senior sellers. Record the selection method and the number of weeks. A convenience sample from one busy week will not answer the question.",
          "Have two reviewers classify one seller-day independently. Compare the categories and discuss every disagreement. If the agreement is poor, the definitions are still too vague. Update the examples and recheck a second day. Report the disagreement rate so readers can judge the precision of the result.",
          "Check for sellers who share a calendar or an assistant. A shared calendar can assign preparation time to the wrong person. Ask each seller to confirm their own events before the analysis starts. A short correction list is better than a silent misallocation."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the median share of time in each category and the range across sellers. The median describes a typical week, while the range shows how different the roles really are. Avoid reporting only the average, because one seller with an unusual calendar can move it. Show the count of weeks behind every percentage.",
          "Break the result down by segment and by week of the month. Pipeline review weeks often look different from the first week. If a category changes sharply at month end, that is a finding worth reporting. Compare the first and second half of the month only if the process stayed stable. A process change should start a new series.",
          "Show the distribution as a simple chart with the median marked. A table of averages invites the reader to compare rows that are not comparable. The chart should use the same scale for every category. Keep the labels plain and avoid a second chart that shows the same data."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The method cannot tell whether non-selling time is necessary or wasteful. A long internal meeting may be the most valuable hour of the week. The share is a starting point for a conversation, not a verdict. State that limit before presenting the number. A reader who forgets it will treat the result as a productivity score.",
          "Calendar data misses interrupted work and informal help. A seller who answers questions all day may look free in the calendar. The self-report partly corrects this, but it adds recall error. Triangulate with a short interview before drawing a conclusion. Note any category that the sources disagree on.",
          "A seller who handles complex deals may spend more time in preparation because the work requires it. That is not a defect in the role. Compare sellers with similar segments before drawing a conclusion. The report should describe the work, not rank the people."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Time logs are internal personnel data. Keep them in the approved storage and restrict access to the analyst and the sales leader. Report categories, not individual seller names, unless the team has agreed otherwise. Small groups should be merged so a single person cannot be identified. Check the retention policy before keeping raw exports.",
          "Do not use the data for performance ranking without a separate conversation. The purpose is to redesign the role, not to grade individuals. Tell participants what will be reported before they start logging. Delete the raw files when the review is complete and keep the summary.",
          "Store the category definitions with the dataset so the next analyst uses the same rules. A definition kept only in a slide will drift within a quarter. Add a version number and a short change note. When the definition changes, start a new series rather than mixing versions."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Choose one change based on the largest correctable category. If administration dominates, test a batch update routine or move the work to an assistant. If meetings dominate, test a shorter agenda or an asynchronous update. Set a follow-up date and measure the same definitions again. One change is easier to evaluate than a package.",
          "Review the result with the sellers who logged the time. They will know which category is mislabeled and which fix is realistic. End the meeting with an owner, a date, and one measure. Write the decision into the team's operating notes. The next measurement should show whether the change moved the share.",
          "Set a review date before the change begins. A follow-up without a date becomes an intention. Put the date in the team calendar and name the person who will run the second measurement. The comparison is the point of the exercise."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Wholesale and Manufacturing Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "U.S. Census Bureau, Statistics of U.S. Businesses",
        "url": "https://www.census.gov/programs-surveys/susb.html"
      }
    ],
    "internalService": "/services/sales-enablement",
    "internalSibling": "/blog/decide-which-sales-tasks-can-move-to-an-assistant"
  },
  {
    "slug": "what-share-of-inbound-leads-get-a-same-day-first-attempt",
    "title": "What share of inbound leads get a same-day first attempt?",
    "summary": "A repeatable audit for same-day lead response that defines an attempt, separates business hours from raw clock time, and reports the missed tail honestly.",
    "cluster": "Response time",
    "publishedAt": "2026-11-08",
    "finding": "Same-day response is only meaningful when the denominator is a deduplicated lead, the clock starts at intake, and an automated acknowledgement is excluded, because those choices decide whether the rate reflects buyer experience or tool activity.",
    "thumbnail": "/thumbnails/november-08/what-share-of-inbound-leads-get-a-same-day-first-attempt.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks what share of inbound leads receive a first attempt on the same business day they arrive. The unit is the lead, and the clock starts when the inquiry reaches the shared queue. The measure is an attempt, not a conversation, because a call that goes unanswered still represents work. The protocol is meant for a team that routes forms, chat handoffs, and calls into one sales queue.",
          "The scope covers one quarter of inbound leads from owned channels. It excludes purchased lists, event scans loaded in batches, and internal test records. The output is a rate by source and by hour band. The method does not claim that a faster attempt always produces a better outcome. It measures responsiveness, not conversion.",
          "The question also has a channel dimension. A chat lead may expect an immediate reply while a form fill may expect a call within hours. Report the rate by channel so the standard matches the buyer's expectation. A single target across channels can hide a weak queue."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from every lead created in the shared queue during the quarter. Deduplicate by contact and company within a short window so one buyer does not appear three times. Count the first inquiry as the unit and link later messages to it. Record the source and the route so the result can be grouped.",
          "Exclude leads that were created by a seller after a referral, because the seller already owns the relationship. Exclude obvious spam and vendor pitches, and keep a list of those exclusions. A stable denominator is more important than a large one. Write the rule before exporting any data.",
          "Record whether the lead was assigned automatically or by a person. Manual assignment can add a delay that looks like seller behavior. Keep the assignment method as a field. The analysis can then separate queue design from seller response."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define the first attempt as a logged outbound call, text, or personal email to the lead. An automated acknowledgement, a marketing newsletter, or an internal note does not count. The attempt must be attributable to a named owner in the sales system. Record the timestamp from the system rather than the seller's memory.",
          "Define the same business day using the service calendar, not a generic twenty-four-hour window. A lead that arrives at nine in the evening may legitimately receive its first attempt the next morning. Report the rate both ways so the reader can see the effect. The business-day version is the one the team should manage.",
          "Decide how to treat a lead that arrives with a requested callback time. If the buyer asks for tomorrow morning, an attempt today may be inappropriate. Record the requested time and exclude it from the same-day rate. Report those leads as a separate group."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the form or chat platform for the lead creation time. Use the dialer and the email log for the first attempt. Use the CRM for the owner and the route. Join the records on the lead identifier created at intake, not on the buyer's name.",
          "Capture the source, the hour band, the route, and the assigned owner. Add a field for whether the lead arrived during staffed hours. Keep the export small enough to audit and specific enough to answer the question. A short data dictionary prevents two analysts from filling a field differently.",
          "Check the clock on the dialer against the CRM. A time-zone mismatch can shift an attempt into the wrong day. Pick one source as the authority and document it. A short test with three known calls will reveal most sync problems.",
          "A simple daily reconciliation is enough to catch most gaps. Compare the number of leads created with the number of first attempts logged. A large difference may mean a routing delay or a missing export. Investigate one day before scaling the audit."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the quarter has fewer than two thousand leads, measure all of them. If it has more, take a random sample within each source and week. Stratify by route and hour band so one campaign does not dominate. Record the selection method and the random seed.",
          "Have two reviewers classify the first twenty attempts independently. Compare their decisions and discuss every disagreement. If the agreement is low, the definition of an attempt is still too broad. Update the examples and keep the old ones in a version note.",
          "If a seller is on leave, exclude their leads from the seller comparison but keep them in the queue rate. The queue still received the lead and still had to route it. Mixing the two views makes the team look better or worse than the buyer experience. Record the leave dates in the dataset so the same exclusion can be applied next quarter."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the same-day rate, the median time to first attempt, and the share that never received an attempt. Show the count behind each percentage. Break the result down by source, route, and hour band. Use the same grouping in the next report so the rows can be compared without a reconciliation.",
          "Report the longest waits as their own group. A team can improve the median by answering the easy leads while leaving a small group untouched. The tail is where the buyer experience is worst. Show the reasons for the misses in a short table.",
          "Report the first-attempt rate for leads that arrived during staffed hours separately from after-hours leads. The two groups have different expectations and different staffing. A combined rate can hide a coverage gap. Use the staffed-hours rate as the primary operational measure."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "A same-day attempt is not the same as a good attempt. A rushed call that ignores the buyer's request can be worse than a thoughtful one the next morning. The rate is a queue signal, not a verdict on quality. State that limit before presenting the number.",
          "Campaign volume, staffing, and time zones can all shift the result. A week with a large promotion will produce more leads than the queue can absorb. Compare similar weeks and note the campaign calendar. If the routing rule changed, start a new series.",
          "A lead may receive an attempt that is not recorded because the seller used a personal phone. The rate will understate the work. Ask the team about off-system calls before presenting the result. If the practice is common, fix the recording before the next measurement.",
          "A queue that is measured daily will change behavior in the first week. That is expected, so compare the first week with the later weeks rather than treating the whole quarter as one stable period. A sustained improvement is more convincing than a one-week spike. Report the trend so the reader can see the difference."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "The dataset contains contact details and message timing. Keep the export in the approved storage and limit access to the analyst and the queue owner. Report counts and routes, not buyer names. Check the retention period before keeping raw records.",
          "Remove message bodies unless a reviewer needs them to classify an attempt. Do not include screenshots of individual conversations in the report. Delete the raw file when the review is complete and keep the summary. Log the deletion date beside the summary so the retention rule is easy to audit.",
          "Keep the lead identifier out of any shared slide. Use counts and rates in the presentation and keep the record-level file in the approved folder. A screenshot of a queue can reveal buyer names. Blur or avoid it."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Use the result to choose one change, such as adding coverage in a specific hour band or simplifying a route. Set a follow-up date and measure the same definition again. If the median improves but the tail does not, the change helped the easy leads. If the rate does not move, revisit the route before changing the target.",
          "Review the result with the queue owner and one seller. End the conversation with an owner, a date, and one measure. Write the decision into the queue guide. The next measurement should show whether the change moved the rate.",
          "Share the result with the people who answer the queue before the sales leader sees it. They will spot a definition problem faster than a manager. Give them a chance to correct the data. Then present one change and one date."
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
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "internalService": "/services/sales-follow-up",
    "internalSibling": "/blog/set-a-service-level-for-inbound-sales-voicemail"
  },
  {
    "slug": "how-often-do-crm-records-lack-a-next-step-after-a-meeting",
    "title": "How often do CRM records lack a next step after a meeting?",
    "summary": "A meeting-level audit that separates a logged outcome from a dated action with an owner, so teams can see the real follow-through gap.",
    "cluster": "Follow-through quality",
    "publishedAt": "2026-11-08",
    "finding": "A meeting outcome and a next step are different records, and teams that count only logged meetings will overstate follow-through because a recap can be complete while the dated action is still missing.",
    "thumbnail": "/thumbnails/november-08/how-often-do-crm-records-lack-a-next-step-after-a-meeting.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how often a completed sales meeting leaves a documented next step in the CRM. The unit is the meeting record, not the opportunity. A meeting can be logged with an outcome and still lack a dated action owned by a person. The protocol separates those two states so a team can see the real follow-through rate.",
          "The scope covers external meetings with a buyer during one quarter. It excludes internal meetings, cancelled events, and meetings that were never logged. The output is a rate by meeting type and by seller. The method does not judge whether the meeting was good or whether the buyer was ready.",
          "The question also applies to internal handoff meetings. A pipeline review can end with a clear owner and no dated action. The protocol can be reused there with a different meeting type. Keep the definitions the same so the results can be compared.",
          "The measure also works for a single team that wants to improve its own notes. Start with ten meetings from one seller and read the records together. The conversation is often more valuable than the rate. Then expand to the full team."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from calendar events that include at least one external attendee and a matching CRM activity. A recurring series counts each occurrence as a separate meeting. If a meeting was rescheduled, count the occurrence that actually took place. Record the match method so the denominator can be rebuilt.",
          "Exclude meetings that were booked but never held. Exclude events where the seller was only an optional attendee. Keep a list of ambiguous matches and resolve them before the count. A meeting that cannot be matched should be reported as a data gap, not quietly dropped.",
          "Record the meeting owner as the person who scheduled it. That is not always the person who wrote the note. A mismatch can explain a missing next step. Keep both fields if the team works that way."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a documented next step as a dated action with a named owner and a specific outcome. The action must be visible in the CRM or a linked task system. A note that says follow up is not enough because it has no date or owner. The definition should be applied the same way to every meeting type.",
          "Separate the meeting outcome from the next step. An outcome describes what happened, while a next step describes what will happen. A meeting can have a clear outcome and no next step. Report both so the reader does not confuse a well-written recap with follow-through.",
          "A next step can be conditional, such as send the security review after the buyer confirms the environment. Record the condition as part of the action. A conditional action with no trigger is still incomplete. The reviewer should be able to see what has to happen first."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the calendar for the meeting time and attendee list. Use the CRM for the activity record, the outcome, and the next-step fields. Use the task system for the dated action when the team works outside the CRM. Join on the meeting identifier or the opportunity and date.",
          "Capture the meeting type, the seller, the opportunity stage, and whether the meeting was a first call or a later review. Add a field for the next-step date and owner. Keep the collection sheet consistent across sellers. A short data dictionary is part of the method.",
          "Check that the CRM activity is linked to the right opportunity. A meeting logged on the wrong record will look like a missing next step on the right one. Sample a few links before the full count. A simple join error can produce a dramatic but false finding.",
          "A short validation sample can confirm the join before the main analysis. Pull five meetings that you know took place and check whether the activity, the opportunity, and the next step all appear. Fix the join rule if any of the five are missing. This step prevents a confident but wrong denominator."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Sample meetings across sellers and meeting types rather than only the most recent week. A first call and a proposal review have different follow-through patterns. If the volume is large, sample within each stratum. Record the sample size for every group.",
          "Have two reviewers classify ten meetings independently. Compare whether they agree on the presence of an outcome, a next step, an owner, and a date. Discuss the disagreements and refine the examples. Report the agreement rate beside the main finding.",
          "If the team uses a shared inbox, the next step may live in an email thread rather than the CRM. Add the thread check to the collection. Report the result both with and without that source. The difference shows how much the CRM understates the work."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the share of meetings with any outcome note and the share with a complete next step. The gap between the two rates is the follow-through gap. Show the count behind each percentage. Keep the meeting-type labels identical in the next quarter so the series stays comparable.",
          "Break the result down by meeting type and by seller tenure. A new seller may need a template while an experienced seller needs a reminder. Look at the age of the missing next steps as well. A missing step from yesterday is different from one from three weeks ago.",
          "Show the number of meetings per seller so a low rate is not confused with a low volume. A seller with three meetings can look better or worse by chance. The count makes the comparison honest. Use a table rather than a ranked chart.",
          "Use a consistent definition of a meeting across the quarters. If the team starts logging webinars as meetings, the rate will change for reasons unrelated to follow-through. Note the definition version. A break in the series should be visible."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Some next steps live in email or a shared document and never reach the CRM. The rate will understate follow-through when that happens. A short interview with two sellers can reveal where the work actually lives. Note the gap rather than assuming the CRM is complete.",
          "A meeting may intentionally end without a next step, such as a discovery call that disqualifies the buyer. The record should still say so. The measure is about documentation, not about forcing activity. State that limit in the report.",
          "A missing next step may be appropriate when the buyer asks for no follow-up. Record that request as the outcome. It is still a documented decision even though it is not a future action. The measure should not punish a clear no. A clear no is useful evidence, not a gap in the data."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Meeting notes can contain commercially sensitive information. Keep the export in approved storage and restrict access to the analyst and the sales leader. Report rates by meeting type, not by buyer name. Remove free-text notes that are not needed for classification.",
          "If the sample includes recorded calls, follow the team's consent and retention rules. Do not quote a buyer in a report without permission. Delete the raw files when the review is complete. Note the deletion in the method section so the next reviewer knows the raw files are gone.",
          "If the export includes calendar titles, remove client names before sharing. Calendar titles often contain more detail than the CRM. Use the opportunity identifier in the working file. Keep the report at the meeting-type level."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Choose one fix based on the pattern. If first calls lack next steps, add a required field to the call template. If later reviews lack owners, change the review checklist. Set a follow-up date and measure the same definition.",
          "Review the result with the sellers who were sampled. They will know whether the record is missing or the work is missing. End with an owner and a date. Write the decision into the meeting guidance.",
          "Test the template change on the next ten meetings before rolling it out. A required field can be added in a minute but ignored in practice. Check whether the field is completed and whether the action is real. Then expand."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Census Bureau, Statistics of U.S. Businesses",
        "url": "https://www.census.gov/programs-surveys/susb.html"
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/audit-crm-notes-for-the-next-seller-who-reads-them"
  },
  {
    "slug": "how-consistent-are-lead-scores-between-reviewers",
    "title": "How consistent are lead scores between reviewers?",
    "summary": "A small inter-rater agreement study for manual lead scoring, with a rubric, a sampling plan, and honest limits about reliability versus validity.",
    "cluster": "Scoring quality",
    "publishedAt": "2026-11-08",
    "finding": "A lead score can be repeatable without being right, so a team must measure agreement on each scoring dimension before treating the score as a routing decision.",
    "thumbnail": "/thumbnails/november-08/how-consistent-are-lead-scores-between-reviewers.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how consistently two reviewers assign the same lead score when they use the same rubric. The unit is the lead-review pair, and the question is about agreement rather than accuracy. A rubric can be reliable and still wrong, so the two ideas must be kept apart. The protocol is designed for a team that uses a manual or semi-manual score before routing.",
          "The scope covers active inbound leads scored by two trained reviewers during one month. It excludes duplicates, incomplete records, and leads that were scored after a conversation. The output is an agreement rate and a list of the dimensions that cause disagreement. The method does not estimate revenue or seller performance.",
          "The question is not whether the reviewers like the lead. It is whether the rubric gives them the same answer from the same evidence. That distinction keeps the exercise from becoming a debate about taste. A short written standard is the only way to compare.",
          "A team can use the same design to test a new rubric before it goes live. Run the old and new versions on the same leads with different reviewers. Compare the agreement and the reasons. That is a stronger test than a manager's opinion."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the list from leads that entered the queue during the month and had enough information for a score. Randomly assign each lead to two reviewers. Reviewers should not see each other's scores or discuss the lead before submitting. Record the assignment so the pairing can be audited.",
          "Exclude leads that were already worked by a seller, because the conversation changes the evidence. Exclude records with missing firmographic fields. Keep the exclusion list with the dataset. A stable rule keeps the sample from drifting toward the easiest records.",
          "Keep the two reviews independent even when the reviewers sit together. A quick comment can anchor the second score. Use separate sheets or a form that hides the first response. Independence is the core of the method."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define the dimensions in advance, such as fit, timing, authority, and need. Use a small scale, such as zero to two, for each dimension. Define what each point means with an example. The total score should follow a published formula rather than reviewer judgement.",
          "Define agreement as an exact match on the total band, or a match within one point on a dimension. Report both because exact agreement is harsher and more informative. Do not collapse the scale after seeing the data. The definition should be written before the first lead is scored.",
          "Decide how to handle a dimension with no evidence. Use a separate code such as unknown rather than forcing a zero. Forcing a score turns missing data into a false signal. Report the unknown rate beside the agreement rate.",
          "Write the rubric so a reviewer can point to the evidence for each score. A score without a note cannot be reviewed. The note does not need to be long, but it should name the source. That requirement also improves the training examples."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use a scoring sheet that captures each dimension and a short reason. Link the sheet to the CRM record so the evidence can be checked. Capture the reviewer identifier and the timestamp. Keep the sheet free of the other reviewer's score.",
          "Use the same rubric version for every review. If the rubric changes during the month, start a new sample. Record the version on every sheet. A mixed-version sample cannot answer the question cleanly.",
          "Pilot the sheet with five leads before the full sample. Fix any field that reviewers interpret differently. A small pilot is cheaper than rescoring sixty leads. Keep the pilot records out of the main sample."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Sixty leads with two reviews each is a reasonable starting sample for a small team. Increase the sample if the agreement is close to the decision threshold. Stratify by source and segment so one type of lead does not dominate. Record how the leads were selected.",
          "Calculate percent agreement for the total band and for each dimension. If the team is familiar with the method, calculate a chance-corrected statistic as well. Do not report the statistic without the raw agreement. A single number can hide which dimension is failing.",
          "A chance-corrected statistic can look impressive on a small sample. Report the confidence interval or the raw counts so the reader can judge. Do not compare two statistics from different samples without saying so. The raw agreement is the anchor."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the agreement rate by dimension, by reviewer pair, and by lead source. A low agreement on fit may mean the definition is unclear, while a low agreement on timing may mean the evidence is missing. Show the pattern rather than only the total. Keep the dimension labels identical across reports so a trend is not confused with a rename.",
          "Review the leads where the reviewers disagreed by two points or more. These are the cases that change a routing decision. Read the reasons and group them into a short list of causes. That list is more actionable than the overall rate.",
          "Look for a pattern in the reviewer pairs. If one pair disagrees more than others, the issue may be training rather than the rubric. If every pair disagrees on one dimension, the rubric is the problem. The pattern tells you where to intervene.",
          "If a dimension has very low agreement, remove it from the total until it is fixed. A noisy dimension adds error to the routing decision. A shorter rubric with reliable dimensions is better than a complete one nobody applies consistently. Document the removal and test the shorter rubric on a fresh sample."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "Agreement does not prove the rubric predicts a good outcome. Two reviewers can agree on a score that is consistently wrong. The method measures consistency, not validity. State that limit clearly.",
          "Reviewer training and fatigue can affect the result. A sample scored at the end of a long day may look different from one scored in the morning. Randomize the order and keep the session short. Note any training that happened during the sample.",
          "A rubric can be reliable for the wrong reason if reviewers share an unspoken bias. Agreement does not detect a shared error. Compare a few high and low scores with actual outcomes. That check is outside the reliability study but important.",
          "Ask reviewers to flag the lead that took the longest to score. Those records often reveal a field that is hard to interpret. Review three of them together and add the examples to the rubric. The slow cases are a better guide than the easy ones."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Lead scores include firmographic and contact data. Keep the scoring sheets in approved storage and restrict access. Report aggregate agreement, not individual reviewer performance. Remove names and contact details from the analysis file.",
          "Do not use the result to rank reviewers. The purpose is to improve the rubric and the training. Tell participants how the data will be used before they start. Delete the raw sheets after the summary is approved.",
          "Store the assignment list separately from the scores so the pairing can be audited without exposing the reviewers. Use a random identifier for each reviewer in the analysis file. Keep the key in the approved folder. Review the key only when an audit requires it, then return it to the approved folder."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "If agreement is low, rewrite the examples before changing the scale. Most disagreements come from a definition that sounds clear but is not. Run a second sample with the revised examples. Compare the new agreement with the old one.",
          "If agreement is high but routing outcomes are poor, the rubric may be measuring the wrong things. Review a few accepted and rejected leads with the sales leader. Decide whether to change a dimension or a threshold. Record the decision and the next test date.",
          "Set a target for the next sample rather than a vague goal. For example, aim for a higher agreement on the dimension with the lowest score. Measure the same way. A specific target makes the training testable."
        ]
      }
    ],
    "sources": [
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "U.S. Bureau of Labor Statistics, Wholesale and Manufacturing Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/write-a-lead-routing-rule-for-shared-territories"
  },
  {
    "slug": "what-share-of-discovery-calls-produce-a-mutual-action-plan",
    "title": "What share of discovery calls produce a mutual action plan?",
    "summary": "A call-level measure of shared next steps, with a clear definition of mutual, a sampling plan, and guidance for reporting the seller-only middle group.",
    "cluster": "Meeting quality",
    "publishedAt": "2026-11-08",
    "finding": "A recap is not a mutual action plan, and counting only the documents a seller sends will hide whether the buyer actually agreed to a date and a step of their own.",
    "thumbnail": "/thumbnails/november-08/what-share-of-discovery-calls-produce-a-mutual-action-plan.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks what share of discovery calls end with a mutual action plan that both sides can see. The unit is the completed discovery call. A mutual action plan names the buyer's next step, the seller's next step, and the date for each. The measure is about a shared artifact, not a polite recap email sent after the call.",
          "The scope covers first discovery calls with a qualified prospect during one quarter. It excludes demos, internal calls, and calls that were rescheduled before they happened. The output is a rate by seller and segment, with a short list of reasons a plan was absent. Report the reason list beside the rate so the number has context.",
          "The question also applies to renewal and expansion calls. The artifact is the same even when the labels differ. Use the same definition so the team can compare a first discovery with a later review. The context changes, but the mutual commitment does not.",
          "The measure is useful even when the team does not use the phrase mutual action plan. Call it a shared next step if that fits the culture. The definition matters more than the label. Use the same language in training and review."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from calendar events marked as discovery and matched to a CRM opportunity. Count the call once, even if it produced several follow-up tasks. If the same buyer had two discovery calls, count both only if they covered different problems. Record the rule in the collection sheet.",
          "Exclude calls where the buyer explicitly ended the process. A plan is not required after a clear no. Exclude calls with no external attendee. Keep a list of ambiguous records and resolve it before the count. Record the exclusion reason for every removed call.",
          "Record whether the call was inbound or outbound. An inbound buyer may arrive with a clearer next step, while an outbound buyer may need more time. Report the two groups separately. A combined rate can hide the difference.",
          "Record whether the prospect was previously known to the company. A warm relationship can make a mutual plan easier to agree. A cold prospect may need a different call structure. Report the two groups separately so the practice is not judged on the easiest cases."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a mutual action plan as a shared document or message that lists both parties' steps and dates. The buyer must have seen it, not just the seller's internal notes. A recap that only summarizes the conversation does not count. A plan with only seller steps does not count as mutual.",
          "Define the end of the call as the point when the calendar event ends. A plan created two days later can still count if it was sent and acknowledged within the team's stated window. Record the window in advance. The definition should not change after the data is reviewed.",
          "A plan can be mutual without being long. Two steps and two dates are enough. Do not reward a long document that the buyer never reads. The test is whether both parties know what happens next."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the calendar for the call list and the CRM for the opportunity. Use the shared document or email thread for the plan. Capture whether the buyer replied or edited the plan. A plan that was sent but never opened is weaker evidence than one the buyer commented on.",
          "Capture the seller, the segment, the opportunity stage, and the call date. Add a short reason when no plan exists. Keep the reason list small, such as no next step agreed or buyer declined. A free-text field alone will not support a count.",
          "Capture the date the plan was shared and the date the buyer responded. The gap between them is part of the measure. A plan sent after the call but never acknowledged is not mutual. Use the response date, not the send date."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Sample calls across sellers and segments rather than taking the most recent week. A first call with a small account may behave differently from one with an enterprise buyer. Record the sample size for each group. If the volume is small, measure all calls.",
          "Have two reviewers classify ten calls independently. Compare whether they agree that a plan exists and that it is mutual. Discuss the disagreements and update the examples. Report the agreement rate so the reader can judge the definition.",
          "Check that the reviewers are not scoring the seller's enthusiasm. A friendly call can feel mutual without a commitment. Read the plan, not the tone. The artifact is the evidence.",
          "If the reviewers disagree about whether a buyer step is real, read the buyer's reply rather than the seller's summary. The buyer's own confirmation is the strongest evidence. Update the examples with one clear case and one borderline case. Use the same examples in the next reviewer session so the standard does not drift."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the share of calls with a mutual plan, the share with a seller-only plan, and the share with no plan. The middle group is often the most useful because it shows where the seller did the work alone. Show the count behind each rate. Keep the three groups visible in every table so the middle group is not lost.",
          "Break the result down by segment and by seller. Look at whether buyer steps appear as often as seller steps. A plan with only seller commitments is a task list, not a mutual plan. Report that distinction separately.",
          "Report the share of plans that were updated after the call. A plan that changes once the buyer engages is often stronger than one that never moves. An updated plan shows the buyer actually used it. That is a useful secondary measure."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "A plan can exist in a format the team did not capture, such as a verbal agreement or a buyer's own document. The rate will understate the behavior when that happens. Ask two sellers where their plans usually live before finalizing the data source. Name the source of the plan before you count it.",
          "A plan is not proof that the deal will advance. The method measures a practice, not an outcome. Do not present the rate as a forecast. State that limit in the summary.",
          "A buyer may have an internal process that forbids sharing a plan. The team can still document the steps internally and confirm them verbally. Record the constraint rather than marking the call a failure. The method should distinguish a practice gap from a policy limit.",
          "Do not compare a team that sells a complex enterprise product with one that sells a simple subscription. The plan format and the buyer's approval process differ. Compare within similar segments. A cross-segment comparison invites the wrong conclusion."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Shared plans may contain pricing, timelines, and contact details. Keep the export in approved storage and restrict access. Report aggregate rates, not buyer names. Remove the document links from the analysis file before sharing.",
          "If a plan is quoted in the report, ask for permission and use a short excerpt. Do not include a screenshot of a buyer's workspace. Delete the raw files when the review is complete. Log the deletion date with the summary so the retention check is quick.",
          "Shared documents often contain pricing and names. Use a redacted copy for the review. Do not store the buyer's document in a personal drive. Follow the team's data handling rules.",
          "If the plan is stored in a tool the analyst cannot access, ask the seller for an export rather than a screenshot. An export preserves the dates and the buyer's response. A screenshot loses both. Keep the export in the approved folder."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "If the rate is low, give sellers a one-page template with two columns and dates. Test it on the next ten calls. If plans exist but are seller-only, add a prompt that asks for the buyer's next step before the call ends. Test the template on calls from more than one seller before rolling it out.",
          "Review the result with the sales leader and one seller. Choose one change and set a follow-up date. Write the change into the discovery call guidance. The next sample should show whether the plan rate moved.",
          "If the plan rate improves but the deal rate does not, the plan may be too generic. Review two plans with a seller and ask what the buyer actually committed to. Refine the template. Measure again."
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
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/build-a-discovery-call-prep-sheet-that-survives-a-schedule-change"
  },
  {
    "slug": "how-many-touches-does-a-stalled-opportunity-need-before-a-decision",
    "title": "How many touches does a stalled opportunity need before a decision?",
    "summary": "A stalled-opportunity study that defines a touch and a decision, counts both honestly, and shows why more activity is not the same as better judgment.",
    "cluster": "Pipeline discipline",
    "publishedAt": "2026-11-08",
    "finding": "Touch counts become useful only when they are paired with the share of stalled opportunities that ever receive a recorded decision, because activity without a decision is the failure the measure is meant to expose.",
    "thumbnail": "/thumbnails/november-08/how-many-touches-does-a-stalled-opportunity-need-before-a-decision.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how many touches a stalled opportunity receives before someone records a keep, pause, or close decision. The unit is the stalled opportunity, not the individual touch. The question matters because an opportunity can absorb unlimited activity without ever producing a decision. The protocol defines a touch, a stall, and a decision so the count is comparable.",
          "The scope covers opportunities with no buyer response for thirty days during one quarter. It excludes closed-won and closed-lost records, and it excludes opportunities that were never active. The output is a distribution of touch counts and the share that never received a decision. State the window in the report title so the reader knows what thirty days means.",
          "The count also depends on how the team defines a stall. A thirty-day window is a convention, not a universal rule. A long enterprise cycle may need a longer window. State the choice and apply it consistently.",
          "The choice of a thirty-day window should match the sales cycle. A team with a six-month cycle may need sixty days. A transactional team may need fourteen. The number should be stated with the result so the reader can interpret it."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from opportunities whose last buyer activity was at least thirty days before the export. Use the last inbound message or meeting, not the last seller activity. Record the date of that last buyer activity as the start of the stall. A stall based on seller activity alone will misclassify busy opportunities.",
          "Count each opportunity once, even if it has several contacts. If a contact changed, note it but keep the opportunity as the unit. Exclude duplicates created by a CRM sync. A stable unit is necessary before comparing teams.",
          "Record whether the opportunity has a future close date. A stalled record with no date is different from one with a date that keeps moving. The first needs a qualification review, while the second needs a date conversation. Report them separately.",
          "A record with no buyer activity at all is not the same as one that went quiet after a meeting. The first may never have been qualified, while the second had a real conversation. Separate the two groups before counting touches. The decision rule may differ for each."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define a touch as a meaningful outbound attempt through a real channel, such as a call, a personal email, or a message the buyer can reply to. Automated sequences count only when a person reviewed the message. A CRM note without an outbound action does not count. Record the channel beside every touch so the mix can be reported.",
          "Define a decision as a documented keep, pause, or close with an owner and a date. A stage change without a reason is not a decision. A decision to keep should include the next review date. The definitions should be applied by two reviewers to a small set before the full count.",
          "A touch that reaches the wrong contact is still a touch, but it is not a meaningful attempt. Record whether the contact was verified. A high count of bounced emails is activity without communication. The distinction matters for the decision rule.",
          "Record the channel for each touch so a call-heavy record is not compared directly with an email-only record. The mix changes the effort and the buyer's experience. Report the channel mix beside the count. A team that relies on one channel may need a different rule."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the CRM for the opportunity and the activity timeline. Use the dialer and email log to confirm the channel and the timestamp. Use the task system for the decision record when it lives outside the CRM. Join on the opportunity identifier.",
          "Capture the stall start date, the touch count, the last touch date, and whether a decision exists. Add the reason for the decision when it is recorded. Keep the collection sheet narrow so the count does not become a full pipeline audit. Use the same fields for every opportunity so the count is comparable.",
          "Check the CRM for duplicate opportunities before counting. A duplicate can double the touches and distort the distribution. Merge them or flag them before the analysis. Keep a record of the merges."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "If the stalled population is small, measure all of it. If it is large, sample within segment and owner. Stratify so one enterprise seller does not dominate the result. Record the selection method and the sample size.",
          "Have two reviewers count touches for ten opportunities independently. Compare the counts and discuss any difference. A disagreement often reveals an automated message that one reviewer counted. Update the rule and recheck.",
          "If the team uses sequences, count the sequence as one touch unless a person edited the message. A fully automated sequence is not the same as a personal attempt. The rule should be written down before the reviewers start. Apply the same sequence rule to every record in the sample.",
          "Record the reviewer's confidence for each count. A count based on a clear timeline is different from one based on a reconstructed note. Report the share of records with low confidence. That share limits how much weight the finding can carry."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the median and the range of touches before a decision. Also report the share of stalled opportunities with no decision at all. The second number is often the more important one. Show both numbers in the summary so the reader sees the decision gap.",
          "Break the result down by segment, owner, and stall length. An opportunity stalled for ninety days may receive more touches simply because more time has passed. Show the touch rate per thirty days as well as the raw count. Use the same denominator for every segment so the rates add up.",
          "Show the share of opportunities that received a decision within the quarter. A long tail of undecided records is a management problem, not a seller problem. The chart should make that visible. Report the count behind the share so a small group is not overread."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "More touches are not automatically better. A high count can mean persistence or it can mean the team is avoiding a decision. The method cannot tell the difference without reading the messages. Sample a few records to understand the pattern.",
          "Buyer behavior and market timing can change the result. A quarter with a holiday or a product transition may produce different stalls. Compare similar periods and note the context. Do not attribute the count to seller effort alone.",
          "A stalled opportunity may be waiting on the buyer, not the seller. The touch count cannot see the buyer's silence. Read a small sample of threads to understand the context. Do not turn the count into a performance score.",
          "If a seller inherits a stalled opportunity from someone else, the touch count includes work they did not start. Record the handoff date. A fair comparison separates inherited stalls from those the current owner created. Record the date of the inheritance so the current owner's work is separated."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "The dataset contains commercial and contact information. Keep it in approved storage and restrict access. Report counts by segment, not by buyer name. Remove message bodies unless a reviewer needs them for classification.",
          "Do not use the count to rank individual sellers without a separate review. The purpose is to design a decision rule, not to score persistence. Tell the team how the data will be used. Delete the raw export after the summary.",
          "The export may include notes about the buyer's budget or personal situation. Remove those details from the analysis file. Report the pattern, not the story. Keep the approved storage rule in mind."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "Use the result to set a decision point, such as a review after a stated number of touches or days. The point should trigger a conversation, not an automatic close. Give the owner a short checklist for the decision. Name the owner of the checklist in the pipeline guide.",
          "Review the rule after one quarter and compare the share of decisions with the previous period. Change one variable at a time. Write the rule into the pipeline guide so the next seller sees it. Set the next review date before closing the meeting.",
          "Pilot the decision point with one seller before applying it to the team. A rule that works in theory may be too rigid in practice. Ask the seller what they would change. Then write the version that the team can actually use.",
          "Keep a short note on how each stalled record was resolved. The note helps the next reviewer understand whether the decision was a close, a pause, or a reassignment. It also shows whether the rule is being applied. A simple code is enough."
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
        "label": "U.S. Census Bureau, Statistics of U.S. Businesses",
        "url": "https://www.census.gov/programs-surveys/susb.html"
      }
    ],
    "internalService": "/services/pipeline-reporting",
    "internalSibling": "/blog/create-a-weekly-pipeline-hygiene-routine-for-a-small-team"
  },
  {
    "slug": "what-does-an-assistant-handoff-cost-in-calendar-time",
    "title": "What does an assistant handoff cost in calendar time?",
    "summary": "A four-week time study for briefing, review, and rework in an assistant handoff, with a baseline comparison and a clear break-even question.",
    "cluster": "Delegation economics",
    "publishedAt": "2026-11-08",
    "finding": "A handoff saves time only when the owner's briefing, review, and rework minutes are lower than the baseline for the same task, and the pilot should report that difference as a range rather than a promise.",
    "thumbnail": "/thumbnails/november-08/what-does-an-assistant-handoff-cost-in-calendar-time.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks what an assistant handoff costs in calendar time for the accountable owner. The unit is the handoff, defined as one task moving from the owner to the assistant and back for review. The cost includes the briefing, the review, and the rework, not just the task itself. The protocol is for a team that wants to know whether delegation is actually saving time.",
          "The scope covers handoffs during a four-week pilot. It excludes tasks that were never reviewed and tasks that the assistant could not start. The output is a distribution of owner minutes per handoff and a simple break-even comparison with the baseline week. State the baseline source in the summary so the reader can judge the comparison.",
          "The question also applies to a handoff between two people, not only to an assistant. The same briefing and review costs appear whenever work changes hands. The protocol can compare the two arrangements. Keep the definition of a handoff identical.",
          "The protocol can also compare two assistants or two task types. Use the same time-log categories and the same baseline method. Do not compare a task with a clear checklist to one with an ambiguous brief. The difference will swamp the assistant comparison."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Build the population from every task that moved to the assistant during the pilot. Count a repeat handoff separately only when it carried new instructions. A simple correction within the same review is part of the original handoff. Record the task type and the owner.",
          "Exclude one-off tasks that were never intended to repeat, because they do not represent a delegable workflow. Exclude time spent hiring or onboarding the assistant. Those costs matter but belong in a separate calculation. Keep the onboarding record separate from the pilot so the two costs are not mixed.",
          "Record whether the task was new or recurring. A new task carries more briefing time in the first cycle. A recurring task should become cheaper as the guide improves. Report the first cycle separately from later cycles."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define owner time as active minutes spent briefing, reviewing, and correcting the output. Waiting time is recorded separately because it affects cycle time but not the owner's calendar. Use a short time log completed on the same day. A calendar estimate alone will miss the short interruptions.",
          "Define the baseline as the owner's active minutes for the same task in the week before the pilot. If no baseline exists, use the owner's estimate and label it as an estimate. Do not compare a measured handoff with a guessed baseline without saying so. Label every estimate in the dataset so the report distinguishes measured and guessed minutes.",
          "Count the time spent writing the brief, not only the meeting used to explain it. A written brief can take longer upfront and save time later. Record both the first version and the updates. The total is the honest cost.",
          "Include the time spent updating the guide after a review. A guide that improves should reduce future briefing time, but the update itself costs minutes. Record it in the first cycle and in later cycles. The trend is more useful than a single total.",
          "Decide whether to count the owner's time spent answering a quick question during the week. Those minutes are part of the handoff even when they happen outside the review. Add a small category for informal help. Otherwise the cost will look lower than it is."
        ]
      },
      {
        "heading": "Data sources and collection",
        "paragraphs": [
          "Use the task tracker for the handoff timestamps and the owner. Use a short time log for the active minutes. Use the calendar for the review meetings when they are separate events. Join on the task identifier.",
          "Capture the task type, the number of review rounds, and whether rework was needed. Add a short reason for the rework, such as missing source or unclear instruction. Keep the categories small enough to count. Use the same categories for every task type so the rows can be compared.",
          "Use a timer rather than a calendar block for active minutes. A thirty-minute block may contain five minutes of work. The timer is more accurate and less burdensome than a detailed diary. Ask for a simple start and stop."
        ]
      },
      {
        "heading": "Sampling and reliability",
        "paragraphs": [
          "Measure every handoff during the four-week pilot if the volume is manageable. If not, sample within task type and week. Record the selection method. A sample from the last week alone will miss the learning curve at the start.",
          "Have two reviewers classify ten handoffs independently. Compare the minutes and the rework classification. A large difference means the time log needs a clearer definition. Report the disagreement and refine the guide.",
          "Check whether the handoff volume is stable across the four weeks. A pilot that starts with ten tasks and ends with two cannot be compared week to week. Report the volume by week. If it changes, explain why.",
          "If fewer than ten handoffs occurred, report the result as a case series rather than a rate. A small number can illustrate the cost but cannot support a general claim. Say so in the summary. The next pilot can increase the volume."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the median owner minutes per handoff and the share of handoffs that needed rework. Show the count behind each figure. A median is more useful than an average when one difficult handoff takes an hour. Report the count beside the median so the reader can see the sample size.",
          "Compare the handoff cost with the baseline for the same task. Report the difference as a range rather than a single number. If the handoff costs more than the baseline, say so. Delegation is not automatically a saving.",
          "Report the share of handoffs that required more than one review round. That number often explains a high median. A single round is the target, not a rule. Show the distribution as well as the median.",
          "Show the cost for the first week and the last week side by side. A falling cost suggests the guide is working, while a flat or rising cost suggests the handoff is still fragile. Do not pool the weeks before looking at the trend. The comparison is the useful part."
        ]
      },
      {
        "heading": "Limits and confounders",
        "paragraphs": [
          "The pilot may show a novelty effect in either direction. The owner may review more closely at the start, or may relax too quickly. Four weeks is enough to see a pattern but not enough to prove a long-term saving. State that limit.",
          "Unreported interruptions and informal questions can hide part of the cost. Ask the owner to note any help given outside the formal review. A short interview at the end can surface what the log missed. Keep the interview notes with the summary so the context is not lost.",
          "A handoff can save calendar time but add waiting time. The owner may spend fewer minutes while the buyer waits longer. Report both measures. A faster owner process that slows the customer is not an improvement.",
          "Check whether the owner's saved time was reinvested in selling or absorbed by other work. A saving that disappears into meetings is not a productivity gain. Ask the owner where the time went. Record the answer as context, not as a metric."
        ]
      },
      {
        "heading": "Privacy and handling",
        "paragraphs": [
          "Time logs are internal personnel data. Keep them in approved storage and report aggregates, not individual performance. Do not use the pilot to rank the assistant or the owner. Tell participants what will be shared before they start.",
          "Delete the raw logs after the summary is approved. Keep the task categories and the method so the next pilot can be compared. Record the deletion date so the retention rule can be checked. Store the summary in the same approved folder as the pilot notes.",
          "The assistant may see customer data during the handoff. Keep the access limited to what the task needs. Record the data source in the task guide. Remove access when the pilot ends."
        ]
      },
      {
        "heading": "Decisions and follow-up",
        "paragraphs": [
          "If the handoff cost is too high, simplify the briefing before adding more tasks. A one-page checklist and a single review round often reduce the cost more than a new tool. Test the change on the same task type. Keep the same task type for the comparison so the result is not confounded.",
          "Set a follow-up date and measure the same definition again. Compare the new median with the pilot median. Decide whether to expand, change the task, or return it to the owner. Write the decision into the role guide.",
          "If the task returns to the owner, write down why. The reason is more useful than the decision itself. It may point to a missing source, an unclear rule, or a task that should never have moved. Use that lesson in the next pilot."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor, Work Hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Bureau of Labor Statistics, Wholesale and Manufacturing Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      }
    ],
    "internalService": "/services/sales-enablement",
    "internalSibling": "/blog/decide-which-sales-tasks-can-move-to-an-assistant"
  }
];

import type { BlogPost } from './types';

export const november07BlogPosts: readonly BlogPost[] = [
  {
    "slug": "build-a-handoff-checklist-for-inbound-chat-leads",
    "title": "Build a handoff checklist for inbound chat leads",
    "description": "A practical checklist for capturing, qualifying, and routing inbound chat leads so the conversation produces a usable record and a real next step.",
    "category": "Prospecting",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/build-a-handoff-checklist-for-inbound-chat-leads.webp",
    "sections": [
      {
        "heading": "Where chat handoffs break",
        "paragraphs": [
          "A chat lead can look handled while the handoff is still incomplete. The conversation ends, the transcript stays in the tool, and nobody owns the next message. That gap rarely appears in a weekly count because the chat itself was answered. Review the moment the conversation leaves chat rather than the moment it starts. A short follow-up audit will show whether the buyer ever received a second reply and whether the receiving owner understood the request before responding.",
          "Most failures happen at three points in the handoff. The assistant cannot confirm the buyer's identity, the qualification answers are not written down, or the routing rule sends the chat to a team that is already closed. Each point needs a named owner and a visible field so a reviewer can see the break. Written rules make the failure easy to spot in a small sample. They also give the assistant a clear action when the buyer's answer does not fit the script."
        ]
      },
      {
        "heading": "Capture the conversation before it closes",
        "paragraphs": [
          "Copy the useful parts of the chat into the record before the window closes. Include the buyer's own words about the problem, the timing they asked for, and any constraint they mentioned. A transcript link helps, but it does not survive a tool change. The record should still make sense if the chat vendor is replaced next quarter. Write the summary as if the reader will never see the original chat window.",
          "Ask the assistant to write a summary rather than a transcript. A short summary of the need, the decision date, and the next step is easier to review than a long thread. Keep the buyer's exact wording for any commitment about price or timing. That wording is the part a later reviewer will need to defend on a call. Store the summary next to the lead record rather than in a separate document."
        ]
      },
      {
        "heading": "Define what a qualified chat looks like",
        "paragraphs": [
          "Write the qualification standard for chat separately from the standard for forms. Chat arrives with less context and more urgency, so the assistant often has to ask for basic details on the fly. Name the minimum fields, the disqualifying answers, and the point where a seller must take over. The standard should fit on one screen and use plain language. A standard that needs a training session will not be used during a live chat.",
          "A chat can be qualified for a conversation without being qualified for a proposal. Keep those two decisions apart in the record so the seller knows what has already been established. The assistant can book a call when the need and timing are plausible. Pricing, scope, and fit stay with the seller or manager who owns the account. That boundary keeps the assistant useful without asking for authority they do not have."
        ]
      },
      {
        "heading": "Write the routing rule for each outcome",
        "paragraphs": [
          "Every outcome needs a destination that exists during the hours the chat runs. Map qualified, unqualified, support, and unknown to a queue, a person, and a response window. Include what happens after hours and on holidays. The rule should not depend on someone remembering who is on call. Keep the current rule in the same place as the chat script so both are easy to find.",
          "Test the rule with the teams that receive the work. A routing destination that nobody monitors is worse than a clear hold message because the buyer believes someone is working the request. Confirm that the receiving queue can see the chat record and the buyer's contact details. Update the rule when a queue closes or an owner leaves the team. Run a test chat through each route after every change."
        ]
      },
      {
        "heading": "Set the response window for the queue",
        "paragraphs": [
          "Publish how quickly each routed chat should receive its first useful reply. A useful reply answers the buyer's question or names the next step, so an automated acknowledgement does not count. Set the window by outcome rather than by a single team-wide target. Then measure the time from chat close to the first real reply. Review the oldest open chats at the end of each day, not only the average.",
          "Give the assistant authority to send the first reply inside the approved script. A handoff that waits for a seller to draft a greeting loses the advantage of chat. Reserve review for messages that discuss price, scope, or an exception. The rest should move without a second approval on every lead. Write the approved opening lines into the checklist so the assistant does not improvise under time pressure."
        ]
      },
      {
        "heading": "Review chat handoffs with a weekly sample",
        "paragraphs": [
          "Pull a small sample of closed chats each week and follow each one to its first reply. Check the summary, the routing destination, and the elapsed time. Record one reason for every miss using a short code list. Review the reasons together instead of correcting individual chats in isolation. The sample should include at least one chat from each route and one from after hours.",
          "Change one part of the checklist when a reason repeats. If summaries omit timing, add a required field with a worked example. If routing fails after hours, fix the schedule before coaching the assistant. The weekly sample exists to improve the rule, not to grade the person who followed it. Write the change into the checklist and check it again the following week."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a chat handoff record contain?",
        "a": "A short summary of the need, the buyer's timing, the qualification fields, the routing destination, and the next step. Keep the buyer's exact wording for any commitment about price or scope."
      },
      {
        "q": "Who should own a routed chat lead?",
        "a": "One named owner in the receiving queue, with a published response window. The chat record and contact details should be visible to that owner before the first reply."
      },
      {
        "q": "How often should the checklist be reviewed?",
        "a": "Sample a few chats each week and review the reasons for misses monthly. Change one rule at a time so the effect is visible in the next sample."
      }
    ],
    "internalService": "/services/prospect-research",
    "internalSibling": "/blog/set-a-rule-for-when-a-virtual-assistant-may-requalify-a-stalled-lead",
    "source": {
      "label": "Federal Trade Commission, Complying with the Telemarketing Sales Rule",
      "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
    }
  },
  {
    "slug": "set-a-rule-for-when-a-virtual-assistant-may-requalify-a-stalled-lead",
    "title": "Set a rule for when a virtual assistant may requalify a stalled lead",
    "description": "A decision rule for reopening stalled leads, including the evidence required, the approval path, and the records that keep the work reviewable.",
    "category": "Role design",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/set-a-rule-for-when-a-virtual-assistant-may-requalify-a-stalled-lead.webp",
    "sections": [
      {
        "heading": "Decide what requalification covers",
        "paragraphs": [
          "Requalification is a new attempt to establish need, timing, and authority on a lead that went quiet. It is not a fresh outreach sequence with a new message and the same missing facts. Write the difference down before the assistant touches the queue. The boundary protects both the buyer's attention and the seller's credibility. A written definition also makes it possible to review the decision later.",
          "Limit the role to a defined set of checks. The assistant can confirm the contact still works, the problem still exists, and the timing has changed. The assistant should not reprice an opportunity, reopen a closed loss, or promise a new solution. Those decisions belong to the seller or manager who owns the account. Put the allowed checks in the queue template so the assistant sees the boundary at the point of work."
        ]
      },
      {
        "heading": "Name the evidence that reopens a lead",
        "paragraphs": [
          "A stalled lead needs a reason before it gets another attempt. Accept evidence such as a new job change, a published trigger event, a referral, or a reply to a previous message. Record the source and the date beside the reason. A general feeling that enough time has passed is not evidence. The test is whether a manager could look at the record and agree that something changed.",
          "Set a minimum gap between attempts and make it part of the rule. The gap should reflect the buyer's cycle, not the team's monthly target. If the last message asked for a decision, wait for the stated date before trying again. Repeated attempts without new information train the buyer to ignore the sender. Review the gap each quarter against reply rates and complaints."
        ]
      },
      {
        "heading": "Keep stalled work separate from closed work",
        "paragraphs": [
          "A lead that stopped responding is not the same as a lead that was disqualified. Keep separate statuses and separate queues for the two cases. Otherwise the assistant cannot tell whether a record needs a fresh check or a permanent stop. The distinction also keeps reporting honest because a stalled lead still has a possible future. A closed lead should not reappear in an activity count without a decision.",
          "Closed leads need a reason code and a date. Stalled leads need a next review date and an owner. If a record has neither, it will drift between reports and never receive a decision. Make the missing field visible in the weekly review so it gets fixed. A simple saved view of records without a review date will catch most of the drift."
        ]
      },
      {
        "heading": "Test the status change on a small queue",
        "paragraphs": [
          "A status change is easier to trust when the team tests it on a small queue first. Pick ten records that have been quiet for different lengths of time and apply the new rule by hand. Compare the outcomes with what the owners expected. If the rule produces a surprising result, the definition is still unclear. Write the surprise into the examples before the rule reaches the full queue.",
          "The test also shows how long the status review takes in real conditions. If ten records take an hour, the weekly routine is too heavy and will be skipped. Simplify the rule until the same test takes fifteen minutes. Speed matters because the review competes with live work and a long queue. A rule that fits the available time is more likely to survive a busy month and a staff absence."
        ]
      },
      {
        "heading": "Write the approval path for edge cases",
        "paragraphs": [
          "Some requalification requests need approval before any message goes out. Examples include a lead owned by another seller, an account with an open support issue, or a contact who asked not to be approached. Name the approver and the channel in the rule. The assistant should pause rather than choose. A clear pause is faster than a message that has to be withdrawn later.",
          "Keep the approval request short and specific. It should state the record, the evidence, the proposed message, and the latest useful date. The approver can then answer with a yes, a no, or a change. An approval path that requires a meeting will be skipped under pressure. Test the path with one real case each month and record how long the answer took."
        ]
      },
      {
        "heading": "Record the decision and its reason",
        "paragraphs": [
          "Every requalification attempt needs a decision line in the record. Write whether the lead was reopened, kept stalled, or closed, and name the evidence behind the decision. Add the date and the person who approved it. That line lets a later reviewer reconstruct the choice without reading every message. It also shows the buyer's history to the next owner.",
          "Use a small set of reason codes so the decisions can be counted. Useful codes include new trigger, referral, time elapsed, bad contact data, and do not contact. Avoid free text as the only record because it cannot be summarised. The codes should describe the situation, not the character of the buyer. Review the code list once a quarter and remove any code that no longer changes a decision."
        ]
      },
      {
        "heading": "Review reopened leads for regressions",
        "paragraphs": [
          "Sample reopened leads after thirty days and check what happened. Look for replies, meetings, opt-outs, and duplicate owner changes. A reopened lead that produces complaints is a signal that the rule is too loose. A lead that produces a real conversation may show the rule is working. Check both the positive and negative outcomes before changing the standard.",
          "Compare the outcomes with leads that stayed stalled. If reopening produces no better result, the evidence standard may be weak or the message may be wrong. Change one part of the rule and review the next sample. The goal is a repeatable decision, not a higher activity count. Write the comparison in one page so the next reviewer can see what was tested."
        ]
      }
    ],
    "faq": [
      {
        "q": "What evidence justifies reopening a stalled lead?",
        "a": "A new trigger such as a job change, a referral, a published event, or a reply to an earlier message. Record the source and date with the decision."
      },
      {
        "q": "Can a virtual assistant reprice a stalled opportunity?",
        "a": "No. Pricing and scope belong to the seller or manager who owns the account. The assistant can confirm need, timing, and contact details within the written rule."
      },
      {
        "q": "How should a team measure requalification?",
        "a": "Track reopened leads for replies, meetings, opt-outs, and duplicate owner changes. Compare them with leads that stayed stalled before changing the rule."
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/keep-a-shared-sales-inbox-from-becoming-a-backlog",
    "source": {
      "label": "National Institute of Standards and Technology, Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "write-a-call-recap-standard-for-unanswered-sales-calls",
    "title": "Write a call recap standard for unanswered sales calls",
    "description": "A recap standard for no-answer calls, voicemail attempts, and busy signals that keeps the next step visible and the record defensible.",
    "category": "Follow through",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/write-a-call-recap-standard-for-unanswered-sales-calls.webp",
    "sections": [
      {
        "heading": "Record the attempt even when nobody answers",
        "paragraphs": [
          "An unanswered call is still work, and it still needs a record. Without one, the next seller cannot tell whether the number is wrong, the timing is bad, or the buyer is avoiding the conversation. The attempt should leave a short note with the time, the channel, and the outcome. That note is the difference between a queue and a memory. It also lets a manager see how much effort went into a lead before anyone decides to stop.",
          "Keep the note factual and brief. State that the call was placed, whether it reached voicemail, and what message was left. Avoid writing a story about why the buyer did not answer. The record should help the next person decide what to do, not explain the past. A neutral note also keeps the buyer's file fair if it is ever reviewed by someone outside the team."
        ]
      },
      {
        "heading": "Capture the channel and the time",
        "paragraphs": [
          "Record the exact channel and the local time of the attempt. A call to a mobile number at lunchtime is different from a call to a desk line after hours. The time zone matters when the buyer works across regions. These details turn a failed attempt into useful scheduling information. They also prevent the team from repeating a call at the same unproductive hour.",
          "Include the number or address used, not just the contact name. People change roles and keep old details in directories. If the assistant used a different number from the one on file, update the record. A mismatch found now prevents a wasted attempt next week. Add a short field for the source of the number so the team can see whether the data came from the buyer or a list."
        ]
      },
      {
        "heading": "Write a recap that states the next attempt",
        "paragraphs": [
          "Every recap should end with a concrete next attempt or a reason to stop. Name the channel, the date, and the message the next attempt will carry. If the buyer asked not to be contacted, record that instead. A recap without a next step is a log entry that nobody can act on. It also makes the contact limit impossible to enforce because no one can see the plan.",
          "Set the next attempt based on what the attempt revealed. A voicemail can justify a follow-up email with the same information. A disconnected number needs a data check before another call. A gatekeeper who offers a better time should get a booked slot. The outcome should change the plan, not simply reset the same task for tomorrow."
        ]
      },
      {
        "heading": "Stop repeated attempts with no new information",
        "paragraphs": [
          "Repeated attempts become noise when nothing changes between them. Set a limit on consecutive attempts without a reply. After the limit, move the record to a review queue with a clear reason. The reviewer can decide whether to close the lead, change the channel, or wait for a trigger. A written limit also protects the team from a complaint about excessive contact.",
          "The limit should vary by stage and by source. A warm referral may deserve more attempts than a cold list entry. Write the limits in the standard so the assistant does not have to guess. Review the limits each quarter against reply rates and complaints. If one segment never replies, the problem may be the list rather than the number of attempts."
        ]
      },
      {
        "heading": "Review attempt quality by segment",
        "paragraphs": [
          "Sample attempt records each week and check three things. Was the outcome recorded, was the next step specific, and did the assistant follow the contact limit? Group the findings by segment rather than by person. A segment with many vague recaps may need a different script or a different list. The pattern is more useful than a single corrected record.",
          "Look for records that were closed too early as well as records that were pursued too long. Both are costly, and both are visible in a small sample. Ask the sellers which recaps helped them and which added nothing. Use their answers to shorten the standard where it has grown. Keep the sample to ten records so the review actually happens every week."
        ]
      },
      {
        "heading": "Keep the standard short enough to use",
        "paragraphs": [
          "A recap standard competes with the next call, so it has to be fast. Put the required fields at the top of the call task and keep the optional notes below. Use plain labels such as outcome, next attempt, and stop reason. The assistant should be able to finish a recap in under a minute. If the form takes longer, the team will fill it with placeholders or skip it.",
          "Test the standard with a new assistant during onboarding. Ask them to record three attempts using only the written guidance. Watch where they pause or invent a field. Revise the guidance before adding another required question. A standard that survives a busy afternoon is better than a perfect one that gets skipped by the whole team."
        ]
      },
      {
        "heading": "Review recaps before the next attempt",
        "paragraphs": [
          "A recap is most useful when someone checks it before the next attempt. Have the assistant or a peer read the last note and confirm that the outcome, the next step, and the date are all present. The check takes under a minute and catches the gaps that a busy afternoon creates. It also stops a vague note from becoming the only history of the contact. Keep the check on the same screen as the call task so it is hard to skip.",
          "Use the check as a coaching moment rather than a correction. Point to the field that was missing and ask what the assistant saw on the call. When the same gap appears across several records, change the template instead of repeating the reminder. The review should improve the next note, not just edit the last one. Record one improvement each week so the standard keeps getting clearer."
        ]
      }
    ],
    "faq": [
      {
        "q": "What belongs in a no-answer call recap?",
        "a": "The time, channel, number used, outcome, any message left, and the next attempt or stop reason. Keep it factual and short."
      },
      {
        "q": "When should a team stop calling a lead?",
        "a": "Set a limit on consecutive attempts without a reply, then route the record for a decision. Vary the limit by stage and source rather than using one number for every list."
      },
      {
        "q": "How can managers check recap quality?",
        "a": "Sample a few records each week and check the outcome, the next step, and adherence to the contact limit. Group findings by segment, not by person."
      }
    ],
    "internalService": "/services/sales-follow-up",
    "internalSibling": "/blog/design-a-weekly-research-digest-sellers-will-read",
    "source": {
      "label": "Federal Communications Commission, Stop Unwanted Robocalls and Texts",
      "url": "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts"
    }
  },
  {
    "slug": "keep-a-shared-sales-inbox-from-becoming-a-backlog",
    "title": "Keep a shared sales inbox from becoming a backlog",
    "description": "An operating routine for a shared sales inbox that assigns owners, separates reply work from record work, and measures message age.",
    "category": "CRM operations",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/keep-a-shared-sales-inbox-from-becoming-a-backlog.webp",
    "sections": [
      {
        "heading": "Find where the inbox slows down",
        "paragraphs": [
          "A shared inbox rarely fails all at once. Messages pile up in one folder, one sender, or one time of day. Start by counting how long messages wait before the first reply and before the record is updated. Those two numbers usually point to different problems. Measure both before changing the process. A single average can hide a small group of messages that wait for days.",
          "Look at the messages that were forwarded more than once. Each forward adds a delay and loses context. A short review of the most forwarded threads will show which decisions lack a clear owner. Fix the routing before adding another inbox rule. More filters will not help if the message still lands in a queue that nobody owns."
        ]
      },
      {
        "heading": "Give every message one owner",
        "paragraphs": [
          "Every message needs a single person who is accountable for the next action. A shared label is not an owner, and a team queue is not a person. Assign the owner when the message arrives or when it is first read. If the owner is unknown, the message belongs in a triage queue with a named reviewer. The reviewer should clear that queue at a fixed point each day.",
          "Ownership should survive a handoff. When a message moves to another person, record the new owner and the reason. Do not leave the old owner on the thread as a silent backup. Two owners create the same delay as no owner because each assumes the other will act. A one-line handoff note is enough when it names the new owner and the next action."
        ]
      },
      {
        "heading": "Separate reply work from record work",
        "paragraphs": [
          "A reply and a record update are different tasks, and combining them creates partial work. The assistant may answer the buyer quickly while the CRM update waits for more context. Track the two tasks separately so neither is hidden inside the other. A fast reply with a stale record is still a handoff problem because the next seller will work from the wrong information. Keep separate counts for replies sent and records updated.",
          "Give the record work its own window and checklist. The checklist should name the fields that must change after a reply, such as stage, next step, and owner. If the reply contains a commitment, capture the date and the exact terms. The record is what the next seller will rely on. A short sample at the end of the day will show whether the checklist is being followed."
        ]
      },
      {
        "heading": "Set a daily clearing window",
        "paragraphs": [
          "Choose a fixed window each day for clearing the triage queue. The window should be long enough to process the backlog and short enough to protect other work. Publish it so sellers know when new messages will move. A window that moves every day is not a routine. Put the window on the shared calendar so meetings do not quietly replace it.",
          "Use the first part of the window to triage and the second to reply. Triage means assigning, closing, or escalating each message. Reply work can then run in priority order without the queue growing behind it. End the window by checking that no message lacks an owner. If the queue is still large, record why rather than staying late without a limit."
        ]
      },
      {
        "heading": "Escalate messages that need a decision",
        "paragraphs": [
          "Some messages cannot be answered inside the assistant's authority. Pricing exceptions, legal terms, and complaints need a named decision maker. Write those triggers into the inbox guide with a channel and a response expectation. The assistant should escalate with the thread and a short summary, not a bare forward. A good summary names the question and the latest useful time for an answer.",
          "Track how long escalations wait for a decision. A queue that clears quickly can still hide a slow approval path. Review the oldest escalations at the daily window and name the blocker. If one approver is always the blocker, the rule needs a backup. A weekly count of open escalations is enough to show whether the path is working."
        ]
      },
      {
        "heading": "Measure age before volume",
        "paragraphs": [
          "Volume tells you how busy the inbox is, while age tells you whether it is healthy. Track the median and oldest message age at the end of each day. A rising oldest age is an early warning even when the total count looks normal. Use age as the main measure in the weekly review. Volume can stay flat while a few messages wait for a week.",
          "Pair the age measure with a small quality sample. Check that the oldest messages were not merely closed to clear the count. Look for replies that lack a next step or records that were updated without evidence. A fast inbox that loses commitments is worse than a slower one that keeps them. Review the sample with the team and change one rule at a time."
        ]
      },
      {
        "heading": "Give the inbox a weekly reset",
        "paragraphs": [
          "A weekly reset keeps the inbox from carrying old problems into the next month. Set aside a short block to close threads that no longer need a reply, reassign items whose owner has changed, and confirm that every open thread has a next step. The reset is not a second review; it is a cleanup that makes the following week readable. Put it on the calendar so it does not compete with a busy Monday.",
          "During the reset, look for labels that have not produced a reply in two weeks. A label that collects messages without an owner may need to be removed or split. Also check that the covering owner for the coming week has access to the queue. A clean inbox that nobody can open is still a backlog. End the reset by naming one rule to test in the next week."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the first fix for a shared sales inbox?",
        "a": "Assign one accountable owner to every message and measure how long messages wait. Routing and ownership problems usually matter more than another filter rule."
      },
      {
        "q": "Should replies and CRM updates be tracked together?",
        "a": "Track them separately. A quick reply can hide a stale record, and a record update can wait while the buyer needs an answer."
      },
      {
        "q": "Which inbox metric matters most?",
        "a": "Message age, especially the oldest message at the end of the day. Volume can rise without harm, but rising age shows that work is accumulating."
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/review-outsourced-sales-support-invoices-against-delivered-work",
    "source": {
      "label": "Cybersecurity and Infrastructure Security Agency, Cyber Essentials",
      "url": "https://www.cisa.gov/cyber-essentials"
    }
  },
  {
    "slug": "prepare-account-lists-for-a-territory-realignment",
    "title": "Prepare account lists for a territory realignment",
    "description": "A step-by-step routine for moving accounts between territories without duplicate outreach, lost commitments, or confused buyers.",
    "category": "Territory operations",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/prepare-account-lists-for-a-territory-realignment.webp",
    "sections": [
      {
        "heading": "Start with a current ownership map",
        "paragraphs": [
          "A territory move starts with a reliable list of who owns what today. Export the account owner, the open opportunity owner, and any shared ownership fields. Reconcile the export against the sales team roster before the move. A stale roster will send accounts to people who have already left. Keep the exported list with the move plan so the starting point is visible later.",
          "Mark the accounts that have more than one owner or no owner at all. Those records need a decision before they can be moved. Decide the rule for shared accounts, such as the opportunity owner taking precedence. Write the rule down so the same case is resolved the same way. A short decision log will save a long argument after the move."
        ]
      },
      {
        "heading": "Remove duplicates before the move",
        "paragraphs": [
          "Duplicates become visible during a territory change because two records may land with two different owners. Match accounts on domain and on billing address, not only on company name. Merge only when one record clearly holds the better history. Flag the uncertain pairs for a human decision. A duplicate that is merged too early can lose the only record of a conversation.",
          "Check the contacts inside each duplicate before merging. A merge that drops the only verified phone number creates a new outreach problem. Keep a short log of what was merged and what was preserved. The log helps the team explain a missing activity history later. Review the merged records again after the first wave of the move."
        ]
      },
      {
        "heading": "Flag accounts with open commitments",
        "paragraphs": [
          "Any account with an open proposal, a scheduled meeting, or a promised follow-up needs special handling. List those commitments with the owner, the date, and the next step. The new owner must see them before the first outreach. A territory move should not reset a promise the buyer already heard. Include the commitment list in the handoff packet for every moved account.",
          "Decide whether the old owner or the new owner closes each commitment. In most cases the old owner keeps the current thread until the next agreed milestone. The new owner takes over after that point with a warm handoff. Write the handoff date into the account record. If the buyer objects, the sales leader should decide the path before the next message."
        ]
      },
      {
        "heading": "Move the book in controlled waves",
        "paragraphs": [
          "Move accounts in waves rather than all at once. Start with a small segment that has no open commitments and a clear new owner. Check the routing, the permissions, and the reporting after the first wave. Then expand the move with the lessons from that sample. A failed first wave is easier to repair than a failed book.",
          "Pause outreach during the ownership change. A buyer who receives messages from two sellers on the same day loses confidence in the team. Set a short quiet period and tell the new owner when it ends. Use the pause to update the record and confirm the contact details. Record the quiet period in the move plan so it is not forgotten."
        ]
      },
      {
        "heading": "Tell buyers once and record it",
        "paragraphs": [
          "When a buyer needs to know about the change, send one clear message from a named person. Explain who will handle the account and how to reach them. Avoid a generic notice that sounds like an internal reorganisation. The buyer should finish the message knowing exactly what happens next. Keep the message short and free of sales language.",
          "Record the introduction in the account and in the opportunity. Note the date, the channel, and any reply. If the buyer objects to the change, route the objection to the sales leader before the next outreach. A recorded objection prevents the new owner from repeating the mistake. Review the introduction log at the end of the first wave."
        ]
      },
      {
        "heading": "Audit the first two weeks",
        "paragraphs": [
          "Audit the moved accounts during the first two weeks. Check for duplicate outreach, missing owners, and stalled commitments. Compare the new owner's activity with the old owner's last notes. A mismatch often reveals a record that was moved without its context. Keep the audit small enough to finish in a single short, focused review session.",
          "Ask the new owners what they could not find in the first week. Their answers are more useful than a dashboard because they show where the handoff failed. Fix the export or the field mapping before the next move wave. End the audit with a short list of changes that will carry into the next territory move. Assign each change an owner and a date."
        ]
      },
      {
        "heading": "Document the move for the next change",
        "paragraphs": [
          "A territory move produces lessons that are easy to lose once the sales quarter starts. Write a short record of what was moved, which rule resolved shared accounts, and where the handoff failed. Include the first-wave sample size and the fixes that followed. The next realignment can then start from evidence instead of a blank page. Keep the record with the account list rather than in a personal folder.",
          "Ask the owners who received accounts to add one line about the handoff. Their notes often reveal a context gap that the move plan missed, such as a buyer who only responds to a specific channel. Add the gap to the next move checklist and test it with a small sample. A move that improves with each cycle is more valuable than a one-time cleanup. Review the record after the first month and remove any step that no longer helps."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should be checked before moving accounts?",
        "a": "Current ownership, duplicates, open commitments, and the sales roster. Resolve shared or missing owners before the move starts."
      },
      {
        "q": "Who closes an open commitment after a territory change?",
        "a": "Usually the old owner until the next agreed milestone, then the new owner with a warm handoff. Record the handoff date in the account."
      },
      {
        "q": "Why move accounts in waves?",
        "a": "A small first wave exposes routing, permission, and reporting problems before they affect the whole book. Pause outreach during each ownership change."
      }
    ],
    "internalService": "/services/crm-administration",
    "internalSibling": "/blog/keep-a-shared-sales-inbox-from-becoming-a-backlog",
    "source": {
      "label": "U.S. Small Business Administration, Manage Your Business",
      "url": "https://www.sba.gov/business-guide/manage-your-business"
    }
  },
  {
    "slug": "design-a-weekly-research-digest-sellers-will-read",
    "title": "Design a weekly research digest sellers will read",
    "description": "A format for a weekly prospect research digest that focuses on decisions, keeps accounts scannable, and preserves the source behind each item.",
    "category": "Prospecting",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/design-a-weekly-research-digest-sellers-will-read.webp",
    "sections": [
      {
        "heading": "Choose the decisions the digest serves",
        "paragraphs": [
          "A research digest should help a seller decide where to spend the next week. Start by naming the decisions it supports, such as which accounts to call first or which stalled deal needs a new angle. Build the digest around those decisions rather than around everything the researcher found. A digest with no decision is a newsletter. Keep the decision list visible at the top of the template so the researcher can check it before writing.",
          "Ask two sellers which questions they ask before planning a week. Keep the list short and specific. If the digest cannot answer those questions, it needs a different structure. If it answers too many, it needs a narrower scope. Revisit the list once a quarter because the sales motion may have changed and the questions sellers ask may have shifted with it."
        ]
      },
      {
        "heading": "Put one account on each line",
        "paragraphs": [
          "Use one line per account so the digest can be scanned in a few minutes. Each line should carry the account name, the reason it matters now, and the suggested next action. Add the source and the date in a compact note. A seller should be able to choose three accounts without opening another document. The line should stand on its own if it is forwarded to a colleague.",
          "Group the lines by the decision they support, not by the researcher who found them. A section for accounts with a new trigger is more useful than a section for each industry. Keep the groups small and put the strongest evidence first. The order should reflect the week ahead. A digest that is sorted by source rather than by urgency makes the seller do the prioritisation."
        ]
      },
      {
        "heading": "Keep a fixed length and date",
        "paragraphs": [
          "Set a maximum length for the digest and keep it stable from week to week. A fixed length forces the researcher to choose the most useful items. It also tells sellers how much time to reserve for reading. A digest that grows without limit stops being read. Put the limit in the template as a visible count of lines.",
          "Date the digest and send it on the same day each week. The date helps sellers connect the research to the pipeline snapshot they already use. If the digest is late, send it with a note rather than silently skipping the week. A predictable rhythm matters more than a perfect issue. Record the send time so the team can see whether the schedule is holding."
        ]
      },
      {
        "heading": "Attach the source and confidence note",
        "paragraphs": [
          "Every material claim needs a source and a short confidence note. The source can be a filing, a company page, a job posting, or a trade article. The note should say whether the claim was observed directly or inferred. This small addition lets a seller use the item on a call without overstating it. A claim without a date is weaker than the same claim with the day it was checked.",
          "Keep the source line short so it does not crowd the account line. A title, a date, and a link are usually enough. If the source is weak, say so in the note instead of leaving it out. The seller can then decide how much weight to give the claim. Review a sample of the notes each month to see whether the labels are being used consistently."
        ]
      },
      {
        "heading": "Send it before the planning meeting",
        "paragraphs": [
          "Time the digest to arrive before the weekly planning meeting. Sellers need a chance to read it and mark the accounts they want. A digest delivered during the meeting becomes a presentation. A digest delivered the day before becomes a tool. Confirm the send time with the sales leader before the first issue and again after any change to the meeting schedule.",
          "Ask for one piece of feedback after the first month. Find out which lines were used and which were ignored. Remove the sections that produce no action. Add a section only when a seller asks for it twice. A short feedback form with three questions is easier to keep than a long survey that asks the same sellers for everything at once."
        ]
      },
      {
        "heading": "Retire items that no longer matter",
        "paragraphs": [
          "An account that has been in the digest for three weeks without action needs a decision. Either the timing is wrong, the reason is weak, or the seller does not believe the finding. Remove it and record why. Keeping it in the digest trains readers to skip the section. A short retirement note helps the researcher improve the next brief.",
          "Review the digest archive each quarter for patterns. Look for sources that kept producing useful items and sources that never did. Adjust the research brief and the approved source list. The digest improves when its weakest items are removed, not when more items are added. Keep the archive in one place so the comparison is possible."
        ]
      },
      {
        "heading": "Give the digest a clear owner",
        "paragraphs": [
          "A digest without an owner slowly turns into a forwarded template. Name one person who owns the format, the sources, and the send time. That person does not have to write every item, but they confirm the issue before it goes out. The owner also keeps the list of decisions the digest is meant to support. When the owner changes, hand over the template and the archive together.",
          "Give the owner a short review routine. Each month, check the open rate, the lines sellers used, and the items that were removed. Ask one seller what would make the next issue more useful. Change one part of the format and compare the next four weeks. A digest that is reviewed like a product stays useful longer than one that is sent on habit."
        ]
      }
    ],
    "faq": [
      {
        "q": "What makes a research digest useful?",
        "a": "It supports a specific weekly decision, puts one account on each line, and shows the reason, the next action, and the source. It should be scannable in a few minutes."
      },
      {
        "q": "How long should the digest be?",
        "a": "Set a fixed maximum length and keep it stable. A short digest forces prioritisation and tells sellers how much time to reserve."
      },
      {
        "q": "When should the digest be sent?",
        "a": "Before the weekly planning meeting so sellers can read it and mark accounts. A consistent day and time makes the habit easier to keep."
      }
    ],
    "internalService": "/services/prospect-research",
    "internalSibling": "/blog/build-a-handoff-checklist-for-inbound-chat-leads",
    "source": {
      "label": "National Institute of Standards and Technology, Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "handle-a-prospect-request-to-switch-contact-channels",
    "title": "Handle a prospect request to switch contact channels",
    "description": "A routine for moving a prospect between email, phone, and messaging without losing consent, context, or the next commitment.",
    "category": "Follow through",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/handle-a-prospect-request-to-switch-contact-channels.webp",
    "sections": [
      {
        "heading": "Confirm the request in writing",
        "paragraphs": [
          "When a prospect asks to be contacted on a different channel, confirm the change in writing. Repeat the channel, the address or number, and the timing they prefer. Ask them to correct anything that is wrong. A written confirmation prevents a later disagreement about what was requested. It also gives the next owner a clear instruction to follow.",
          "Keep the confirmation short and free of sales language. The prospect should see that the request was understood, not that the team is trying to restart a pitch. If the request came during a call, send the note the same day. A delayed confirmation invites another message on the old channel. Store the confirmation with the contact record so it is easy to find."
        ]
      },
      {
        "heading": "Check consent and suppression rules",
        "paragraphs": [
          "Before using the new channel, check that the team may contact the prospect there. Consent and do-not-contact rules can differ by channel and by region. A request to switch does not automatically remove an earlier opt-out. Record the permission that applies and the date it was confirmed. When the rule is unclear, pause the outreach rather than guessing.",
          "If the new channel is not permitted, explain the alternative in plain language. Do not move the contact to a channel that lacks permission because it is more convenient. Route the case to the person who owns the compliance decision. The assistant should pause rather than improvise. Keep a short note of the decision so the next attempt does not repeat the question."
        ]
      },
      {
        "heading": "Update the record in one place",
        "paragraphs": [
          "Make the new channel the primary contact method in one system of record. Update the phone, email, or messaging handle and mark the old one as secondary or inactive. Remove the old channel from active sequences so messages do not keep going there. One update should be enough for every downstream tool. A second copy of the old channel is how duplicate outreach starts.",
          "Check that the change reached the tools that send messages. A CRM update that never reaches the sequencing tool leaves the old channel live. Test with a small internal message before the next scheduled touch. Record the test and the result in the account. If the tools cannot be synced, add a manual check to the daily queue until they are."
        ]
      },
      {
        "heading": "Tell the new owner what changed",
        "paragraphs": [
          "If the change moves the account to another owner, write a short handoff note. Include the channel request, the reason, the confirmed timing, and the last commitment. The new owner should not have to read the full history to understand the switch. A clear note prevents a duplicate introduction. It also tells the new owner which message has already been sent.",
          "Name the person who will make the first contact on the new channel. Two people contacting the same prospect on the same day looks careless. Give the new owner the approved message and the date. Keep the old owner informed but out of the thread. A single named sender is easier to explain to the buyer if something goes wrong."
        ]
      },
      {
        "heading": "Time the first message on the new channel",
        "paragraphs": [
          "The first message on a new channel should acknowledge the switch and continue the existing conversation. Do not open with a fresh pitch or a generic introduction. Reference the last useful exchange and the next step the prospect agreed to. The channel changed, but the relationship did not. A short reference to the earlier conversation proves that the team kept its context.",
          "Respect the timing the prospect requested. If they asked for next month, do not send tomorrow because the channel is new. Put the date in the queue and set a reminder for the owner. A message that arrives too early undermines the accommodation. If the timing was not stated, choose a reasonable date and say when the next message will arrive."
        ]
      },
      {
        "heading": "Review channel changes each month",
        "paragraphs": [
          "Count the channel change requests each month and group them by reason. Common reasons include a busy phone line, a preference for messaging, or a job change. The pattern may show that the team is overusing one channel. Adjust the outreach mix before the complaints grow. A short monthly note is enough if the reasons are coded consistently.",
          "Sample a few changes and check that consent, the record, and the first message were handled correctly. Look for prospects who were contacted on the old channel after the switch. Fix the tool mapping or the sequence rule that caused the miss. A monthly review catches the leak before it becomes a complaint. Record the fix and check the same case in the next sample."
        ]
      },
      {
        "heading": "Give the buyer a clear way back",
        "paragraphs": [
          "A channel switch should not make the buyer harder to reach. Include a clear way to return to the original channel if the new one stops working. State who will monitor the new channel and how quickly the buyer should expect a reply. That small instruction prevents a silent gap when a number changes or a messaging account is inactive. It also gives the buyer control over the relationship.",
          "Check the fallback during the monthly review. Send a test message to the new channel and confirm that it reaches the named owner. If the channel is a shared inbox, verify that the routing rule still points to the right person. A switch that works on the first day but fails after a holiday is not reliable. Fix the fallback before the next scheduled touch."
        ]
      }
    ],
    "faq": [
      {
        "q": "Should a channel switch be confirmed in writing?",
        "a": "Yes. Confirm the channel, the new address or number, and the preferred timing, then ask the prospect to correct anything wrong."
      },
      {
        "q": "Does a channel request override an earlier opt-out?",
        "a": "Not automatically. Check the consent and suppression rules for the new channel and record the permission that applies before contacting."
      },
      {
        "q": "What should the first message on a new channel say?",
        "a": "Acknowledge the switch, reference the last useful exchange, and continue the agreed next step. Avoid a fresh pitch or a generic introduction."
      }
    ],
    "internalService": "/services/sales-follow-up",
    "internalSibling": "/blog/write-a-call-recap-standard-for-unanswered-sales-calls",
    "source": {
      "label": "Federal Trade Commission, CAN-SPAM Act Compliance Guide",
      "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
    }
  },
  {
    "slug": "review-outsourced-sales-support-invoices-against-delivered-work",
    "title": "Review outsourced sales support invoices against delivered work",
    "description": "A monthly invoice review that ties outsourced sales support hours to task records, rework, and the scope the team actually agreed to.",
    "category": "Vendor operations",
    "publishedAt": "2026-11-07",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/november-07/review-outsourced-sales-support-invoices-against-delivered-work.webp",
    "sections": [
      {
        "heading": "Agree on the billable unit before work starts",
        "paragraphs": [
          "An invoice can only be checked against a unit both sides agreed to. Decide whether the contract bills hours, completed tasks, or a monthly retainer with a defined scope. Write the unit into the agreement and give it a plain definition. Without that definition, every review becomes a negotiation. The definition should be short enough to repeat in one sentence during a monthly call.",
          "Name what is included in the unit and what is billed separately. Travel, software licences, and management fees should sit outside the unit or be listed explicitly. Include the rounding rule for partial hours. These details prevent small differences from becoming monthly disputes. Put the definition in the same document as the invoice template so the two cannot drift apart."
        ]
      },
      {
        "heading": "Match logged time to the task record",
        "paragraphs": [
          "Ask for a task log that matches the invoice period. Each entry should carry the date, the queue, the task type, and the time recorded. Compare a sample of entries with the completed work in your own systems. The goal is to confirm that the billed work exists, not to audit every minute. Pick the sample before looking at the totals so the review is not anchored by the invoice amount.",
          "Look for entries that are too generic to verify, such as a block of hours labelled support. Ask for a breakdown before approving the invoice. If the vendor cannot provide one, mark the amount as unresolved. A vague line is not evidence that the work happened. Keep the unresolved amount visible until the vendor supplies a task-level record."
        ]
      },
      {
        "heading": "Separate rework from new work",
        "paragraphs": [
          "Rework caused by an unclear brief or a missed instruction should not be billed as new work. Define what counts as rework and how it is recorded. Review the rework entries with the queue owner before the invoice is approved. A rising rework line is a process problem, not just a cost line. A short reason code on each rework entry makes the pattern visible over several months.",
          "Some rework is legitimate because the buyer changed the request. Keep those cases separate from vendor-caused rework. Record the reason and the person who approved the change. That distinction keeps the review fair and makes the pattern easier to see. If the same legitimate reason appears often, the brief may need a field for buyer changes."
        ]
      },
      {
        "heading": "Review the invoice with the queue owner",
        "paragraphs": [
          "The person who sees the daily work should review the invoice before finance approves it. Give that owner a short checklist: hours match, tasks exist, rework is coded, and the scope is unchanged. Their sign-off should take minutes, not an afternoon. Finance then checks the rate and the total. A review that depends on finance alone will miss the work-level detail.",
          "Hold the review on the same day each month so the evidence is still fresh. Include the vendor in the review when a line is disputed. A short conversation resolves more than a long email thread. Record the outcome and any credit in the next invoice. A written note prevents the same dispute from returning without context."
        ]
      },
      {
        "heading": "Fix the contract when the mismatch repeats",
        "paragraphs": [
          "One disputed line is a correction, while the same dispute every month is a contract problem. Track the reasons for adjustments across three invoices. If the same reason appears twice, change the scope definition or the reporting requirement. Do not rely on the monthly review to fix a structural gap. A contract change is cheaper than a review that never ends.",
          "Bring the evidence to the contract review rather than a general complaint. Show the line, the reason, and the number of occurrences. Ask for a specific change such as a clearer task code or a cap on rework. A vendor who sees the pattern can usually propose a workable fix. Write the change into the next statement of work so both sides share the expectation."
        ]
      },
      {
        "heading": "Keep the review short and regular",
        "paragraphs": [
          "A good invoice review is short enough to complete every month. Use one page with the invoice total, the sampled lines, the rework amount, and the sign-off. Attach the task log rather than reproducing it. The page should let a manager approve or question the invoice without opening five files. A one-page format also makes month-to-month comparison easier.",
          "Store the signed page with the invoice and the task log. The record shows what was checked and who approved it. Review the process once a year and remove any check that no longer changes a decision. A review that survives is one that respects everyone's time. Add a new check only when a real dispute shows it is needed."
        ]
      },
      {
        "heading": "Keep the evidence with the invoice",
        "paragraphs": [
          "The review is only repeatable if the evidence stays with the invoice. Store the signed page, the task log, and the sample list in one folder for the retention period. Name the files by period and vendor so a later reviewer can find them without searching. A folder that only contains the invoice proves the payment but not the check. Add the folder path to the finance record.",
          "Before the next review, open the previous folder and confirm that the evidence is still readable. A task log stored in a tool that has been replaced may no longer open. Export the critical files to a durable format and note the change. Evidence that disappears after six months cannot support a contract decision. Keep the review trail as carefully as the invoice itself."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should an outsourced support invoice include?",
        "a": "The billing period, the agreed unit, a task log with dates and task types, separately listed fees, and any rework. The unit definition should be in the contract."
      },
      {
        "q": "How much of the task log should be checked?",
        "a": "Sample enough entries to confirm the work exists and the categories are accurate. The review is a control, not a minute-by-minute audit."
      },
      {
        "q": "What should happen when a dispute repeats?",
        "a": "Treat it as a contract issue. Show the evidence across invoices and ask for a specific change to the scope, task codes, or rework rule."
      }
    ],
    "internalService": "/services/pipeline-reporting",
    "internalSibling": "/blog/prepare-account-lists-for-a-territory-realignment",
    "source": {
      "label": "Internal Revenue Service, Recordkeeping",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
    }
  }
];

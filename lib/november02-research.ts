import type { ResearchPost } from './types';

export const november02ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "isa02-response-lag",
    "title": "Lead Response Lag",
    "summary": "A bounded record review for how long do inbound leads wait?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-11-02",
    "finding": "How long do inbound leads wait? The result is operational, not an industry rate.",
    "thumbnail": "/images/november-02/isa02-response-lag.svg",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How long do inbound leads wait? The scope is the documented sales record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Leads in a month. The unit is one lead, call, sequence, deal, or handoff."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "First touch, owner, and unresolved. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Lag clusters when no owner is named. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      }
    ]
  },
  {
    "slug": "isa02-handoff-drop",
    "title": "SDR Handoff Drop",
    "summary": "A bounded record review for how often does a handoff lose the next owner?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-11-02",
    "finding": "How often does a handoff lose the next owner? The result is operational, not an industry rate.",
    "thumbnail": "/images/november-02/isa02-handoff-drop.svg",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How often does a handoff lose the next owner? The scope is the documented sales record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Handoffs in a quarter. The unit is one lead, call, sequence, deal, or handoff."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Owner, summary, and completion. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Drops cluster without a named receiver. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      }
    ]
  },
  {
    "slug": "isa02-stage-consistency",
    "title": "CRM Stage Consistency",
    "summary": "A bounded record review for do reps apply the same stage rule?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-11-02",
    "finding": "Do reps apply the same stage rule? The result is operational, not an industry rate.",
    "thumbnail": "/images/november-02/isa02-stage-consistency.svg",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Do reps apply the same stage rule? The scope is the documented sales record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Deals in a quarter. The unit is one lead, call, sequence, deal, or handoff."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Stage, evidence, and override. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Disagreement clusters on qualified. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      }
    ]
  },
  {
    "slug": "isa02-cadence-completion",
    "title": "Cadence Completion",
    "summary": "A bounded record review for how many touches are completed as planned?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-11-02",
    "finding": "How many touches are completed as planned? The result is operational, not an industry rate.",
    "thumbnail": "/images/november-02/isa02-cadence-completion.svg",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How many touches are completed as planned? The scope is the documented sales record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Sequences in a month. The unit is one lead, call, sequence, deal, or handoff."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Touch, date, owner, and skip reason. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Skips cluster when the list changes. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      }
    ]
  },
  {
    "slug": "isa02-summary-defects",
    "title": "Call Summary Defects",
    "summary": "A bounded record review for which facts are missing in call summaries?",
    "cluster": "Inside Sales Research",
    "publishedAt": "2026-11-02",
    "finding": "Which facts are missing in call summaries? The result is operational, not an industry rate.",
    "thumbnail": "/images/november-02/isa02-summary-defects.svg",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Which facts are missing in call summaries? The scope is the documented sales record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Calls in a month. The unit is one lead, call, sequence, deal, or handoff."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Next step, owner, and source. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Missing next steps are common. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      }
    ]
  }
];

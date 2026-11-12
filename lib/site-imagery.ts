export type SiteImage = {
  src: string;
  alt: string;
  position?: string;
};

export const imagery = {
  home: {
    src: '/images/inside-sales/remote-meeting.webp',
    alt: 'Remote sales colleagues reviewing a working document during a video call',
    position: 'center center'
  },
  services: {
    src: '/images/inside-sales/team-crm-review.webp',
    alt: 'Sales operations colleagues reviewing a laptop and working notes together',
    position: 'center center'
  },
  blog: {
    src: '/images/inside-sales/follow-up-call.webp',
    alt: 'Inside sales professional handling a follow-up call beside a laptop',
    position: '58% center'
  },
  research: {
    src: '/images/inside-sales/pipeline-review.webp',
    alt: 'Sales operations specialist reviewing pipeline records across printed reports and a laptop',
    position: 'center 38%'
  },
  managedSupport: {
    src: '/images/inside-sales/collaboration.webp',
    alt: 'Two remote-work colleagues collaborating at a laptop',
    position: 'center center'
  }
} satisfies Record<string, SiteImage>;

export const serviceImagery: Record<string, SiteImage> = {
  'prospect-research': {
    src: '/images/inside-sales/prospect-research.webp',
    alt: 'Business researcher reviewing source documents beside a laptop',
    position: '62% center'
  },
  'crm-administration': {
    src: '/images/inside-sales/crm-workflow.webp',
    alt: 'Close view of a specialist checking workflow records and printed reports',
    position: '44% center'
  },
  'meeting-coordination': {
    src: '/images/inside-sales/remote-meeting.webp',
    alt: 'Remote colleagues coordinating work during a video meeting',
    position: 'center center'
  },
  'sales-follow-up': {
    src: '/images/inside-sales/follow-up-call.webp',
    alt: 'Sales support professional completing a follow-up call at a laptop',
    position: '58% center'
  },
  'pipeline-reporting': {
    src: '/images/inside-sales/pipeline-review.webp',
    alt: 'Operations specialist reconciling pipeline records across reports and a laptop',
    position: 'center 38%'
  },
  'sales-enablement': {
    src: '/images/inside-sales/sales-enablement.webp',
    alt: 'Sales enablement specialist presenting an approved working document on a video call',
    position: 'center center'
  }
};

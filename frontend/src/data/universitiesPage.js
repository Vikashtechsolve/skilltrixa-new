/**
 * University partnerships page, hero copy and stats.
 * Keep figures aligned with your audited marketing numbers (see also heroStats.js).
 */
export const UNIVERSITY_HERO = {
  eyebrow: 'University tie ups',
  headline: 'From Campus to Corporate, We Make Students Job Ready',
  subtext:
    'Skilltrixa partners with universities to deliver real world training, continuous assessment, and career focused learning. We run structured, time bound tie ups that build job ready skills right on your campus.',
  ctaLabel: 'Contact us',
  /** Update to your real partnerships inbox or /contact when available. */
  ctaHref: 'mailto:partnerships@skilltrixa.com?subject=University%20partnership%20enquiry',
  image: {
    src: 'https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?auto=format&fit=crop&w=1200&q=86',
    srcSet:
      'https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?auto=format&fit=crop&w=640&q=85 640w, https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?auto=format&fit=crop&w=960&q=86 960w, https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?auto=format&fit=crop&w=1200&q=86 1200w',
    alt: 'Students in a classroom at desks during an assessment, Indian higher education context',
  },
  /** Shown in hero; `shortLabel` = compact word for the metric bar. */
  stats: [
    {
      id: 'partners',
      icon: 'building',
      value: '35',
      suffix: '+',
      shortLabel: 'Campuses',
      label: 'University partners across India',
    },
    {
      id: 'learners',
      icon: 'users',
      value: '20k',
      suffix: '+',
      shortLabel: 'Learners',
      label: 'Learners in programmes & on-campus workshops',
    },
    {
      id: 'placed',
      icon: 'briefcase',
      value: '1200',
      suffix: '+',
      shortLabel: 'Placed',
      label: 'Students placed in tech & analytics roles',
    },
    {
      id: 'tracks',
      icon: 'book',
      value: '4',
      suffix: '',
      shortLabel: 'Tracks',
      label: 'Job ready tracks with continuous assessment',
    },
  ],
}

export const UNIVERSITY_PROBLEM = {
  eyebrow: 'The real problem',
  title: 'The gap between syllabus and the shortlist',
  lead: 'These three issues show up in almost every placement season, on almost every campus.',
  points: [
    {
      id: 'exposure',
      icon: 'exposure',
      title: 'Students lack practical exposure',
      text: 'Too much theory, too little time on real tools, stacks, and interview style problems employers actually use.',
    },
    {
      id: 'placements',
      icon: 'placements',
      title: 'Universities struggle with placements',
      text: 'TPOs juggle vendors, one off workshops, and drives, and outcomes still swing by branch and batch.',
    },
    {
      id: 'assessment',
      icon: 'assessment',
      title: 'No continuous assessment system',
      text: 'End semester marks rarely show who is “interview ready” or where skills are slipping, week on week.',
    },
  ],
  closing:
    'Skilltrixa breaks that pattern with real world training aligned to what the market tests for today, not only the textbook.',
}

export const UNIVERSITY_SOLUTION = {
  eyebrow: 'Our solution',
  title: 'A single partnership, end to end on one platform',
  lead:
    'One clear tie up, one rhythm: your cohorts get structure, practice, and measurable progress from MOU through mock interviews.',
  pillars: [
    {
      id: 'mou',
      icon: 'mou',
      stripLabel: 'MOU',
      title: 'University tie up (MOU based)',
      text: 'Scope, batch plan, and owners on both sides, locked to your placement calendar, not planned add-ons.',
    },
    {
      id: 'training',
      icon: 'training',
      stripLabel: 'Training',
      title: 'Structured training programmes',
      text: 'Semester sized blocks, visible milestones, and a pace your faculty can plan around.',
    },
    {
      id: 'platform',
      icon: 'platform',
      stripLabel: 'Platform',
      title: 'Continuous test platform',
      text: 'Tests, proctoring where it matters, and TPO friendly analytics before shortlists are frozen.',
    },
    {
      id: 'project',
      icon: 'project',
      stripLabel: 'Projects',
      title: 'Real world project exposure',
      text: 'Work that reads like a portfolio, not a certificate, so technical rounds have something solid to talk about.',
    },
  ],
  closing:
    'A structured path so students reach strong outcomes in less time, with visibility for faculty and the placement cell at every step.',
  image: {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
    srcSet:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=640&q=85 640w, https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=960&q=85 960w, https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85 1200w',
    alt: 'Students in a bright classroom, collaborative learning in an Indian school or college setting',
  },
}

/** Outcome-oriented sequence: partnership through to campus hiring readiness. */
export const UNIVERSITY_HOW_WORKS = {
  eyebrow: 'The journey',
  title: 'How Skilltrixa works',
  lead: 'A single flow from the first MOU conversation to job ready, evidence-backed students.',
  steps: [
    {
      id: 'partner',
      icon: 'partner',
      title: 'Partner with University',
      line: 'Tie up with scope, batch plan, and owners on both sides.',
    },
    {
      id: 'deploy',
      icon: 'deploy',
      title: 'Deploy structured program',
      line: 'Semester sized delivery your faculty and TPO can plan around.',
    },
    {
      id: 'assess',
      icon: 'assess',
      title: 'Continuous testing of students (platform)',
      line: 'Practice, tests, and progress signals on one platform, before the shortlist freezes.',
    },
    {
      id: 'projects',
      icon: 'projects',
      title: 'Real world project exposure',
      line: 'Work that reads like a portfolio, not just a line on a resume.',
    },
    {
      id: 'outcome',
      icon: 'outcome',
      title: 'Job ready students',
      line: 'Cohorts the placement team can vouch for with data, not only intuition.',
    },
  ],
}

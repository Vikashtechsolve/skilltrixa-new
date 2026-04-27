/**
 * Data Science Program — content config consumed by ProgramTemplate.
 * Visual layout / styling is identical to the Full Stack page; only the
 * text and program-specific details change.
 */
export const dataScienceProgram = {
  meta: {
    title: 'Data Science Program | Skilltrixa',
    description:
      'Learn Data Science with Skilltrixa — Python, Pandas, NumPy, Matplotlib, statistics, and ML fundamentals with real-world projects and placement support.',
  },

  hero: {
    kicker: 'Career-Ready Program',
    title: { lead: 'Data Science', accent: 'Program' },
    subtitle:
      'Master Python, data analysis, and machine learning fundamentals with Pandas, NumPy, and Matplotlib. Build a data analysis dashboard, a prediction model, and a business insights project — graduate ready to turn raw data into decisions.',
    images: [
      '/hero/fsd-hero-1.png',
      '/hero/fsd-hero-2.png',
      '/hero/fsd-hero-3.png',
    ],
    batchDate: '20 January 2026',
    batchSoft: 'Limited seats · Mentor-led cohort',
    badges: [
      { title: 'Python-first curriculum', value: 'From basics to ML-ready scripting' },
      { title: 'Real-world datasets', value: 'Practice on production-style data' },
      { title: 'Placement preparation', value: 'Resumes, mocks, and interview coaching' },
      { title: 'Mentorship support', value: 'Guidance from working data scientists' },
      { title: 'Pandas, NumPy & Stats', value: 'Wrangle, analyze, and model end-to-end' },
      { title: 'Job-ready output', value: 'Notebooks, dashboards, and clean code' },
    ],
    stats: [
      { value: '3–6 Months', label: 'Course Duration' },
      { value: 'Training + Internship', label: 'Program Schedule' },
      { value: 'Online', label: 'Mode' },
      { value: 'Beginner to Advanced', label: 'Level' },
    ],
  },

  about: {
    eyebrow: 'The Skilltrixa approach',
    titleHead: 'What makes',
    titleBrand: 'Skilltrixa',
    titleTail: 'Different',
    lead:
      'Three ways we go beyond theory — curriculum that maps to how data teams build, training led by people who have shipped, and a path to placement that does not end at the last lecture.',
    pillars: [
      {
        id: 'industry',
        title: 'Industry-Focused Learning',
        text: 'We bridge the gap between academics and industry with a job-ready data science curriculum built for real analyst and scientist roles.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Team collaborating in a learning environment',
      },
      {
        id: 'expert',
        title: 'Expert-Led Training',
        text: 'Learn directly from experienced data professionals working at top tech companies and shipping data products at scale.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Mentor with students in a live session',
      },
      {
        id: 'placement',
        title: 'Strong Placement Support',
        text: 'From career mentoring to industry connections and alumni support, we help you move from learning to earning.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Professional in a high-tech work environment',
      },
    ],
  },

  why: {
    titleLead: 'Why Choose',
    titleAccent: 'This Program ?',
    lead: 'A career-focused data science program built to take you from learning to hiring-ready.',
    cards: [
      {
        heading: 'Job-Focused Curriculum',
        text: 'Our curriculum is carefully designed around current industry requirements, ensuring you learn exactly what companies expect from data analysts and scientists — not outdated theory.',
      },
      {
        heading: 'Structure Growth Path',
        text: 'Whether you choose the Mini Program (fast-track) or the Macro Program (deep mastery), the learning journey is structured to match your career goals and experience level.',
      },
      {
        heading: 'Industry-Experienced Mentor',
        text: 'Learn directly from working professionals with real-world experience in shipping data products, not just academic instructors.',
      },
      {
        heading: 'Internship Experience Included',
        text: 'Gain real industry exposure through mandatory internships that help you apply your learning in real-world environments and strengthen your resume.',
      },
      {
        heading: 'Hands-On, Project-Driven Learning',
        text: 'Every concept is backed by practical implementation, real-world projects, and portfolio-ready notebooks that showcase your skills to recruiters.',
      },
      {
        heading: 'Career Support & Placement Assistance',
        text: 'From resume building and mock interviews to job referrals and hiring support — we help you transition from learner to professional.',
      },
    ],
  },

  tech: {
    eyebrow: 'Tech Stack',
    title: "Technologies & Skills You'll Learn",
    lead: 'A comprehensive curriculum covering the most in-demand data science skills used by top companies worldwide.',
    cards: [
      {
        icon: 'code',
        heading: 'Programming with Python',
        tags: ['Python', 'Jupyter', 'OOP', 'Scripting'],
      },
      {
        icon: 'barchart',
        heading: 'Data Analysis',
        tags: ['Pandas', 'NumPy', 'EDA', 'Statistics'],
      },
      {
        icon: 'layers',
        heading: 'Machine Learning Basics',
        tags: ['Scikit-learn', 'Regression', 'Classification', 'Evaluation'],
      },
      {
        icon: 'monitor',
        heading: 'Data Visualization',
        tags: ['Matplotlib', 'Seaborn', 'Dashboards', 'Storytelling'],
      },
    ],
  },

  admission: {
    eyebrow: 'From application to classroom',
    titleBrand: 'Admission',
    titleTail: 'Process',
    deck: 'A clear, three-step path: validate readiness, choose your track with a mentor, then start building with structure and support.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Learner on a device during the Skilltrixa application journey',
    badge: { number: '3', label: 'simple steps' },
    steps: [
      {
        n: 1,
        title: 'Qualifier Test',
        text: 'Appear for a short aptitude and programming readiness test to evaluate logical thinking and commitment.',
      },
      {
        n: 2,
        title: 'Complete Counselling',
        text: 'Attend a one-on-one counselling session to understand your goals, choose the right program (Mini or Macro), and set clear career expectations.',
      },
      {
        n: 3,
        title: 'Start Learning',
        text: 'Enroll in the selected program and begin your structured, mentor-led journey toward becoming a job-ready data professional.',
      },
    ],
  },

  structure: {
    eyebrow: 'Program Details',
    title: 'Program Structure',
    lead:
      'A comprehensive, career-focused program designed to make you industry-ready — including a data analysis dashboard, a prediction model, and a business insights project.',
    badge: 'Macro Program',
    h3: 'Data Science — Macro Program',
    duration: '6 Months',
    mode: 'Offline / Online',
    projects: '3+ Capstone Projects',
    batchSize: 'Small Batches',
    features: [
      'Live instructor-led classes',
      'Hands-on project learning',
      'Placement assistance',
      'Interview preparation',
      'Certificate on completion',
      '1-on-1 mentorship',
    ],
  },

  features: {
    eyebrow: 'Why This Program',
    title: 'Course Features',
    lead: 'Everything you need to go from beginner to job-ready Data Professional.',
    items: [
      {
        icon: 'video',
        heading: 'Live Classes',
        text: 'Interactive, instructor-led sessions with real-time doubt solving and discussions.',
      },
      {
        icon: 'code',
        heading: 'Practical Training',
        text: 'Learn by doing — every concept is reinforced through coding exercises and mini-projects.',
      },
      {
        icon: 'briefcase',
        heading: 'Placement Support',
        text: 'End-to-end placement assistance including resume building, referrals, and mock interviews.',
      },
      {
        icon: 'messagecircle',
        heading: 'Interview Preparation',
        text: 'Dedicated sessions covering analytics case studies, SQL, statistics, and HR rounds.',
      },
      {
        icon: 'heart',
        heading: '1-on-1 Mentorship',
        text: 'Personalized guidance from experienced industry mentors throughout your learning journey.',
      },
      {
        icon: 'globe',
        heading: 'Industry-Aligned Curriculum',
        text: 'Course content designed with inputs from hiring managers at leading tech companies.',
      },
    ],
  },

  career: {
    eyebrow: 'Career Outcomes',
    title: 'Real Skills. Real Results. Real Careers.',
    lead: 'Our graduates land roles at top companies. Here are the career paths this program opens up.',
    cards: [
      {
        icon: 'barchart',
        heading: 'Data Analyst',
        text: 'Turn business questions into queries, dashboards, and reports that drive day-to-day decisions.',
        salary: '₹4–10 LPA',
      },
      {
        icon: 'layers',
        heading: 'Data Scientist',
        text: 'Build predictive models and uncover patterns that shape product and growth strategy.',
        salary: '₹6–18 LPA',
      },
      {
        icon: 'monitor',
        heading: 'Business Analyst',
        text: 'Bridge data and stakeholders — translate metrics into clear, actionable plans.',
        salary: '₹5–12 LPA',
      },
    ],
  },

  fee: {
    eyebrow: 'Investment',
    title: 'Fee Structure',
    lead: 'Invest in your future with our comprehensive Macro Program.',
    image: '/fee-structure.png',
    imageAlt: 'Data professional working on a laptop in a modern co-working space',
    name: 'Macro Program',
    price: '₹25,000',
    priceSuffix: '/ full program',
    includes: [
      '6 months of live training',
      '3+ real-world projects',
      'Placement assistance',
      'Interview preparation',
      '1-on-1 mentorship',
      'Certificate of completion',
      'Lifetime access to resources',
    ],
  },

  testimonialsHeader: {
    eyebrow: 'Student Outcomes',
    titleParts: ['Real ', 'Results.', ' Real ', 'Careers.'],
    lead: 'See how Skilltrixa learners turned data skills into offers at product teams across India.',
  },
  testimonials: [
    {
      id: 'aisha',
      name: 'Aisha Khan',
      role: 'Data Analyst',
      company: 'Razorpay',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=85',
      program: 'Data Science Mini Program',
      duration: '3 months',
      salaryHike: '+58%',
      quote:
        'I went from spreadsheets to building dashboards and prediction models in three months. The Pandas and statistics modules made my first interview feel familiar, not scary.',
    },
    {
      id: 'sahil',
      name: 'Sahil Mehta',
      role: 'Junior Data Scientist',
      company: 'Swiggy',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85',
      program: 'Macro Program + Internship',
      duration: '6 months',
      salaryHike: 'First job',
      quote:
        'I joined with zero ML knowledge. The structured learning, real datasets, and internship gave me production experience — I cleared a data role within weeks of finishing.',
    },
    {
      id: 'neha',
      name: 'Neha Singh',
      role: 'Business Analyst',
      company: 'Deloitte',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=85',
      program: 'Macro Program',
      duration: '6 months',
      salaryHike: '+72%',
      quote:
        'The advanced analytics curriculum and storytelling sessions were the differentiators. From clean EDA to insight decks, every module mapped to what teams actually do.',
    },
  ],

  faq: {
    header: {
      eyebrow: 'Help & clarity',
      titleHead: 'Frequently asked',
      titleAccent: 'questions',
      deck: 'Straight answers for choosing the right track, schedules, and outcomes—before you apply.',
    },
    tabs: [
      { id: 'overview', label: 'Program overview' },
      { id: 'macro', label: 'Macro program' },
    ],
    data: {
      overview: [
        {
          q: 'Do I need a math or stats background?',
          a: "Helpful, not mandatory. We cover the statistics and linear algebra you actually use day-to-day, starting from scratch.",
        },
        {
          q: 'What is the class schedule?',
          a: 'Classes are held on weekends and weekday evenings to accommodate working professionals and students.',
        },
        {
          q: 'Is placement guaranteed?',
          a: 'Yes, our Macro program comes with 100% placement assistance, resume building, and interview preparation until you get hired.',
        },
      ],
      macro: [
        {
          q: 'What exactly is covered in the Macro Program?',
          a: 'Python, Pandas, NumPy, Matplotlib, statistics, machine learning fundamentals, and capstone projects (dashboard, prediction model, and business insights project).',
        },
        {
          q: 'How long is the internship period?',
          a: 'The built-in internship period lasts for 2 months, during which you will work on live projects under the guidance of our technical leads.',
        },
        {
          q: 'Will I get a certificate?',
          a: 'Yes, upon successful completion of the Macro Program and internship, you will receive an industry-recognized certificate.',
        },
      ],
    },
  },

  cta: {
    title: 'Start Your Career as a Data Scientist',
    subcopy:
      "Join Skilltrixa's Data Science Program and build the analytics skills top companies are hiring for.",
    buttonLabel: 'Apply Now',
  },
}

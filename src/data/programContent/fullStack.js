/**
 * Full Stack Development Program — content config consumed by ProgramTemplate.
 * The original FullStackDev.jsx page now renders entirely from this file via
 * the shared template, so the visual UI is unchanged.
 */
export const fullStackProgram = {
  meta: {
    title: 'Full Stack Development Course | Skilltrixa',
    description:
      'Learn Full Stack Development with Skilltrixa and become job-ready with real-world skills and placement support.',
  },

  hero: {
    kicker: 'Career-Ready Program',
    title: { lead: 'Full Stack MERN Development', accent: 'Program' },
    subtitle:
      'Go deep on both frontend and backend with MongoDB, Express, React, and Node—so you can ship end-to-end features, not just static pages. Build real-world projects and a capstone for your portfolio. Graduate job-ready, with the workflows and skills hiring teams expect.',
    images: [
      '/hero/fsd-hero-1.png',
      '/hero/fsd-hero-2.png',
      '/hero/fsd-hero-3.png',
    ],
    batchDate: '8th June 2026',
    batchSoft: 'Limited seats · Mentor-led cohort',
    badges: [
      { title: 'Industry-aligned curriculum', value: 'Modules mapped to what product teams build today' },
      { title: 'Real-world projects', value: 'Ship portfolio apps, not just tutorial drills' },
      { title: 'Placement preparation', value: 'Resumes, mocks, and interview-focused coaching' },
      { title: 'Mentorship support', value: 'Guidance from experienced full-stack developers' },
      { title: 'MERN & APIs', value: 'MongoDB, Express, React & Node end-to-end' },
      { title: 'Job-ready output', value: 'Git, testing habits, and deploy-ready code' },
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
      'Three ways we go beyond theory — curriculum that maps to how teams build, training led by people who have shipped, and a path to placement that does not end at the last lecture.',
    pillars: [
      {
        id: 'industry',
        title: 'Industry-Focused Learning',
        text: 'We bridge the gap between academics and industry with a job-ready full stack curriculum built for real-world development roles.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Team collaborating in a learning environment',
      },
      {
        id: 'expert',
        title: 'Expert-Led Training',
        text: 'Learn directly from experienced professionals working at top tech companies and building products at scale.',
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
    lead: 'A career-focused full-stack program built to take you from learning to hiring-ready.',
    cards: [
      {
        heading: 'Job-Focused Curriculum',
        text: 'Our curriculum is carefully designed around current industry requirements, ensuring you learn exactly what companies expect from full-stack developers — not outdated theory.',
      },
      {
        heading: 'Structure Growth Path',
        text: 'Whether you choose the Mini Program (fast-track) or the Macro Program (deep mastery), the learning journey is structured to match your career goals and experience level.',
      },
      {
        heading: 'Industry-Experienced Mentor',
        text: 'Learn directly from working professionals with real-world experience in building and scaling applications, not just academic instructors.',
      },
      {
        heading: 'Internship Experience Included',
        text: 'Gain real industry exposure through mandatory internships that help you apply your learning in real-world environments and strengthen your resume.',
      },
      {
        heading: 'Hands-On, Project-Driven Learning',
        text: 'Every concept is backed by practical implementation, real-world projects, and portfolio-ready applications that showcase your skills to recruiters.',
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
    lead: 'A comprehensive curriculum covering the most in-demand technologies used by top companies worldwide.',
    cards: [
      {
        icon: 'code',
        heading: 'Frontend Development',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      },
      {
        icon: 'server',
        heading: 'Backend Development',
        tags: ['Node.js', 'Express.js', 'REST APIs'],
      },
      {
        icon: 'database',
        heading: 'Database Management',
        tags: ['MongoDB', 'SQL', 'Mongoose'],
      },
      {
        icon: 'gitbranch',
        heading: 'Tools & DevOps',
        tags: ['Git', 'GitHub', 'Postman', 'Deployment'],
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
        text: 'Enroll in the selected program and begin your structured, mentor-led journey toward becoming a job-ready full-stack MERN developer.',
      },
    ],
  },

  structure: {
    eyebrow: 'Program Details',
    title: 'Program Structure',
    lead: 'A comprehensive, career-focused program designed to make you industry-ready.',
    badge: 'Macro Program',
    h3: 'Full Stack Development — Macro Program',
    duration: '6 Months',
    mode: 'Offline / Online',
    projects: '5+ Real Projects',
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
    lead: 'Everything you need to go from beginner to job-ready Full Stack Developer.',
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
        text: 'Dedicated sessions covering DSA, system design, HR rounds, and technical interview prep.',
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
        icon: 'code',
        heading: 'Full Stack Developer',
        text: 'Build and maintain complete web applications, working across frontend and backend technologies.',
        salary: '₹6–15 LPA',
      },
      {
        icon: 'layers',
        heading: 'Software Engineer',
        text: 'Design, develop, and deploy scalable software solutions for products used by millions.',
        salary: '₹5–18 LPA',
      },
      {
        icon: 'monitor',
        heading: 'Web Developer',
        text: 'Create stunning, responsive websites and web applications with modern frameworks and tools.',
        salary: '₹4–12 LPA',
      },
    ],
  },

  fee: {
    eyebrow: 'Investment',
    title: 'Fee Structure',
    lead: 'Invest in your future with our comprehensive Macro Program.',
    image: '/testimonials/fee_structure.jpg',
    imageAlt: 'Full-stack developer working on a laptop in a modern co-working space',
    name: 'Macro Program',
    price: '₹25,000',
    priceSuffix: '/ full program',
    includes: [
      '6 months of live training',
      '5+ real-world projects',
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
    lead: 'See how Skilltrixa learners turned skills into offers at product teams across India.',
  },
  testimonials: [
    {
      id: 'riya',
      name: 'Riya Sharma',
      role: 'Junior Full Stack Developer',
      company: 'Rocket',
      photo: '/testimonials/Riya_Sharma.jpg',
      program: 'MERN Mini Program',
      duration: '3 months',
      salaryHike: '+62%',
      quote:
        'I went from basic HTML and CSS to shipping full-stack MERN projects in just three months. The hands-on practice and DSA sessions made my first interview feel familiar, not scary.',
    },
    {
      id: 'rohit',
      name: 'Rohit Verma',
      role: 'Frontend Developer',
      company: 'Microsoft',
      photo: '/testimonials/Rohit_verma.jpg',
      program: 'Macro Program + Internship',
      duration: '6 months',
      salaryHike: 'First job',
      quote:
        'I joined with zero backend knowledge. The structured learning, live projects, and internship gave me real production experience — I cleared a frontend role within weeks of finishing.',
    },
    {
      id: 'chiya',
      name: 'Chiya Pandey',
      role: 'Software Engineer (MERN)',
      company: 'Deloitte',
      photo: '/testimonials/Chiya_Pandey.jpg',
      program: 'Macro Program',
      duration: '6 months',
      salaryHike: '+85%',
      quote:
        'The advanced curriculum and mentorship were the differentiators. From scalable backend systems to real-time features, every module mapped to what teams actually build.',
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
          q: 'Do I need prior programming experience?',
          a: 'No prior experience is necessary! Our curriculum is designed to take you from absolute beginner to a job-ready full-stack developer.',
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
          a: 'The Macro Program covers everything from HTML/CSS to advanced React, Node.js, system design, DSA, and includes multiple real-world projects.',
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
    title: 'Start Your Career as a Full Stack Developer',
    subcopy:
      "Join Skilltrixa's Full Stack Development Program and build the skills that top companies are looking for.",
    buttonLabel: 'Apply Now',
  },
}

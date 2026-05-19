/**
 * AI / ML Program — content config consumed by ProgramTemplate.
 * Visual layout / styling is identical to the Full Stack page; only the
 * text and program-specific details change.
 */
export const aiMlProgram = {
  meta: {
    title: 'Artificial Intelligence & Machine Learning Program | Skilltrixa',
    description:
      'Learn AI / ML with Skilltrixa — machine learning, deep learning, neural networks, model training, and modern AI tools with real-world projects and placement support.',
  },

  hero: {
    kicker: 'Career-Ready Program',
    title: { lead: 'Artificial Intelligence & Machine Learning', accent: 'Program' },
    subtitle:
      'Go deep on machine learning, deep learning, neural networks, and modern AI tools. Train real models, ship an image classifier, and build a recommendation system — graduate ready to engineer ML systems in production.',
    images: [
      '/hero/fsd-hero-1.png',
      '/hero/fsd-hero-2.png',
      '/hero/fsd-hero-3.png',
    ],
    batchDate: '8th June 2026',
    batchSoft: 'Limited seats · Mentor-led cohort',
    badges: [
      { title: 'Deep ML curriculum', value: 'Classical ML, neural nets, and tooling' },
      { title: 'Real-world projects', value: 'Train, evaluate, and deploy models' },
      { title: 'Placement preparation', value: 'Resumes, mocks, and ML interviews' },
      { title: 'Mentorship support', value: 'Guidance from experienced ML engineers' },
      { title: 'Deep Learning depth', value: 'CNNs, RNNs, and transformer fundamentals' },
      { title: 'Job-ready output', value: 'Reproducible pipelines and clean models' },
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
      'Three ways we go beyond theory — curriculum that maps to how AI teams build, training led by people who have shipped, and a path to placement that does not end at the last lecture.',
    pillars: [
      {
        id: 'industry',
        title: 'Industry-Focused Learning',
        text: 'We bridge the gap between academics and industry with a job-ready AI / ML curriculum built for real engineering and research roles.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Team collaborating in a learning environment',
      },
      {
        id: 'expert',
        title: 'Expert-Led Training',
        text: 'Learn directly from experienced ML professionals working at top tech companies and shipping models at scale.',
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
    lead: 'A career-focused AI / ML program built to take you from learning to hiring-ready.',
    cards: [
      {
        heading: 'Job-Focused Curriculum',
        text: 'Our curriculum is carefully designed around current industry requirements, ensuring you learn exactly what companies expect from ML and AI engineers — not outdated theory.',
      },
      {
        heading: 'Structure Growth Path',
        text: 'Whether you choose the Mini Program (fast-track) or the Macro Program (deep mastery), the learning journey is structured to match your career goals and experience level.',
      },
      {
        heading: 'Industry-Experienced Mentor',
        text: 'Learn directly from working professionals with real-world experience in training and shipping ML models, not just academic instructors.',
      },
      {
        heading: 'Internship Experience Included',
        text: 'Gain real industry exposure through mandatory internships that help you apply your learning in real-world environments and strengthen your resume.',
      },
      {
        heading: 'Hands-On, Project-Driven Learning',
        text: 'Every concept is backed by practical implementation, real-world projects, and portfolio-ready models that showcase your skills to recruiters.',
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
    lead: 'A comprehensive curriculum covering the most in-demand AI and ML skills used by top companies worldwide.',
    cards: [
      {
        icon: 'layers',
        heading: 'Machine Learning',
        tags: ['Scikit-learn', 'Regression', 'Classification', 'Evaluation'],
      },
      {
        icon: 'code',
        heading: 'Deep Learning',
        tags: ['TensorFlow', 'PyTorch', 'CNN', 'RNN'],
      },
      {
        icon: 'server',
        heading: 'Neural Networks',
        tags: ['Backprop', 'Optimization', 'Architectures', 'Training'],
      },
      {
        icon: 'monitor',
        heading: 'AI Tools & Model Training',
        tags: ['Hugging Face', 'OpenAI APIs', 'Notebooks', 'GPUs'],
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
        text: 'Enroll in the selected program and begin your structured, mentor-led journey toward becoming a job-ready ML engineer.',
      },
    ],
  },

  structure: {
    eyebrow: 'Program Details',
    title: 'Program Structure',
    lead:
      'A comprehensive, career-focused program designed to make you industry-ready — including a real ML model, an image classification project, and a recommendation system.',
    badge: 'Macro Program',
    h3: 'AI / ML — Macro Program',
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
    lead: 'Everything you need to go from beginner to job-ready ML Engineer.',
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
        text: 'Dedicated sessions covering ML system design, DSA, deep learning, and HR rounds.',
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
        heading: 'ML Engineer',
        text: 'Design, train, and deploy machine learning models that power features used by millions of users.',
        salary: '₹6–20 LPA',
      },
      {
        icon: 'layers',
        heading: 'AI Engineer',
        text: 'Build intelligent systems combining ML, deep learning, and modern AI APIs in production.',
        salary: '₹8–25 LPA',
      },
      {
        icon: 'barchart',
        heading: 'Data Scientist',
        text: 'Turn data into models that drive product, growth, and personalization decisions.',
        salary: '₹6–18 LPA',
      },
    ],
  },

  fee: {
    eyebrow: 'Investment',
    title: 'Fee Structure',
    lead: 'Invest in your future with our comprehensive Macro Program.',
    image: '/testimonials/fee_structure.jpg',
    imageAlt: 'ML engineer working on a laptop in a modern co-working space',
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
    lead: 'See how Skilltrixa learners turned ML skills into offers at product teams across India.',
  },
  testimonials: [
    {
      id: 'karan',
      name: 'Karan Bhatt',
      role: 'ML Engineer',
      company: 'Flipkart',
      photo: '/testimonials/Karan_bhatt.jpg',
      program: 'AI/ML Macro Program',
      duration: '3 months',
      salaryHike: '+68%',
      quote:
        'I went from theory to shipping models in three months. The deep learning sessions and real datasets made my first interview feel familiar, not scary.',
    },
    {
      id: 'priya',
      name: 'Priya Yadav',
      role: 'AI Engineer',
      company: 'Microsoft',
      photo: '/testimonials/Priya_yadav.jpg',
      program: 'Macro Program + Internship',
      duration: '6 months',
      salaryHike: 'First job',
      quote:
        'I joined with zero deep learning knowledge. The structured curriculum, live projects, and internship gave me production experience — I cleared an AI role within weeks of finishing.',
    },
    {
      id: 'neeraj',
      name: 'Neeraj Sharma',
      role: 'Data Scientist',
      company: 'Razorpay',
      photo: '/testimonials/Neeraj_sharma.jpg',
      program: 'Macro Program',
      duration: '6 months',
      salaryHike: '+90%',
      quote:
        'The advanced ML curriculum and mentorship were the differentiators. From classical models to neural networks, every module mapped to what teams actually build.',
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
          q: 'Do I need prior ML experience?',
          a: "No. We start from Python and basic statistics, then move into machine learning and deep learning step by step.",
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
          a: 'Python, classical ML, deep learning, neural networks, model training, and capstone projects (ML model, image classifier, and recommendation system).',
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
    title: 'Start Your Career as an ML Engineer',
    subcopy:
      "Join Skilltrixa's AI / ML Program and build the deep learning and modeling skills top product teams are hiring for.",
    buttonLabel: 'Apply Now',
  },
}

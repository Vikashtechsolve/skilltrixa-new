/**
 * Generative AI Program — content config consumed by ProgramTemplate.
 * Visual layout / styling is identical to the Full Stack page; only the
 * text and program-specific details change.
 */
export const genAiProgram = {
  meta: {
    title: 'Generative AI Program | Skilltrixa',
    description:
      'Learn Generative AI with Skilltrixa — prompt engineering, LLMs, chatbots, AI tools (OpenAI), and AI automation with real-world projects and placement support.',
  },

  hero: {
    kicker: 'Career-Ready Program',
    title: { lead: 'Generative AI', accent: 'Program' },
    subtitle:
      'Master prompt engineering, large language models, chatbots, and AI automation with tools like the OpenAI APIs. Ship a working AI chatbot, content generator, and automation tool — graduate ready to build the next generation of AI-powered products.',
    images: [
      '/hero/fsd-hero-1.png',
      '/hero/fsd-hero-2.png',
      '/hero/fsd-hero-3.png',
    ],
    batchDate: '20 January 2026',
    batchSoft: 'Limited seats · Mentor-led cohort',
    badges: [
      { title: 'Prompt-engineering depth', value: 'Patterns that scale from demos to prod' },
      { title: 'Real-world projects', value: 'Chatbot, generator, and automation tool' },
      { title: 'Placement preparation', value: 'Resumes, mocks, and AI-role interviews' },
      { title: 'Mentorship support', value: 'Guidance from working AI engineers' },
      { title: 'LLMs & APIs', value: 'OpenAI, embeddings, and RAG fundamentals' },
      { title: 'Job-ready output', value: 'Shippable AI features, not just demos' },
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
        text: 'We bridge the gap between academics and industry with a job-ready Generative AI curriculum built for real engineering and AI roles.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Team collaborating in a learning environment',
      },
      {
        id: 'expert',
        title: 'Expert-Led Training',
        text: 'Learn directly from experienced AI professionals working at top tech companies and shipping LLM-powered products at scale.',
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
    lead: 'A career-focused Generative AI program built to take you from learning to hiring-ready.',
    cards: [
      {
        heading: 'Job-Focused Curriculum',
        text: 'Our curriculum is carefully designed around current industry requirements, ensuring you learn exactly what companies expect from AI engineers and prompt specialists — not outdated theory.',
      },
      {
        heading: 'Structure Growth Path',
        text: 'Whether you choose the Mini Program (fast-track) or the Macro Program (deep mastery), the learning journey is structured to match your career goals and experience level.',
      },
      {
        heading: 'Industry-Experienced Mentor',
        text: 'Learn directly from working professionals with real-world experience in shipping LLM-powered features, not just academic instructors.',
      },
      {
        heading: 'Internship Experience Included',
        text: 'Gain real industry exposure through mandatory internships that help you apply your learning in real-world environments and strengthen your resume.',
      },
      {
        heading: 'Hands-On, Project-Driven Learning',
        text: 'Every concept is backed by practical implementation, real-world projects, and portfolio-ready AI apps that showcase your skills to recruiters.',
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
    lead: 'A comprehensive curriculum covering the most in-demand Generative AI skills used by top companies worldwide.',
    cards: [
      {
        icon: 'code',
        heading: 'Prompt Engineering',
        tags: ['Prompting', 'Patterns', 'Eval', 'Guardrails'],
      },
      {
        icon: 'layers',
        heading: 'LLMs & RAG',
        tags: ['OpenAI', 'Embeddings', 'Vector DBs', 'Tooling'],
      },
      {
        icon: 'messagecircle',
        heading: 'Chatbots',
        tags: ['Conversational UX', 'Memory', 'Tool use', 'Streaming'],
      },
      {
        icon: 'server',
        heading: 'AI Automation',
        tags: ['Workflows', 'Agents', 'APIs', 'Webhooks'],
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
        text: 'Enroll in the selected program and begin your structured, mentor-led journey toward becoming a job-ready AI engineer.',
      },
    ],
  },

  structure: {
    eyebrow: 'Program Details',
    title: 'Program Structure',
    lead:
      'A comprehensive, career-focused program designed to make you industry-ready — including an AI chatbot, a content generator, and an automation tool.',
    badge: 'Macro Program',
    h3: 'Generative AI — Macro Program',
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
    lead: 'Everything you need to go from beginner to job-ready AI Engineer.',
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
        text: 'Dedicated sessions covering AI system design, LLM evaluation, prompt patterns, and HR rounds.',
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
        icon: 'layers',
        heading: 'AI Engineer',
        text: 'Build LLM-powered features, agents, and automation pipelines used by real products.',
        salary: '₹7–25 LPA',
      },
      {
        icon: 'messagecircle',
        heading: 'Prompt Engineer',
        text: 'Design, evaluate, and ship prompts and chains that make AI systems reliable and useful.',
        salary: '₹6–18 LPA',
      },
      {
        icon: 'code',
        heading: 'AI Developer',
        text: 'Combine LLMs, APIs, and traditional code to build AI-first applications end-to-end.',
        salary: '₹6–20 LPA',
      },
    ],
  },

  fee: {
    eyebrow: 'Investment',
    title: 'Fee Structure',
    lead: 'Invest in your future with our comprehensive Macro Program.',
    image: '/fee-structure.png',
    imageAlt: 'AI engineer working on a laptop in a modern co-working space',
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
    lead: 'See how Skilltrixa learners turned AI skills into offers at product teams across India.',
  },
  testimonials: [
    {
      id: 'ananya',
      name: 'Ananya Roy',
      role: 'AI Engineer',
      company: 'Razorpay',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=85',
      program: 'Gen AI Mini Program',
      duration: '3 months',
      salaryHike: '+78%',
      quote:
        'I went from prompt experiments to shipping real AI features in three months. The LLM and RAG modules made my first interview feel familiar, not scary.',
    },
    {
      id: 'dev',
      name: 'Dev Joshi',
      role: 'Prompt Engineer',
      company: 'Microsoft',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85',
      program: 'Macro Program + Internship',
      duration: '6 months',
      salaryHike: 'First job',
      quote:
        'I joined with zero LLM knowledge. The structured learning, real chatbot projects, and internship gave me production experience — I cleared an AI role within weeks of finishing.',
    },
    {
      id: 'riya',
      name: 'Riya Bansal',
      role: 'AI Developer',
      company: 'Flipkart',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=85',
      program: 'Macro Program',
      duration: '6 months',
      salaryHike: '+95%',
      quote:
        'The advanced GenAI curriculum and mentorship were the differentiators. From prompt patterns to automation agents, every module mapped to what teams actually ship.',
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
          q: 'Do I need ML experience?',
          a: "Helpful but not required. We focus on building with LLMs and APIs more than training models from scratch.",
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
          a: 'Prompt engineering, LLM APIs, chatbot architectures, AI automation, and capstone projects (chatbot, content generator, and automation tool).',
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
    title: 'Start Your Career in Generative AI',
    subcopy:
      "Join Skilltrixa's Generative AI Program and learn to build the LLM-powered products top companies are hiring for.",
    buttonLabel: 'Apply Now',
  },
}

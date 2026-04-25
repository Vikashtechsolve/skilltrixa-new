/**
 * Home page programme cards. Keep `id` in sync with `programs.js` routes.
 * `imageUrl`: decorative hero strip for the card (Unsplash, format + crop).
 */
export const PROGRAM_OVERVIEW = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    tagline: 'React, Node, databases, and deployment the way teams ship today.',
    highlights: [
      'APIs, auth, and Git workflow with code reviews you can learn from',
      'Capstone project plus interview practice on your own codebase',
    ],
    durationLabel: '5 to 7 months',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=82',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    tagline: 'Python, SQL, and ML basics so your numbers tell a clear story.',
    highlights: [
      'Cleaning, charts, and simple models recruiters recognise',
      'Mini projects you can show on GitHub or in your portfolio',
    ],
    durationLabel: '5 to 6 months',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=82',
  },
  {
    id: 'ai-ml',
    title: 'AI and Machine Learning',
    tagline: 'Solid ML foundations before the buzzwords. Pipelines that look real on CV.',
    highlights: [
      'Training, evaluation, and when to pick which model',
      'Hands on notebooks and habits that match team workflows',
    ],
    durationLabel: '6+ months',
    imageUrl:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=82',
  },
  {
    id: 'gen-ai',
    title: 'Generative AI',
    tagline: 'LLMs, prompts, and small apps. Useful in interviews, not only slides.',
    highlights: [
      'Prompting, RAG basics, and calling model APIs safely',
      'Tiny assistants you can demo without overpromising',
    ],
    durationLabel: '3 to 5 months',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=82',
  },
]

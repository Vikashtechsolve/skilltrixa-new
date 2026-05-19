/**
 * Placement stories for the home testimonials section.
 * Portraits are from Unsplash (Indian / campus-student themed, free to use under Unsplash License).
 * Replace with your own files under /public/testimonials/ when you have official campus photos.
 */
const u = (id, w, q = 82) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const TESTIMONIALS = [
  {
    id: 'ananya-k',
    name: 'Ananya Krishnan',
    campus: 'VIT Vellore · CSE',
    role: 'Software Engineer',
    company: 'PhonePe',
    location: 'Bengaluru',
    quote:
      'Mock interviews on the exact stack recruiters asked for changed everything. I stopped guessing and started closing rounds. Skilltrixa’s weekly drills made campus chaos feel like a plan.',
    image: u('photo-1571260899304-425eee4c7efc', 800),
    imageSrcSet: `${u('photo-1571260899304-425eee4c7efc', 400, 80)} 400w, ${u('photo-1571260899304-425eee4c7efc', 800)} 800w`,
    imageAlt: 'Indian student with books — illustrative portrait for Ananya Krishnan',
  },
  {
    id: 'rohan-p',
    name: 'Rohan Patel',
    campus: 'DA-IICT · IT',
    role: 'Associate Consultant',
    company: 'Infosys',
    location: 'Pune',
    quote:
      'Theory and aptitude used to eat my prep time. The platform chunked it into short sessions I could do between labs. By placement week I already knew my weak topics from the analytics dashboard.',
    image: u('photo-1637589308599-3478cc55510d', 800),
    imageSrcSet: `${u('photo-1637589308599-3478cc55510d', 400, 80)} 400w, ${u('photo-1637589308599-3478cc55510d', 800)} 800w`,
    imageAlt: 'Indian student at a laptop — illustrative portrait for Rohan Patel',
  },
  {
    id: 'priya-s',
    name: 'Priya Sharma',
    campus: 'BITS Pilani · EEE',
    role: 'Product Analyst',
    company: 'Flipkart',
    location: 'Bengaluru',
    quote:
      'I was nervous about case rounds. The guided system-design workspace helped me draw trade-offs cleanly under time pressure. My offer call felt like a recap of what I had already practised here.',
    image: u('photo-1604177091072-b7b677a077f6', 800),
    imageSrcSet: `${u('photo-1604177091072-b7b677a077f6', 400, 80)} 400w, ${u('photo-1604177091072-b7b677a077f6', 800)} 800w`,
    imageAlt: 'Young woman on campus — illustrative portrait for Priya Sharma',
  },
  {
    id: 'vikram-n',
    name: 'Vikram Nair',
    campus: 'NIT Trichy · ECE',
    role: 'Graduate Engineer Trainee',
    company: 'Tata Elxsi',
    location: 'Chennai',
    quote:
      'Coming from a non-CS branch, I needed structure. SQL and coding tracks started where I actually was, not where the syllabus pretended I was. My interviewers noticed the gap I had closed.',
    image: u('photo-1663576139896-f1e9b9537634', 800),
    imageSrcSet: `${u('photo-1663576139896-f1e9b9537634', 400, 80)} 400w, ${u('photo-1663576139896-f1e9b9537634', 800)} 800w`,
    imageAlt: 'Indian student in glasses — illustrative portrait for Vikram Nair',
  },
  {
    id: 'meera-j',
    name: 'Meera Joshi',
    campus: 'COEP · Comp',
    role: 'Backend Engineer',
    company: 'Razorpay',
    location: 'Bengaluru',
    quote:
      'Leaderboards looked gimmicky until I saw how they mirrored real shortlists. Competing with friends kept the intensity honest. I walked into the Razorpay round calmer than my internals.',
    image: u('photo-1522661067900-ab829854a57f', 800),
    imageSrcSet: `${u('photo-1522661067900-ab829854a57f', 400, 80)} 400w, ${u('photo-1522661067900-ab829854a57f', 800)} 800w`,
    imageAlt: 'Student at a chalkboard — illustrative portrait for Meera Joshi',
  },
]

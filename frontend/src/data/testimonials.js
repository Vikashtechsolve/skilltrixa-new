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
      'Mock interviews on the exact stack recruiters asked for changed everything. I stopped guessing and started clearing rounds. Skilltrixa weekly drills made placement season feel organised.',
    image: "https://www.sakshi.com/gallery_images/2024/10/25/Actress%20Satya%20Krishnan%20Daughter%20As%20a%20Heroine%20Ananya%20Krishnan%20Photos%20Goes%20Viral%20in%20Social%20Media%20%287%29.jpg",
    imageSrcSet: "https://www.sakshi.com/gallery_images/2024/10/25/Actress%20Satya%20Krishnan%20Daughter%20As%20a%20Heroine%20Ananya%20Krishnan%20Photos%20Goes%20Viral%20in%20Social%20Media%20%287%29.jpg",
    imageAlt: 'Indian student with books, illustrative portrait for Ananya Krishnan',
  },
  {
    id: 'rohan-p',
    name: 'Rohan Patel',
    campus: 'DA-IICT · IT',
    role: 'Associate Consultant',
    company: 'Infosys',
    location: 'Pune',
    quote:
      'Theory and aptitude used to take too much of my prep time. The platform broke it into short sessions I could do between labs. By placement week I already knew my weak topics from the dashboard.',
    image: "https://media.licdn.com/dms/image/v2/D5603AQFDu0dvJWh0Xw/profile-displayphoto-shrink_400_400/B56ZcC07GdGoAg-/0/1748099117871?e=2147483647&v=beta&t=qKS4dC2zFDBhebpnYPANq9SodFLHQeLvERT3Mq8cypA",
    imageSrcSet: 'https://media.licdn.com/dms/image/v2/D5603AQFDu0dvJWh0Xw/profile-displayphoto-shrink_400_400/B56ZcC07GdGoAg-/0/1748099117871?e=2147483647&v=beta&t=qKS4dC2zFDBhebpnYPANq9SodFLHQeLvERT3Mq8cypA',
    imageAlt: 'Indian student at a laptop, illustrative portrait for Rohan Patel',
  },
  {
    id: 'shubh-b',
    name: 'Shubh Bhoda',
    campus: 'BITS Pilani · EEE',
    role: 'Product Analyst',
    company: 'Flipkart',
    location: 'Bengaluru',
    quote:
      'I was nervous about case rounds. The guided system design workspace helped me explain trade offs clearly under time pressure. My offer call felt like a recap of what I had already practised here.',
    image: u('photo-1604177091072-b7b677a077f6', 800),
    imageSrcSet: `${u('photo-1604177091072-b7b677a077f6', 400, 80)} 400w, ${u('photo-1604177091072-b7b677a077f6', 800)} 800w`,
    imageAlt: 'Young woman on campus, illustrative portrait for Priya Sharma',
  },
  {
    id: 'vikram-n',
    name: 'Vikram Nair',
    campus: 'NIT Trichy · ECE',
    role: 'Graduate Engineer Trainee',
    company: 'Tata Elxsi',
    location: 'Chennai',
    quote:
      'Coming from a non CS branch, I needed structure. SQL and coding tracks started where I actually was, not where the syllabus assumed I was. Interviewers noticed the gap I had closed.',
    image: u('photo-1663576139896-f1e9b9537634', 800),
    imageSrcSet: `${u('photo-1663576139896-f1e9b9537634', 400, 80)} 400w, ${u('photo-1663576139896-f1e9b9537634', 800)} 800w`,
    imageAlt: 'Indian student in glasses, illustrative portrait for Vikram Nair',
  },
  {
    id: 'meera-j',
    name: 'Meera Joshi',
    campus: 'COEP · Comp',
    role: 'Backend Engineer',
    company: 'Razorpay',
    location: 'Bengaluru',
    quote:
      'Leaderboards looked gimmicky until I saw how they mirrored real shortlists. Practising with friends kept the pressure honest. I walked into the Razorpay round calmer than my internals.',
    image: "https://www.gdgoenkauniversity.com/uploads/mentor/1709191987-Ms.-Shweta-Kumari.webp",
    imageSrcSet: "https://www.gdgoenkauniversity.com/uploads/mentor/1709191987-Ms.-Shweta-Kumari.webp",
    imageAlt: 'Student at a chalkboard, illustrative portrait for Meera Joshi',
  },
]

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  role: string;
  company?: string;
  rating: number;
  image: string;
  content: string;
  batchYear: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Karthik Subramanian',
    course: 'Full Stack Development – Java',
    role: 'Software Engineer',
    company: 'Leading IT Enterprise',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    content: 'HamoTech IT Solutions changed my career trajectory. The trainers focus 100% on hands-on coding rather than simple slides. Building real Spring Boot & React microservices gave me the confidence to crack technical interviews on my first try!',
    batchYear: '2025'
  },
  {
    id: 't2',
    name: 'Priya Ramanathan',
    course: 'Python with AI / ML',
    role: 'AI / ML Developer',
    company: 'Tech Analytics Firm',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    content: 'Coming from a non-CS background, I was nervous about learning Artificial Intelligence. The trainers at HamoTech broke down complex algorithms into practical code exercises. The placement guidance and mock interviews were top-class.',
    batchYear: '2025'
  },
  {
    id: 't3',
    name: 'Venkatesh Babu',
    course: 'Cloud Computing & DevOps',
    role: 'DevOps Engineer',
    company: 'Cloud Operations Team',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    content: 'The real-time project practice on AWS, Docker, and Kubernetes was the best part of the program. I worked on live deployment pipelines just like real industry teams. Highly recommended for anyone serious about Cloud careers!',
    batchYear: '2025'
  },
  {
    id: 't4',
    name: 'Ananya Sreedhar',
    course: 'Mobile App Development – Flutter',
    role: 'Flutter Developer',
    company: 'Digital Solutions Provider',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    content: 'Excellent mentors! They helped me publish my own Flutter mobile application to the Play Store during the internship phase. The environment is super supportive for learning and personal growth.',
    batchYear: '2026'
  },
  {
    id: 't5',
    name: 'Dinesh Kumar',
    course: 'Full Stack Development – Python',
    role: 'Junior Python Engineer',
    company: 'Fintech Solutions',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    content: 'HamoTech provided me with the ideal balance of theory, real-world project building, and resume preparation. The faculty cared about every student’s progress. I secured my job within 30 days of course completion!',
    batchYear: '2026'
  }
];

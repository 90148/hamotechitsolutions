import bushanImg from '../assets/students/bushan.png';
import yeshwanth1Img from '../assets/students/yeshwanth-1.png';
import manojImg from '../assets/students/manoj.png';
import natarajanImg from '../assets/students/natarajan.png';
import ananthalakshmiImg from '../assets/students/ananthalakshmi.png';
import yeshwanth2Img from '../assets/students/yeshwanth-2.png';
import bhargavSaiImg from '../assets/students/bhargav-sai.png';
import manaasaImg from '../assets/students/manaasa.png';

export interface PlacedStudent {
  id: string;
  name: string;
  role: string;
  company: string;
  packageLPA: string;
  packageNumber: number;
  course: string;
  image: string;
  badge?: string;
  category: 'all' | 'python' | 'fullstack' | 'software-engineer';
  techStack: string[];
  quote?: string;
}

export const PLACED_STUDENTS: PlacedStudent[] = [
  {
    id: 'ps-bhargav',
    name: 'Bhargav Sai',
    role: 'Software Engineer',
    company: 'QuantumWorks',
    packageLPA: '10.5 LPA',
    packageNumber: 10.5,
    course: 'Full Stack Java & Cloud Microservices',
    image: bhargavSaiImg,
    badge: 'Highest Package',
    category: 'software-engineer',
    techStack: ['Java', 'Spring Boot', 'Microservices', 'AWS'],
    quote: 'The live project experience and system design mentorship at HamoTech made all the difference in cracking QuantumWorks.'
  },
  {
    id: 'ps-manoj',
    name: 'Manoj',
    role: 'Full Stack Developer',
    company: 'Teamverse',
    packageLPA: '9.5 LPA',
    packageNumber: 9.5,
    course: 'Full Stack Web Development',
    image: manojImg,
    badge: 'Top CTC',
    category: 'fullstack',
    techStack: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    quote: 'HamoTech taught me end-to-end architecture. From responsive UIs to scalable APIs, I was ready for Day 1 on the job.'
  },
  {
    id: 'ps-yeshwanth2',
    name: 'Yeshwanth',
    role: 'Python Developer',
    company: 'QuantumWorks',
    packageLPA: '8.5 LPA',
    packageNumber: 8.5,
    course: 'Python & Enterprise Backend',
    image: yeshwanth2Img,
    badge: 'Fast-Track Offer',
    category: 'python',
    techStack: ['Python', 'Django', 'REST APIs', 'Docker'],
    quote: 'Daily DSA practice and mock interviews prepared me thoroughly for every technical round at QuantumWorks.'
  },
  {
    id: 'ps-yeshwanth1',
    name: 'Yeshwanth',
    role: 'Python Developer',
    company: 'Teamverse',
    packageLPA: '8.2 LPA',
    packageNumber: 8.2,
    course: 'Full Stack Python Development',
    image: yeshwanth1Img,
    badge: 'Teamverse Placed',
    category: 'python',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Git'],
    quote: 'Hands-on projects boosted my confidence. The placement team connected me directly with hiring managers.'
  },
  {
    id: 'ps-ananthalakshmi',
    name: 'Ananthalakshmi',
    role: 'Software Developer',
    company: 'NovaHamo Technologies',
    packageLPA: '8.0 LPA',
    packageNumber: 8.0,
    course: 'Software Engineering & Cloud Computing',
    image: ananthalakshmiImg,
    badge: 'Star Performer',
    category: 'software-engineer',
    techStack: ['Java', 'React', 'Cloud Services', 'SQL'],
    quote: 'Coming into tech was smooth thanks to the step-by-step curriculum and personalized mentor guidance.'
  },
  {
    id: 'ps-natarajan',
    name: 'Natarajan',
    role: 'Python Developer',
    company: 'Tasa IT Services',
    packageLPA: '7.8 LPA',
    packageNumber: 7.8,
    course: 'Python with Data Engineering',
    image: natarajanImg,
    badge: 'Direct Placement',
    category: 'python',
    techStack: ['Python', 'Pandas', 'Flask', 'MySQL'],
    quote: 'The practical problem-solving approach gave me an edge during the coding assessments and live tests.'
  },
  {
    id: 'ps-bushan',
    name: 'Bushan',
    role: 'Python Developer',
    company: 'Teamverse',
    packageLPA: '7.5 LPA',
    packageNumber: 7.5,
    course: 'Python Full Stack & AI Integrations',
    image: bushanImg,
    badge: 'Teamverse Placed',
    category: 'python',
    techStack: ['Python', 'Django REST', 'Linux', 'Git'],
    quote: 'The mentors pushed us to write clean, production-grade code. Within weeks of completing training, I received my offer!'
  },
  {
    id: 'ps-manaasa',
    name: 'Manaasa',
    role: 'Software Developer',
    company: 'NovaHamo Technologies',
    packageLPA: '7.2 LPA',
    packageNumber: 7.2,
    course: 'Full Stack Software Development',
    image: manaasaImg,
    badge: 'Tech Achiever',
    category: 'software-engineer',
    techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    quote: 'The mock interviews and resume building workshops helped me stand out and land a great software role.'
  }
];

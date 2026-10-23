import bhargavSaiImg from '../assets/students/bhargav-sai.png';
import manojImg from '../assets/students/manoj.png';
import yeshwanth2Img from '../assets/students/yeshwanth-2.png';
import ananthalakshmiImg from '../assets/students/ananthalakshmi.png';
import natarajanImg from '../assets/students/natarajan.png';
import bushanImg from '../assets/students/bushan.png';

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  role: string;
  company?: string;
  packageLPA?: string;
  rating: number;
  image: string;
  content: string;
  batchYear: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-bhargav',
    name: 'Bhargav Sai',
    course: 'Full Stack Java & Microservices',
    role: 'Software Engineer',
    company: 'QuantumWorks',
    packageLPA: '10.5 LPA',
    rating: 5,
    image: bhargavSaiImg,
    content: 'HamoTech IT Solutions completely transformed my career trajectory. The live microservices project and intense technical mock interview rounds gave me the confidence to crack the Software Engineer role at QuantumWorks with 10.5 LPA!',
    batchYear: '2026'
  },
  {
    id: 't-manoj',
    name: 'Manoj',
    course: 'Full Stack Web Development',
    role: 'Full Stack Developer',
    company: 'Teamverse',
    packageLPA: '9.5 LPA',
    rating: 5,
    image: manojImg,
    content: 'The trainers focus 100% on hands-on practical coding rather than theoretical slides. Building full-stack web applications with React and Node.js prepared me directly for day-one expectations at Teamverse.',
    batchYear: '2026'
  },
  {
    id: 't-yeshwanth',
    name: 'Yeshwanth',
    course: 'Python & Enterprise Backend',
    role: 'Python Developer',
    company: 'QuantumWorks',
    packageLPA: '8.5 LPA',
    rating: 5,
    image: yeshwanth2Img,
    content: 'From daily DSA problem solving on LeetCode patterns to building RESTful backend microservices, HamoTech ensured I was fully interview-ready. The placement team stood by me until I accepted my offer!',
    batchYear: '2026'
  },
  {
    id: 't-ananthalakshmi',
    name: 'Ananthalakshmi',
    course: 'Software Engineering & Cloud',
    role: 'Software Developer',
    company: 'NovaHamo Technologies',
    packageLPA: '8.0 LPA',
    rating: 5,
    image: ananthalakshmiImg,
    content: 'The mentor support at HamoTech is unmatched. Whenever I faced bugs in our real-time project labs, the faculty spent extra hours guiding me. Landing a Software Developer role at NovaHamo has been a dream come true!',
    batchYear: '2026'
  },
  {
    id: 't-natarajan',
    name: 'Natarajan',
    course: 'Python with Data Engineering',
    role: 'Python Developer',
    company: 'Tasa IT Services',
    packageLPA: '7.8 LPA',
    rating: 5,
    image: natarajanImg,
    content: 'HamoTech provided me with the ideal balance of deep conceptual clarity and practical project building. The corporate etiquette and soft skills training helped me ace both technical and HR rounds easily.',
    batchYear: '2026'
  },
  {
    id: 't-bushan',
    name: 'Bushan',
    course: 'Python Full Stack & AI',
    role: 'Python Developer',
    company: 'Teamverse',
    packageLPA: '7.5 LPA',
    rating: 5,
    image: bushanImg,
    content: 'The hands-on coding curriculum and dedicated placement cell made my transition into software engineering seamless. I secured my placement at Teamverse within weeks of finishing my course!',
    batchYear: '2026'
  }
];

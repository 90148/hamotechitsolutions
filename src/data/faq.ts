export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What courses are available at HamoTech IT Solutions?',
    answer: 'We offer industry-ready training programs including Full Stack Java Development, Full Stack Python Development, Python with AI & Machine Learning, Cloud & DevOps Engineering, Mobile App Development (Flutter), Basic Programming & Logic (C/C++/Python), Data Analytics & Power BI, MERN Stack Development, UI/UX Design, and Cyber Security Fundamentals.'
  },
  {
    question: 'Who can join these IT training programs?',
    answer: 'Our courses are designed for students, fresh graduates (BE/BTech, BSc, BCA, MCA, Diploma), working professionals looking to transition into IT, non-tech background candidates, and anyone passionate about building a career in software technology.'
  },
  {
    question: 'Do you provide practical hands-on projects?',
    answer: 'Yes! At HamoTech IT Solutions, we follow a 100% practical approach. Every student works on real-time industry projects (such as E-Commerce platforms, AI predictive tools, Cloud CI/CD pipelines, and Mobile Apps) to gain authentic software engineering experience.'
  },
  {
    question: 'Is placement guidance and career support provided?',
    answer: 'Absolutely. We provide comprehensive placement guidance including professional resume building, LinkedIn profile optimization, technical mock interviews, aptitude training, soft skills coaching, and interview scheduling support.'
  },
  {
    question: 'Do you offer course completion and project certificates?',
    answer: 'Yes, upon successful completion of your course and real-time project work, you will receive an industry-recognized HamoTech IT Solutions Course Completion Certificate and Internship/Project Certification.'
  },
  {
    question: 'Can complete beginners with no coding background join?',
    answer: 'Yes! All our courses start from basic fundamental concepts before moving into advanced topics. Our experienced trainers guide you step-by-step with zero-level assumptions.'
  },
  {
    question: 'Do you provide internship opportunities?',
    answer: 'Yes! We offer live project internship opportunities where candidates collaborate in teams, practice Git/GitHub workflows, build software features under mentor guidance, and earn an official Internship Certificate.'
  },
  {
    question: 'What is the average duration of the training courses?',
    answer: 'Course durations range from 2 months (Basic Programming) to 4 months (Full Stack Development & Cloud DevOps), depending on the depth and specialization of the selected stack.'
  },
  {
    question: 'Are both Online and Offline training modes available?',
    answer: 'Yes! We offer flexible learning options: Classroom Offline Training at our Guduvancheri, Chennai campus, Live Interactive Online Classes for remote learners, and Hybrid modes.'
  },
  {
    question: 'Are hostel facilities available for outstation students?',
    answer: 'Yes, comfortable and safe student hostel accommodation facilities are available near our Guduvancheri institute location for offline students.'
  }
];

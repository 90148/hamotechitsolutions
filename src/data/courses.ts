export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'Full Stack' | 'AI & Data' | 'Cloud & DevOps' | 'Mobile & UI' | 'Programming Foundation' | 'Cyber Security';
  shortDescription: string;
  fullDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Beginner to Advanced' | 'Advanced' | 'Beginner to Intermediate';
  technologies: string[];
  projectsCount: number;
  featured?: boolean;
  badge?: string;
  iconName: string; // Lucide icon mapping identifier
  learningOutcomes: string[];
  modules: CourseModule[];
  careerOpportunities: string[];
  prerequisites: string;
  tools: string[];
}

export const COURSES: Course[] = [
  {
    id: 'full-stack-java',
    title: 'Full Stack Development – Java',
    category: 'Full Stack',
    shortDescription: 'Master enterprise Java, Spring Boot, Microservices, React frontend, and SQL to build high-performance web applications.',
    fullDescription: 'Our Full Stack Java course transforms you into an enterprise-ready software engineer. You will learn Java from fundamental object-oriented principles to advanced Spring Boot microservices, RESTful API design, database modeling with PostgreSQL/MySQL, and modern frontend development with React.',
    duration: '4 Months (16 Weeks)',
    level: 'Beginner to Advanced',
    technologies: ['Java', 'Spring Boot', 'React', 'REST API', 'PostgreSQL / SQL', 'Git / GitHub', 'Docker'],
    projectsCount: 5,
    featured: true,
    badge: 'MOST POPULAR',
    iconName: 'Code2',
    learningOutcomes: [
      'Build robust REST APIs using Java 17+ and Spring Boot',
      'Develop modern interactive web user interfaces with React and TypeScript',
      'Design relational database schemas and optimize SQL queries',
      'Implement authentication & authorization with JWT & Spring Security',
      'Deploy full stack Java apps to cloud environments using Git & Docker'
    ],
    modules: [
      {
        title: 'Module 1: Core & Advanced Java Fundamentals',
        topics: ['OOP Principles & Data Structures', 'Collections Framework & Streams API', 'Exception Handling & Multi-threading', 'Maven & Unit Testing with JUnit']
      },
      {
        title: 'Module 2: Enterprise Backend with Spring Boot',
        topics: ['Spring Core & Dependency Injection', 'Spring MVC & RESTful Services', 'Spring Data JPA & Hibernate ORM', 'Spring Security & JWT Authentication']
      },
      {
        title: 'Module 3: Frontend Development with React',
        topics: ['Modern JavaScript (ES6+) & TypeScript', 'React Hooks, State Management & Components', 'Axios Integration & Async API Calls', 'Tailwind CSS UI Styling']
      },
      {
        title: 'Module 4: Full Stack Integration & Cloud Deployment',
        topics: ['Microservices Architecture', 'Database Migration with Liquibase/Flyway', 'Docker Containerization', 'CI/CD Pipelines & AWS Deployment']
      }
    ],
    careerOpportunities: ['Full Stack Java Developer', 'Java Backend Engineer', 'Software Development Engineer (SDE)', 'API Developer'],
    prerequisites: 'Basic understanding of computer concepts. No prior coding experience required.',
    tools: ['IntelliJ IDEA / Eclipse', 'VS Code', 'Postman', 'Git & GitHub', 'MySQL Workbench', 'Docker Desktop']
  },
  {
    id: 'full-stack-python',
    title: 'Full Stack Development – Python',
    category: 'Full Stack',
    shortDescription: 'Build scalpable web platforms using Python, Django, Flask, React, REST APIs, and database engineering.',
    fullDescription: 'Become a highly versatile developer with Python. Master core Python scripting, web frameworks like Django and Flask, frontend integration with React, object-relational mapping, and cloud backend architecture.',
    duration: '4 Months (16 Weeks)',
    level: 'Beginner to Advanced',
    technologies: ['Python', 'Django', 'Flask', 'React', 'REST API', 'PostgreSQL', 'Git'],
    projectsCount: 4,
    featured: true,
    badge: 'HIGH DEMAND',
    iconName: 'Terminal',
    learningOutcomes: [
      'Master Python programming syntax, OOP, and data structures',
      'Build scalable web applications using Django & Flask frameworks',
      'Construct robust REST APIs with Django REST Framework (DRF)',
      'Connect frontend React apps with Python backend servers',
      'Manage databases with PostgreSQL and ORM queries'
    ],
    modules: [
      {
        title: 'Module 1: Python Core & Object-Oriented Scripting',
        topics: ['Data Types, Functions & Modules', 'OOP, Decorators & Generators', 'File I/O & Exception Handling', 'Virtual Environments & Pip']
      },
      {
        title: 'Module 2: Django Backend & DRF Framework',
        topics: ['Django MVT Architecture', 'Models, Views, URLs & Forms', 'Django REST Framework (DRF) APIs', 'Token Authentication & Middleware']
      },
      {
        title: 'Module 3: Frontend Web Development',
        topics: ['HTML5, CSS3 & JavaScript ES6+', 'React Components & Hooks', 'Connecting Frontend to Django API', 'Responsive UI Design']
      },
      {
        title: 'Module 4: Deployment & Database Mastery',
        topics: ['PostgreSQL Database Integration', 'Deployment on Render / AWS', 'Git Workflow & Version Control']
      }
    ],
    careerOpportunities: ['Python Full Stack Developer', 'Django Backend Engineer', 'Software Engineer', 'Web Application Developer'],
    prerequisites: 'Open to freshers and experienced professionals.',
    tools: ['PyCharm / VS Code', 'Postman', 'Git', 'PostgreSQL', 'Docker']
  },
  {
    id: 'python-ai-ml',
    title: 'Python with AI / Machine Learning',
    category: 'AI & Data',
    shortDescription: 'Master Artificial Intelligence, Neural Networks, Pandas, Scikit-Learn, Deep Learning, and AI model deployment.',
    fullDescription: 'Step into the future of technology with Artificial Intelligence and Machine Learning. Learn data analytics, predictive model creation, natural language processing, computer vision, and deep learning algorithms using Python.',
    duration: '3.5 Months (14 Weeks)',
    level: 'Intermediate',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'TensorFlow / PyTorch', 'Matplotlib', 'Streamlit'],
    projectsCount: 6,
    featured: true,
    badge: 'TRENDING IN 2026',
    iconName: 'Cpu',
    learningOutcomes: [
      'Perform data wrangling and exploratory analysis with Pandas & NumPy',
      'Train Supervised and Unsupervised Machine Learning models',
      'Develop Neural Networks with TensorFlow and PyTorch',
      'Build AI-powered prediction models and web apps with Streamlit',
      'Evaluate model performance, hyperparameters, and accuracy metrics'
    ],
    modules: [
      {
        title: 'Module 1: Data Science Foundations with Python',
        topics: ['Python for Data Analysis', 'NumPy Multi-dimensional Arrays', 'Pandas Dataframes & Cleaning', 'Matplotlib & Seaborn Visualization']
      },
      {
        title: 'Module 2: Supervised & Unsupervised Machine Learning',
        topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'K-Means Clustering & PCA', 'Scikit-Learn Model Pipeline']
      },
      {
        title: 'Module 3: Deep Learning & Neural Networks',
        topics: ['Artificial Neural Networks (ANN)', 'Convolutional Neural Networks (CNN)', 'Natural Language Processing (NLP)', 'TensorFlow & PyTorch Basics']
      },
      {
        title: 'Module 4: AI Model Deployment',
        topics: ['Building Web Interfaces with Streamlit', 'Deploying ML Models as REST APIs', 'Model Monitoring & Optimization']
      }
    ],
    careerOpportunities: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'AI Product Specialist'],
    prerequisites: 'Basic knowledge of Python or mathematics is helpful but guided from scratch.',
    tools: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'Streamlit', 'Anaconda']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps Engineering',
    category: 'Cloud & DevOps',
    shortDescription: 'Master AWS, Azure, Docker, Kubernetes, CI/CD automation pipelines, Linux, and Infrastructure as Code.',
    fullDescription: 'Become an indispensable Cloud & DevOps Engineer. Automate software deployment pipelines, manage scalable cloud infrastructure on AWS and Azure, containerize applications with Docker, and orchestrate with Kubernetes.',
    duration: '3.5 Months (14 Weeks)',
    level: 'Beginner to Advanced',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux Shell', 'Git'],
    projectsCount: 5,
    featured: true,
    badge: 'HIGH SALARY ROLE',
    iconName: 'Cloud',
    learningOutcomes: [
      'Manage Amazon Web Services (AWS EC2, S3, RDS, IAM, VPC)',
      'Automate deployment pipelines using Jenkins and GitHub Actions',
      'Containerize applications using Docker & Docker Compose',
      'Orchestrate container clusters with Kubernetes (EKS/AKS)',
      'Manage Infrastructure as Code using Terraform'
    ],
    modules: [
      {
        title: 'Module 1: Linux Administration & Cloud Essentials',
        topics: ['Linux Commands & Shell Scripting', 'Networking Foundations & Security', 'AWS Infrastructure Essentials (EC2, S3, VPC)', 'Azure Fundamentals']
      },
      {
        title: 'Module 2: Containerization with Docker',
        topics: ['Docker Engine & Dockerfiles', 'Container Networking & Volumes', 'Docker Compose Multi-container Apps', 'Docker Registry Management']
      },
      {
        title: 'Module 3: Orchestration with Kubernetes',
        topics: ['Kubernetes Architecture & Pods', 'Deployments, Services & Ingress', 'Helm Package Manager', 'Kubernetes Cluster Monitoring']
      },
      {
        title: 'Module 4: CI/CD Automation & Terraform',
        topics: ['Jenkins Pipeline Creation', 'GitHub Actions Workflows', 'Infrastructure as Code with Terraform', 'DevOps Real-world Deployment Project']
      }
    ],
    careerOpportunities: ['DevOps Engineer', 'Cloud Administrator', 'Site Reliability Engineer (SRE)', 'Infrastructure Engineer'],
    prerequisites: 'Fundamental understanding of operating systems.',
    tools: ['AWS Management Console', 'Docker Desktop', 'Kubectl', 'Jenkins', 'Terraform CLI', 'Git']
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development – Flutter & Dart',
    category: 'Mobile & UI',
    shortDescription: 'Build beautiful cross-platform iOS and Android mobile apps using Flutter, Dart, Firebase, and REST API integration.',
    fullDescription: 'Learn cross-platform mobile development with Flutter and Dart. Design slick mobile interfaces, connect Firebase real-time databases, integrate backend REST APIs, and publish apps to the Google Play Store and Apple App Store.',
    duration: '3 Months (12 Weeks)',
    level: 'Beginner to Advanced',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management (Provider/Riverpod)', 'Git'],
    projectsCount: 4,
    featured: false,
    iconName: 'Smartphone',
    learningOutcomes: [
      'Master the Dart programming language',
      'Build responsive cross-platform UI layouts with Flutter Widgets',
      'Integrate Firebase Authentication, Firestore, and Cloud Messaging',
      'Implement robust state management (Provider / Bloc / Riverpod)',
      'Publish mobile apps to Google Play Store and Apple App Store'
    ],
    modules: [
      {
        title: 'Module 1: Dart Basics & Flutter Setup',
        topics: ['Dart Syntax & OOP Concepts', 'Flutter SDK Installation & Android Studio', 'Widget Tree & Material Design UI']
      },
      {
        title: 'Module 2: Interactive UI & Navigation',
        topics: ['Stateful & Stateless Widgets', 'Form Validation & Input Handling', 'Page Routing & Responsive Layouts']
      },
      {
        title: 'Module 3: Backend Integration & Firebase',
        topics: ['Firebase Auth (Email, Google Login)', 'Cloud Firestore Real-time Database', 'REST API Consumption with Dio/Http']
      },
      {
        title: 'Module 4: App Deployment & Publishing',
        topics: ['Local Storage & SQLite', 'App Release Generation (APK/AAB)', 'Publishing Guidelines for App Store & Play Store']
      }
    ],
    careerOpportunities: ['Flutter Mobile App Developer', 'Android / iOS Developer', 'Cross-Platform Engineer'],
    prerequisites: 'Basic logic and passion for mobile applications.',
    tools: ['Android Studio', 'VS Code', 'Flutter SDK', 'Firebase Console', 'Postman']
  },
  {
    id: 'basic-programming',
    title: 'Basic Programming & Logic Building',
    category: 'Programming Foundation',
    shortDescription: 'Master C, C++, Python, algorithm logic, data structures, and problem-solving fundamentals.',
    fullDescription: 'The perfect starter program for beginners, school/college students, and non-IT professionals looking to build an unbreakable foundation in computer programming logic, problem-solving, and algorithmic thinking.',
    duration: '2 Months (8 Weeks)',
    level: 'Beginner',
    technologies: ['C Language', 'C++', 'Python Foundations', 'Data Structures Basics', 'Algorithm Logic'],
    projectsCount: 3,
    featured: false,
    iconName: 'Code',
    learningOutcomes: [
      'Understand core programming logic and flow control',
      'Write structured C and C++ programs',
      'Master memory management, pointers, and functions',
      'Solve algorithmic coding challenges effortlessly',
      'Transition smoothly into advanced tech stacks'
    ],
    modules: [
      {
        title: 'Module 1: C Programming & Logic Essentials',
        topics: ['Variables, Operators & Expressions', 'Control Statements (If-Else, Loops)', 'Functions, Arrays & Strings']
      },
      {
        title: 'Module 2: Pointers & Memory Management',
        topics: ['Pointers & Address Arithmetic', 'Structures & Unions', 'File Handling in C']
      },
      {
        title: 'Module 3: C++ & Object-Oriented Fundamentals',
        topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'STL Vector & Basic Data Structures']
      },
      {
        title: 'Module 4: Python Foundation & Problem Solving',
        topics: ['Python Syntax Basics', 'Building Mini Projects', 'Coding Interview Problem Solving']
      }
    ],
    careerOpportunities: ['Trainee Software Developer', 'Junior Programmer', 'College Academic Excellence'],
    prerequisites: 'None! Designed for complete beginners.',
    tools: ['GCC Compiler', 'Dev C++', 'VS Code', 'Python IDLE']
  },
  {
    id: 'data-analytics-power-bi',
    title: 'Data Analytics & Power BI',
    category: 'AI & Data',
    shortDescription: 'Transform raw data into business insights using SQL, Excel, Power BI, DAX formulas, and Python data tools.',
    fullDescription: 'Become a data analyst trusted by global companies. Master SQL data extraction, advanced Excel modeling, interactive dashboard creation in Power BI, and data storytelling.',
    duration: '3 Months (12 Weeks)',
    level: 'Beginner to Intermediate',
    technologies: ['Power BI', 'SQL', 'Advanced Excel', 'DAX', 'Power Query', 'Python Basics'],
    projectsCount: 5,
    featured: true,
    badge: 'HIGH INDUSTRY NEED',
    iconName: 'BarChart3',
    learningOutcomes: [
      'Master SQL queries, joins, aggregations, and subqueries',
      'Create interactive Power BI dashboards and visual reports',
      'Write DAX measures and calculated columns for complex metrics',
      'Clean and transform unstructured data using Power Query',
      'Present actionable business insights to stakeholders'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Excel & Data Cleaning',
        topics: ['VLOOKUP, XLOOKUP & Pivot Tables', 'Data Cleaning & Conditional Formatting', 'Excel Dashboard Modeling']
      },
      {
        title: 'Module 2: Database Querying with SQL',
        topics: ['SELECT, WHERE, GROUP BY Clauses', 'Joins & Subqueries', 'Window Functions & CTEs']
      },
      {
        title: 'Module 3: Power BI & DAX Calculations',
        topics: ['Connecting Data Sources', 'Data Modeling & Relationships', 'DAX Functions & Measures', 'Custom Visualizations']
      },
      {
        title: 'Module 4: Real-time Analytics Project',
        topics: ['Publishing to Power BI Service', 'Automated Data Refresh', 'Business Storytelling & Portfolio']
      }
    ],
    careerOpportunities: ['Data Analyst', 'Business Intelligence Analyst', 'Reporting Engineer', 'Data Operations Specialist'],
    prerequisites: 'Basic computer operation and analytical mindset.',
    tools: ['Power BI Desktop', 'Microsoft Excel', 'MySQL Workbench', 'SQL Server Management Studio']
  },
  {
    id: 'mern-stack-development',
    title: 'MERN Stack Web Development',
    category: 'Full Stack',
    shortDescription: 'Build modern JavaScript single-page apps with MongoDB, Express.js, React, and Node.js.',
    fullDescription: 'Master the complete MERN JavaScript stack. Learn how to build high-performance web applications entirely in JavaScript/TypeScript from backend server APIs to frontend dynamic interfaces.',
    duration: '4 Months (16 Weeks)',
    level: 'Beginner to Advanced',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    projectsCount: 5,
    featured: false,
    iconName: 'Layers',
    learningOutcomes: [
      'Develop asynchronous backend REST APIs with Node.js and Express',
      'Model NoSQL database collections with MongoDB and Mongoose',
      'Build dynamic frontend applications using React & Redux Toolkit',
      'Implement JWT User Authentication & Authorization',
      'Deploy full stack MERN apps to Vercel and Render'
    ],
    modules: [
      {
        title: 'Module 1: Advanced JavaScript & Node.js Server',
        topics: ['Async/Await, Promises & Event Loop', 'Node.js Core Modules & NPM', 'Express.js Routing & Middleware']
      },
      {
        title: 'Module 2: MongoDB NoSQL Database',
        topics: ['MongoDB Atlas & Compass Setup', 'Mongoose Schema Design & Queries', 'Aggregation Pipelines']
      },
      {
        title: 'Module 3: React Frontend & Redux',
        topics: ['React Components, Context API & Hooks', 'State Management with Redux Toolkit', 'Tailwind CSS Custom Styling']
      },
      {
        title: 'Module 4: Full Stack Integration',
        topics: ['JWT Authentication & Cookie Security', 'File Uploads with Cloudinary', 'Production Build & Deployment']
      }
    ],
    careerOpportunities: ['MERN Stack Developer', 'Frontend Developer', 'Node.js Engineer', 'JavaScript Full Stack Developer'],
    prerequisites: 'Basic HTML/CSS understanding recommended.',
    tools: ['VS Code', 'Postman', 'MongoDB Compass', 'Git', 'Vercel']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Product Strategy',
    category: 'Mobile & UI',
    shortDescription: 'Design intuitive digital experiences, wireframes, interactive prototypes, and modern UI systems using Figma.',
    fullDescription: 'Turn ideas into engaging user experiences. Learn UX research, wireframing, high-fidelity UI design, component design systems, usability testing, and interactive prototyping in Figma.',
    duration: '2.5 Months (10 Weeks)',
    level: 'Beginner',
    technologies: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Micro-interactions'],
    projectsCount: 4,
    featured: false,
    iconName: 'Palette',
    learningOutcomes: [
      'Conduct user research, personas, and user journey mapping',
      'Create low-fidelity wireframes and high-fidelity mockups',
      'Build reusable UI Design Systems & Design Tokens in Figma',
      'Create interactive prototypes with micro-animations',
      'Hand off designs cleanly to frontend developers'
    ],
    modules: [
      {
        title: 'Module 1: UX Research & Product Thinking',
        topics: ['User Centered Design Process', 'User Research & Personas', 'Information Architecture & Wireframing']
      },
      {
        title: 'Module 2: Figma UI Design Mastery',
        topics: ['Figma Interface & Auto Layout', 'Typography, Color Theory & Grid Systems', 'Iconography & UI Components']
      },
      {
        title: 'Module 3: Advanced Prototyping & Systems',
        topics: ['Interactive Components & Variables', 'Micro-interactions & Smart Animate', 'Design System Creation']
      },
      {
        title: 'Module 4: Portfolio & Developer Handoff',
        topics: ['Case Study Documentation', 'Usability Testing', 'Developer Handoff Best Practices']
      }
    ],
    careerOpportunities: ['UI/UX Designer', 'Product Designer', 'Interaction Designer', 'UX Researcher'],
    prerequisites: 'Creativity and attention to design details. No coding required.',
    tools: ['Figma', 'FigJam', 'Plugins Ecosystem']
  },
  {
    id: 'cyber-security-fundamentals',
    title: 'Cyber Security & Ethical Hacking',
    category: 'Cyber Security',
    shortDescription: 'Learn network security, ethical hacking, vulnerability assessment, penetration testing, and digital forensics.',
    fullDescription: 'Protect digital assets and secure networks. Master network security fundamentals, ethical hacking techniques, web application vulnerability testing (OWASP Top 10), and security auditing.',
    duration: '3 Months (12 Weeks)',
    level: 'Beginner to Intermediate',
    technologies: ['Kali Linux', 'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Network Security'],
    projectsCount: 4,
    featured: false,
    iconName: 'ShieldCheck',
    learningOutcomes: [
      'Understand network protocols, firewalls, and encryption basics',
      'Conduct vulnerability assessments using Nmap and Metasploit',
      'Identify and remediate OWASP Top 10 web vulnerabilities',
      'Perform packet analysis using Wireshark',
      'Apply defensive security best practices for organizations'
    ],
    modules: [
      {
        title: 'Module 1: Network & OS Security Essentials',
        topics: ['TCP/IP Model & Wireshark Packet Sniffing', 'Linux Command Line Security', 'Firewalls & Network Segmentation']
      },
      {
        title: 'Module 2: Information Gathering & Scanning',
        topics: ['Reconnaissance & OSINT Tools', 'Port Scanning with Nmap', 'Vulnerability Scanning with Nessus']
      },
      {
        title: 'Module 3: Web Application Security',
        topics: ['OWASP Top 10 (SQLi, XSS, CSRF)', 'Burp Suite Proxy Configuration', 'Penetration Testing Frameworks']
      },
      {
        title: 'Module 4: Defensive Security & Certification Prep',
        topics: ['Incident Response & Digital Forensics', 'Ethical Hacking Best Practices', 'Security Certification Pathways']
      }
    ],
    careerOpportunities: ['Cyber Security Analyst', 'Ethical Hacker / Pen Tester', 'Information Security Officer', 'Network Security Associate'],
    prerequisites: 'Basic knowledge of computer networks and operating systems.',
    tools: ['Kali Linux', 'Wireshark', 'Burp Suite', 'Nmap', 'Metasploit']
  }
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  difficulty: 'Intermediate' | 'Advanced' | 'Industry Grade';
  skillsGained: string[];
  gradient: string;
  icon: string;
}

export const REAL_TIME_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'E-Commerce Enterprise Platform',
    category: 'Full Stack Java / React',
    description: 'A multi-vendor e-commerce web platform featuring product discovery, cart management, stripe payment processing, order tracking, and admin dashboards.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redux', 'Stripe API'],
    difficulty: 'Industry Grade',
    skillsGained: ['Microservices', 'Payment Gateway Integration', 'JWT Auth', 'State Management'],
    gradient: 'from-red-600/20 to-orange-600/20',
    icon: 'ShoppingCart'
  },
  {
    id: 'p2',
    title: 'AI Customer Churn & Sales Prediction System',
    category: 'Python AI / Machine Learning',
    description: 'Predictive analytics application leveraging machine learning models to forecast customer attrition and optimize sales pipeline conversions.',
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'Streamlit', 'Flask'],
    difficulty: 'Advanced',
    skillsGained: ['Data Preprocessing', 'Feature Engineering', 'Model Deployment', 'Dashboard UI'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    icon: 'BrainCircuit'
  },
  {
    id: 'p3',
    title: 'Automated Cloud Infrastructure Pipeline',
    category: 'Cloud & DevOps',
    description: 'Infrastructure as Code setup provisioning multi-region AWS environments, Dockerized app clusters, Jenkins automated testing, and Kubernetes scaling.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
    difficulty: 'Industry Grade',
    skillsGained: ['CI/CD Automation', 'IaC Provisioning', 'Kubernetes Ingress', 'System Security'],
    gradient: 'from-purple-600/20 to-pink-600/20',
    icon: 'CloudLightning'
  },
  {
    id: 'p4',
    title: 'Food Delivery & Restaurant Management App',
    category: 'Mobile App (Flutter)',
    description: 'Cross-platform mobile app for real-time food ordering, live GPS delivery tracking, order notifications, and restaurant management panel.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'REST API'],
    difficulty: 'Advanced',
    skillsGained: ['Cross-platform UI', 'Real-time Database', 'Location Services', 'Push Notifications'],
    gradient: 'from-yellow-600/20 to-amber-600/20',
    icon: 'Smartphone'
  },
  {
    id: 'p5',
    title: 'Student & Academic ERP Management System',
    category: 'Full Stack Python / Django',
    description: 'Comprehensive educational portal managing student admissions, fee tracking, attendance registers, automated report card generation, and parent notifications.',
    technologies: ['Python', 'Django', 'React', 'MySQL', 'REST API'],
    difficulty: 'Intermediate',
    skillsGained: ['Role-based Authorization', 'Database ORM', 'PDF Report Generation', 'REST APIs'],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    icon: 'GraduationCap'
  },
  {
    id: 'p6',
    title: 'Business Intelligence & Executive Sales Dashboard',
    category: 'Data Analytics & Power BI',
    description: 'Interactive analytics dashboard visualizing financial performance, regional market trends, product performance KPIs, and automated weekly summaries.',
    technologies: ['Power BI', 'SQL Server', 'DAX', 'Power Query', 'Excel'],
    difficulty: 'Intermediate',
    skillsGained: ['DAX Measures', 'Data Modeling', 'KPI Visualization', 'Executive Storytelling'],
    gradient: 'from-indigo-600/20 to-blue-600/20',
    icon: 'BarChart3'
  }
];

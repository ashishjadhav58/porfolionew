export const personalInfo = {
  name: "Ashish Jadhav",
  title: "Software Engineer",
  tagline:
    "Building high-performance backend systems with Java/Spring Boot, ASP.NET, and Node.js.",
  summary:
    "Backend-focused Software Engineer (Java/Spring Boot, ASP.NET) with 3 self-built full-stack platforms, a 9.51/10 CGPA, and production experience optimizing performance for enterprise systems handling 100K–200K+ records with concurrent users, seeking Backend/Full Stack SDE roles.",
  email: "jadhavashish1113@gmail.com",
  phone: "+91 93566 05762",
  location: "Pune, Maharashtra",
  linkedin: "https://www.linkedin.com/in/ashish-jadhav-497543247",
  github: "https://github.com/ashishjadhav58",
  githubUsername: "ashishjadhav58",
  resumeFileId: "",
  resumeFileName: "Ashish_Jadhav_Resume.pdf",
  resumeViewUrl: "/Ashish_Jadhav_Resume.pdf",
  resumeUrl: "/api/resume",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = {
  languages: ["Java", "JavaScript", "SQL"],
  frontend: ["React.js", "Next.js", "Responsive UI Design"],
  backend: ["Spring Boot", "ASP.NET MVC", "Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
  cloudDevops: ["AWS (S3, Lambda, API Gateway, RDS)", "Google Cloud Run", "Docker", "Kubernetes", "CI/CD", "Git"],
  systemDesign: ["Microservices Architecture", "Distributed Systems", "Async Processing", "Caching Strategies", "Message Queues"],
  testingTools: ["Postman", "GitHub"],
  coreCs: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"],
} as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  period: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "TransitOps",
    description:
      "A smart transport operations platform built with a Next.js frontend and an Express/Prisma backend.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Express.js", "Prisma ORM", "PostgreSQL", "Neon", "JWT", "bcrypt"],
    period: "Nov 2025 — Dec 2025",
    highlights: [
      "Designed and developed a transport operations platform with Next.js frontend and Express/Prisma backend.",
      "Implemented a secure authentication module using JWT and bcrypt for authorization.",
      "Configured PostgreSQL database hosted on Neon with Prisma ORM for database modeling and migrations.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/TransitOps-Smart-Transport-Operations-Platform",
    liveUrl: "https://transit-ops-smart-transport-operati-olive.vercel.app/",
  },
  {
    name: "Reimbursement Management",
    description:
      "Production-oriented reimbursement platform featuring OCR receipt processing and multi-step approval workflows.",
    tech: ["FastAPI", "Python", "Next.js", "Tesseract OCR", "Docker", "Celery", "Redis", "MinIO", "Alembic"],
    period: "Sept 2025 — Oct 2025",
    highlights: [
      "Engineered a production-oriented reimbursement API with multi-currency support and role-based access control.",
      "Integrated Tesseract OCR receipt processing to auto-extract amount, date, and merchant details.",
      "Designed configurable multi-step approval chains utilizing Celery task queues and Redis.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/Reimburse",
    liveUrl: "https://reimburse-pied.vercel.app/",
  },
  {
    name: "PetSecure",
    description:
      "Pet QR Identification & Lost Pet Recovery System using AWS Lambda for serverless backend and location tracking.",
    tech: ["React", "Node.js", "Express.js", "AWS Lambda", "AWS S3", "PostgreSQL", "Leaflet", "JWT", "bcrypt"],
    period: "Jul 2025 — Aug 2025",
    highlights: [
      "Developed a full-stack pet recovery platform, migrating the backend from standard Node.js to serverless AWS Lambda.",
      "Implemented real-time geolocation tracking with Leaflet maps to notify pet owners of scans.",
      "Utilized AWS S3 for secure QR code and pet image storage with JWT-based access control.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/petsecure",
    liveUrl: "https://petsecure-khaki.vercel.app/",
  },
  {
    name: "Slotify",
    description:
      "Full-stack appointment booking system featuring pessimistic concurrency locks, Razorpay payments, and real-time WebSockets.",
    tech: ["Next.js", "Spring Boot", "Spring Security", "PostgreSQL", "STOMP WebSocket", "Razorpay", "Redis", "Flyway"],
    period: "Oct 2025 — Present",
    highlights: [
      "Built a high-concurrency booking monorepo with Next.js App Router and Spring Boot/Spring Security backend.",
      "Implemented slot concurrency with PESSIMISTIC_WRITE locks in JPA transactions to prevent booking conflicts.",
      "Integrated Razorpay payment verification and STOMP WebSockets for real-time status updates.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/slotify",
    liveUrl: "https://slotifyodoo.vercel.app/",
  },
  {
    name: "HireNPlace",
    description:
      "Multi-role recruitment platform with real-time coding assessments and role-based access control.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Google Cloud Run", "Redis", "Judge0"],
    period: "Oct 2025 — Present",
    highlights: [
      "Architected a multi-role recruitment platform with JWT role-based access control and RESTful APIs using Spring Boot and PostgreSQL.",
      "Integrated Judge0 sandboxed code execution on VM instances for real-time coding assessments.",
      "Deployed containerized backend on Google Cloud Run with Redis caching, cutting API latency by 75%.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/HireNPlace",
  },
  {
    name: "NotesApp",
    description:
      "A clean, responsive notes application featuring rich text markdown formatting and categorization.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    period: "Jun 2025",
    highlights: [
      "Developed a clean and responsive notes application featuring rich text markdown formatting and categorization.",
      "Secured routes with JSON Web Tokens (JWT) and implemented database persistence with MongoDB.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/Notesapp",
  },
  {
    name: "Advocate Tanaji Jagtap",
    description:
      "Professional freelance portfolio website built for a legal practice, optimized for fast loading and SEO.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    period: "May 2025",
    highlights: [
      "Designed and developed a freelance portfolio website for a legal practice client.",
      "Optimized search engine visibility (SEO) and achieved near-perfect performance scores on Lighthouse.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/Tanajijagtap",
    liveUrl: "https://www.advtanajijagtap.in/",
  },
  {
    name: "Smart TnP System",
    description:
      "Smart Training and Placement System built on a Fog-to-Cloud architecture to reduce latency and optimize workload distribution.",
    tech: ["React.js", "Node.js", "AWS Lambda", "DynamoDB", "MongoDB", "Fog Computing"],
    period: "Aug 2025 — Sept 2025",
    highlights: [
      "Established a role-based placement platform for students, faculty, and administrators to automate placement workflows.",
      "Designed serverless REST APIs with AWS Lambda and API Gateway, eliminating dedicated infrastructure management.",
      "Modeled data across MongoDB and DynamoDB to optimize placement-activity retrieval and analytics.",
    ],
    githubUrl: "https://github.com/ashishjadhav58/SmartTnpSystemOnFogComputing",
    liveUrl: "https://smarttnpsystem.vercel.app",
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Cybernetics Software Pvt. Ltd.",
    role: ".NET Developer Intern",
    location: "Pune, Maharashtra",
    period: "Jun 2025 — Mar 2026",
    summary:
      "Developed and optimized Office Management, Voter Management, and security systems handling large-scale production datasets of up to 200K+ records under concurrent user loads.",
    highlights: [
      "Developed and optimized the Office Management System (OMS), implementing pagination, lazy loading, client-side validation, and AJAX-based data handling for a dataset of 100K–200K records.",
      "Optimized iConnect, a voter management platform serving 200K+ records with multiple concurrent users, applying PgBouncer connection pooling alongside pagination and lazy loading to sustain performance under concurrent load.",
      "Applied the same performance-optimization techniques to iSecure, driving a drastic reduction in page load times.",
      "Automated multi-step approval workflows and diagnosed live production issues while partnering with senior engineers in code reviews, improving operational turnaround time and application stability.",
    ],
    tech: [".NET", "C#", "PostgreSQL", "PgBouncer", "AJAX", "Database Tuning"],
  },
  {
    company: "Right Shift Infotech Pvt. Ltd.",
    role: "Web Developer Intern",
    location: "Pune, Maharashtra",
    period: "Dec 2024 — Jan 2025",
    summary:
      "Built RESTful backend APIs and reusable frontend components in a production environment, improving application responsiveness and cross-device interface consistency.",
    highlights: [
      "Created RESTful backend APIs handling input validation, business logic, and database operations for client-facing features.",
      "Built reusable, responsive React.js UI components used across multiple pages, improving cross-device usability and interface consistency.",
    ],
    tech: ["React.js", "REST APIs", "JavaScript", "Input Validation"],
  },
];

export type Publication = {
  title: string;
  venue: string;
  role: string;
  period: string;
  description: string;
  doi: string;
  paperUrl: string;
};

export const publications: Publication[] = [];

export type Education = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  score: string;
};

export const education: Education[] = [
  {
    institution: "Savitribai Phule Pune University",
    degree: "B.E., Computer Engineering",
    location: "Pune, Maharashtra",
    period: "2023 — 2026",
    score: "CGPA: 9.51 / 10",
  },
  {
    institution: "JSPM Institute",
    degree: "Diploma in Computer Engineering",
    location: "Pune, Maharashtra",
    period: "2020 — 2023",
    score: "Percentage: 83.54%",
  },
];

export type Certification = {
  name: string;
  url: string;
};

export const certifications: Certification[] = [];

export const stats = [
  { label: "CGPA (B.E. Computer)", value: "9.51" },
  { label: "Self-Built Platforms", value: "3" },
  { label: "Internships Completed", value: "2" },
  { label: "Optimized Records", value: "200K+" },
] as const;

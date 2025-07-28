export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    shortDescription: "Full-stack e-commerce solution with payment integration",
    fullDescription: "A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
    motivation: "Wanted to create a scalable solution that could handle real-world e-commerce needs while learning full-stack development principles.",
    result: "Successfully deployed platform handling 1000+ products with 95% uptime and integrated payment gateway processing $50K+ in transactions.",
    skills: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Express.js"],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT"],
    githubLink: "https://github.com/asiradnan/ecommerce-platform",
    liveLink: "https://ecommerce-demo.asiradnan.com",
    image: "/projects/ecommerce.jpg",
    status: "Completed",
    duration: "3 months",
    category: "Full Stack"
  },
  {
    id: 2,
    name: "AI Chat Application",
    shortDescription: "Real-time chat app with AI-powered responses",
    fullDescription: "An intelligent chat application that combines real-time messaging with AI capabilities, allowing users to chat with both humans and AI assistants in the same interface.",
    motivation: "Exploring the integration of AI technologies in everyday communication tools to enhance user experience.",
    result: "Created a responsive chat application with 99.9% message delivery rate and sub-second AI response times.",
    skills: ["React", "Socket.io", "OpenAI API", "Node.js", "PostgreSQL", "WebRTC"],
    technologies: ["React", "Socket.io", "OpenAI API", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/asiradnan/ai-chat-app",
    liveLink: "https://chat.asiradnan.com",
    image: "/projects/ai-chat.jpg",
    status: "Completed",
    duration: "2 months",
    category: "AI/ML"
  },
  {
    id: 3,
    name: "Portfolio Website",
    shortDescription: "Personal portfolio with modern animations and responsive design",
    fullDescription: "A modern, responsive portfolio website showcasing projects and skills with smooth animations, dark/light theme support, and optimized performance.",
    motivation: "Creating a professional online presence to showcase my work and attract potential collaborators and employers.",
    result: "Achieved 98% Lighthouse performance score with fully responsive design across all devices.",
    skills: ["Next.js", "Framer Motion", "Tailwind CSS", "React", "JavaScript"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/asiradnan/portfolio",
    liveLink: "https://asiradnan.com",
    image: "/projects/portfolio.jpg",
    status: "Completed",
    duration: "1 month",
    category: "Frontend"
  }
];

export const certificatesData = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuingOrganization: "Amazon Web Services",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-15",
    credentialId: "AWS-SAA-001",
    skills: ["AWS", "Cloud Computing", "Architecture Design", "EC2", "S3", "Lambda"],
    image: "/certificates/aws-solutions-architect.jpg",
    pdfLink: "/certificates/aws-solutions-architect.pdf",
    verificationLink: "https://aws.amazon.com/verification/AWS-SAA-001",
    description: "Validates expertise in designing distributed systems on AWS platform"
  },
  {
    id: 2,
    name: "React Developer Certification",
    issuingOrganization: "Meta",
    issueDate: "2023-11-20",
    expiryDate: null,
    credentialId: "META-REACT-002",
    skills: ["React", "JavaScript", "JSX", "Component Architecture", "State Management"],
    image: "/certificates/meta-react.jpg",
    pdfLink: "/certificates/meta-react.pdf",
    verificationLink: "https://coursera.org/verify/META-REACT-002",
    description: "Comprehensive certification covering React fundamentals and advanced concepts"
  },
  {
    id: 3,
    name: "MongoDB Developer Path",
    issuingOrganization: "MongoDB University",
    issueDate: "2023-09-10",
    expiryDate: "2026-09-10",
    credentialId: "MONGO-DEV-003",
    skills: ["MongoDB", "Database Design", "Aggregation", "Indexing", "NoSQL"],
    image: "/certificates/mongodb-developer.jpg",
    pdfLink: "/certificates/mongodb-developer.pdf",
    verificationLink: "https://university.mongodb.com/verify/MONGO-DEV-003",
    description: "Advanced MongoDB development and database administration skills"
  },
  {
    id: 4,
    name: "Full Stack Web Development",
    issuingOrganization: "freeCodeCamp",
    issueDate: "2023-06-15",
    expiryDate: null,
    credentialId: "FCC-FULLSTACK-004",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "React"],
    image: "/certificates/freecodecamp-fullstack.jpg",
    pdfLink: "/certificates/freecodecamp-fullstack.pdf",
    verificationLink: "https://freecodecamp.org/certification/asiradnan/full-stack",
    description: "300+ hour curriculum covering full-stack web development"
  }
];

// Helper functions to get related data
export const getProjectsBySkill = (skill) => {
  return projectsData.filter(project => 
    project.skills.some(projectSkill => 
      projectSkill.toLowerCase().includes(skill.toLowerCase())
    )
  );
};

export const getCertificatesBySkill = (skill) => {
  return certificatesData.filter(certificate => 
    certificate.skills.some(certSkill => 
      certSkill.toLowerCase().includes(skill.toLowerCase())
    )
  );
};

export const getSkillsByProject = (projectId) => {
  const project = projectsData.find(p => p.id === projectId);
  return project ? project.skills : [];
};

export const getAllSkills = () => {
  const projectSkills = projectsData.flatMap(project => project.skills);
  const certificateSkills = certificatesData.flatMap(certificate => certificate.skills);
  return [...new Set([...projectSkills, ...certificateSkills])].sort();
};
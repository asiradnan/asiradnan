// Skills organized by categories - matching SkillsSection.js exactly
export const skillCategories = {
  "Backend Development": [
    "FastAPI", "Django", "DRF", "Express", "Node.js", "Python"
  ],
  "Mobile Development": [
    "Android", "Kotlin", "Jetpack Compose", "React Native", "Flutter", "iOS"
  ],
  "DevOPS and Tools": [
    "AWS", "Git", "CI/CD", "Nginx", "Docker", "Kubernetes"
  ],
  "Frontend Development": [
    "React", "Next.js", "HTML", "CSS", "JavaScript", "Vue.js", "TypeScript", "Tailwind CSS"
  ],
  "Database": [
    "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"
  ],
  "Programming Languages": [
    "Python", "Kotlin", "JavaScript", "C++", "TypeScript"
  ]
};

// Function to get skill statistics with detailed data
export const getSkillStats = (skill, projectsData, certificatesData) => {
  const projects = projectsData.filter(project => 
    project.skills.some(projectSkill => 
      projectSkill.toLowerCase() === skill.toLowerCase()
    )
  );

  const certificates = certificatesData.filter(certificate => 
    certificate.skills.some(certSkill => 
      certSkill.toLowerCase() === skill.toLowerCase()
    )
  );

  return { 
    projectCount: projects.length, 
    certificateCount: certificates.length,
    projects,
    certificates
  };
};

// Function to get category totals
export const getCategoryTotals = (category, projectsData, certificatesData) => {
  const skills = skillCategories[category] || [];
  let totalProjects = 0;
  let totalCertificates = 0;

  skills.forEach(skill => {
    const stats = getSkillStats(skill, projectsData, certificatesData);
    totalProjects += stats.projectCount;
    totalCertificates += stats.certificateCount;
  });

  return { totalProjects, totalCertificates };
};
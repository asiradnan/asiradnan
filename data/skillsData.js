// Skills organized by categories - matching SkillsSection.js exactly
export const skillCategories = {
  "Backend Development": [
    "Django", "Django Rest Framework"
    // , "Express", "Node.js", "FastAPI", 
  ],
  "Frontend Development": [
    "React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"
  ],
  "DevOPS and Tools": [
    "AWS", "Google Cloud",
    // "Amazon S3", "Amazon EC2", "Amazon RDS", "Amazon CloudFront", "Amazon SES", 
    "Git", "CI/CD", "Nginx"
  ],
  "Database": [
    "PostgreSQL", "SQLite"
  ],
  "Mobile Development": [
    "Android", "Kotlin", "Jetpack Compose",
  ],
  "Programming Languages": [
    "Python", "Kotlin", "JavaScript", "C++"
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
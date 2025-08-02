export const projectsData = [
  {
    id: 1,
    name: "PulseCampus",
    shortDescription: "Modern college management web app with role-based access, clubs, forums, and announcements.",
    fullDescription:
      `
      – Built a comprehensive college management system using Django, deployed via Nginx on Amazon EC2
      – Implemented RBAC to manage departments, classes, clubs, noticeboards, forum posts with comments
      – Deployed PostgreSQL on Amazon RDS for scalable, reliable database management
      – Images and files are stored and served via Amazon S3
      – Integrated Celery with Redis to handle asynchronous email notifications via Amazon SES as background jobs
      – Set up CI/CD pipelines using GitHub Actions to automate deployments
      – Achieved 98% code coverage by writing comprehensive tests including asynchronous tasks
    `,
    skills: ["Django", "Celery", "Redis", "AWS", "PostgreSQL", "Python", "HTML", "CSS", "JavaScript", "GitHub Actions", "Gunicorn", "Nginx"],
    technologies: ["Django", "Celery", "Redis", "AWS", "PostgreSQL", "Python", "HTML", "CSS", "JavaScript", "GitHub Actions", "Gunicorn", "Nginx"],
    githubLink: "https://github.com/asiradnan/PulseCampus",
    liveLink: "https://pulsecampus.asiradnan.com/",
    image: "/projects/pulse_campus.png",
    status: "Completed",
    duration: "4 months",
    category: "Full Stack"
  },
  {
    id: 2,
    name: "CopyPasta",
    shortDescription: "Quickly transfer text or files between devices with a simple key—no logins, no installs.",
    fullDescription: "CopyPasta is a free web app for fast, secure transfer of text or files between devices. No cables, no software, no risky logins—just open the site, paste or upload, and access from any device using your chosen key. Content can be edited or deleted for privacy.",
    skills: ["Django", "HTML", "CSS", "JavaScript", "Web Security", "UX Design"],
    technologies: ["Django", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/asiradnan/copypasta",
    liveLink: "https://copypasta.asiradnan.com",
    image: "/projects/copy_pasta.png",
    status: "Completed",
    duration: "1 month",
    category: "Full Stack"
  },
  {
    id: 6,
    name: "Periodic Table (Android App)",
    shortDescription: "Modern Android app for the periodic table with 118 elements, multi-language, and dark/light themes.",
    fullDescription: "An Android app built with Jetpack Compose featuring a list of 118 elements, each with detailed information. Supports light/dark themes, Bangla/English language selection, and search in both languages. Clean MVVM architecture and smooth Compose UI.",
    skills: ["Kotlin", "Jetpack Compose", "Android", "MVVM", "Material 3", "State Management", "UI/UX", "Multi-language", "SharedPreferences"],
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Android", "SharedPreferences"],
    githubLink: "https://github.com/asiradnan/Periodic-Table",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.asiradnan.periodictable",
    image: "/projects/periodic_table_android.png",
    status: "Completed",
    duration: "2 months",
    category: "Android"
  }
];

export const certificatesData = [
  {
    id: 1,
    name: "ICPC Asia Dhaka Regional 2023 Contestant",
    issuingOrganization: "ICPC Global",
    issueDate: "2023-12-09",
    expiryDate: null,
    credentialId: "WSTHJPP10AEF",
    skills: ["Competitive Programming", "Algorithms", "Teamwork", "Problem Solving"],
    image: "/certificates/2024-ICPC Asia Dhaka RC-Asir Adnan-HONORABLE.jpg",
    pdfLink: null,
    verificationLink: "https://icpc.global/ICPCID/WSTHJPP10AEF",
    description: "Participated as a regional contestant in the 2023 ICPC Asia Dhaka Regional Contest"
  },
  {
    id: 2,
    name: "National Collegiate Programming Contest 2023",
    issuingOrganization: "NCPC Bangladesh",
    issueDate: "2023-11-01",
    expiryDate: null,
    credentialId: null,
    skills: ["Competitive Programming", "C++", "Algorithms", "Data Structures"],
    image: "/certificates/certificate.png",
    pdfLink: null,
    verificationLink: null,
    description: "Participant in the 2023 National Collegiate Programming Contest"
  },
  {
    id: 3,
    name: "Problem Solving (Basic)",
    issuingOrganization: "HackerRank",
    issueDate: null,
    expiryDate: null,
    credentialId: "248ce0206dcc",
    skills: ["Algorithms", "Logic", "Problem Solving"],
    image: "/certificates/problem_solving_basic certificate_page-0001.jpg",
    verificationLink: "https://www.hackerrank.com/certificates/248ce0206dcc",
    description: "HackerRank certification in basic problem solving"
  },
  {
    id: 4,
    name: "Python (Basic)",
    issuingOrganization: "HackerRank",
    issueDate: null,
    expiryDate: null,
    credentialId: "27b427683df5",
    skills: ["Python", "Syntax", "Data Types"],
    image: "/certificates/python_basic certificate (2)_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.hackerrank.com/certificates/27b427683df5",
    description: "HackerRank certification in basic Python programming"
  },
  {
    id: 5,
    name: "Rest API (Intermediate)",
    issuingOrganization: "HackerRank",
    issueDate: null,
    expiryDate: null,
    credentialId: "81840051d371",
    skills: ["REST APIs", "HTTP", "JSON", "CRUD"],
    image: "/certificates/rest_api_intermediate certificate_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.hackerrank.com/certificates/81840051d371",
    description: "Intermediate-level certification on REST API usage and design"
  },
  {
    id: 6,
    name: "SQL (Basic)",
    issuingOrganization: "HackerRank",
    issueDate: null,
    expiryDate: null,
    credentialId: "37eb45ef5b45",
    skills: ["SQL", "Queries", "Filtering", "Sorting"],
    image: "/certificates/sql_basic certificate_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.hackerrank.com/certificates/37eb45ef5b45",
    description: "Basic certification in SQL from HackerRank"
  },
  {
    id: 7,
    name: "SQL (Intermediate)",
    issuingOrganization: "HackerRank",
    issueDate: null,
    expiryDate: null,
    credentialId: "548886971765",
    skills: ["Joins", "Aggregations", "Subqueries", "Set Operations"],
    image: "/certificates/sql_intermediate certificate_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.hackerrank.com/certificates/548886971765",
    description: "Intermediate-level certification in SQL from HackerRank"
  },
  {
    id: 8,
    name: "Python Data Structures",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CT-T3RZ35SS",
    skills: ["Lists", "Dictionaries", "Tuples", "Sets"],
    image: "/certificates/Python Data Structures_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CT-T3RZ35SS",
    description: "Covers common data structures in Python"
  },
  {
    id: 9,
    name: "Introduction to JavaScript",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CC-RTHX9YWW",
    skills: ["JavaScript", "Variables", "Functions", "DOM"],
    image: "/certificates/IntroductionToJavascript_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CC-RTHX9YWW",
    description: "Introductory course in JavaScript basics"
  },
  {
    id: 10,
    name: "SQL Intermediate",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CC-XUOEIUJ1",
    skills: ["SQL", "Aggregations", "Joins", "Subqueries"],
    image: "/certificates/sql_intermediate certificate_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CC-XUOEIUJ1",
    description: "Covers intermediate SQL concepts"
  },
  {
    id: 11,
    name: "Python for Beginners",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CT-MC4WHKVG",
    skills: ["Python", "Basics", "Control Flow", "Functions"],
    image: "/certificates/Python for beginners_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CT-MC4WHKVG",
    description: "Introductory Python programming course"
  },
  {
    id: 12,
    name: "Python Intermediate",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CT-K1WF8VQ2",
    skills: ["Python", "OOP", "Modules", "Error Handling"],
    image: "/certificates/Intermediate Python_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CT-K1WF8VQ2",
    description: "Intermediate concepts in Python programming"
  },
  {
    id: 13,
    name: "C++",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CT-C1PUBLRE",
    skills: ["C++", "Syntax", "Functions", "OOP"],
    image: "/certificates/C++_page-0001.jpg",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CT-C1PUBLRE",
    description: "C++ programming fundamentals course"
  },
  {
    id: 14,
    name: "Introduction to SQL",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CC-OJHW1IGV",
    skills: ["SQL", "Tables", "Select", "Where", "Joins"],
    image: "/certificates/Into_to_SQL_sololearn.png",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CC-OJHW1IGV",
    description: "Basic introduction to SQL concepts"
  },
  {
    id: 15,
    name: "Introduction to Java",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CC-CMP7GVLJ",
    skills: ["Java", "OOP", "Variables", "Control Structures"],
    image: "/certificates/intro_to_java.png",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CC-CMP7GVLJ",
    description: "Basic Java programming course"
  },
  {
    id: 16,
    name: "SEO with AI",
    issuingOrganization: "SoloLearn",
    issueDate: null,
    expiryDate: null,
    credentialId: "CC-PUXEY9XC",
    skills: ["SEO", "AI Tools", "Content Optimization"],
    image: "/certificates/seo_with_ai_sololearn.png",
    pdfLink: null,
    verificationLink: "https://www.sololearn.com/certificates/CC-PUXEY9XC",
    description: "Covers SEO techniques and AI integration"
  }
];

export const competitiveProgrammingData = [
  {
    id: 1,
    platform: "Codeforces",
    username: "asiradnan",
    profileLink: "https://codeforces.com/profile/asiradnan",
    logo: "/platforms/codeforces.png", 
    stats: {
      rating: "1321",
      maxRating: "1321",
      rank: "Pupil",
      problemsSolved: "1150+"
    },
    achievements: [
      // "Pupil Rank Achievement",
      "Solved 1150+ problems",
      "Participated in 50+ contests"
    ]
  },
  {
    id: 2,
    platform: "LeetCode",
    username: "asiradnan",
    profileLink: "https://leetcode.com/u/asiradnan/",
    logo: "/platforms/leetcode.png", 
    stats: {
      problemsSolved: "210+",
      easyProblems: "55+",
      mediumProblems: "145+",
      hardProblems: "5+"
    },
    achievements: [
      "200+ Problems Solved",
      // "Contest Participant",
      // "Multiple badges earned"
    ]
  },
  // {
  //   id: 3,
  //   platform: "HackerRank",
  //   username: "asiradnan",
  //   profileLink: "https://www.hackerrank.com/profile/asiradnan",
  //   logo: "/platforms/hackerrank.png", // Add your logo
  //   stats: {
  //     stars: "5-star Python",
  //     problemsSolved: "100+",
  //     badges: "15+",
  //     certificates: "7"
  //   },
  //   achievements: [
  //     "5-star in Python",
  //     "Multiple domain certifications",
  //     "Problem solving specialist"
  //   ]
  // },
  // {
  //   id: 4,
  //   platform: "AtCoder",
  //   username: "asiradnan",
  //   profileLink: "https://atcoder.jp/users/asiradnan",
  //   logo: "/platforms/atcoder.png", // Add your logo
  //   stats: {
  //     rating: "Brown",
  //     highestRating: "Brown",
  //     problemsSolved: "50+"
  //   },
  //   achievements: [
  //     "Active contest participant",
  //     "Algorithmic problem solver"
  //   ]
  // }
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
  const competitiveSkills = competitiveProgrammingData.flatMap(platform => 
    platform.achievements || []
  );
  return [...new Set([...projectSkills, ...certificateSkills, ...competitiveSkills])].sort();
};
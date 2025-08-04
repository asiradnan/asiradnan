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
  },
  // {
  //   id: 6,
  //   name: "Apartment Management System",
  //   shortDescription: "A modern, full-stack Apartment Management System (AMS) built with Next.js 15.",
  //   fullDescription: "An Android app built with Jetpack Compose featuring a list of 118 elements, each with detailed information. Supports light/dark themes, Bangla/English language selection, and search in both languages. Clean MVVM architecture and smooth Compose UI.",
  //   skills: ["Kotlin", "Jetpack Compose", "Android", "MVVM", "Material 3", "State Management", "UI/UX", "Multi-language", "SharedPreferences"],
  //   technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Android", "SharedPreferences"],
  //   liveLink: "https://ams.asiradnan.com",
  //   image: "/projects/periodic_table_android.png",
  //   status: "Completed",
  //   duration: "3 months",
  //   category: "Full Stack"    
  // },
];



// {
//   icon: wishIcon,
//     title: "Send Wishes",
//       description: "Send wishes to whoever you want without revealing your identity!",
//         liveLink: "https://sendwish.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/receiveemail",
//             category: "Full Stack"
// },

// {
//     icon: soulSpeak,
//     title: "Soul Speak",
//     description: "A mental well-being application designed to provide a supportive platform for individuals to express themselves, connect with others, and embark on their journey towards healing.",
//     liveLink: "https://github.com/asiradnan/SoulSpeak",
//     sourceLink: "https://github.com/asiradnan/SoulSpeak",
//     category: "Full Stack"
// },
// {
//   icon: copypasteIcon,
//     title: "Copy Pasta",
//       description: "Easier way to send text or file from one device to another.",
//         liveLink: "https://copypasta.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/copypaste",
//             category: "Full Stack"
// },
// {
//   icon: qrIcon,
//     title: "QR Code",
//       description: "Make customized qr code from any text or link!",
//         liveLink: "https://qr.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/qrcode",
//             category: "Full Stack"
// },
// {
//   icon: urlIcon,
//     title: "Chotto URL",
//       description: "URL Shortner to shorten to large urls into a fixed length. Effective to share large urls.",
//         liveLink: "https://chottourl.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/url-shortener",
//             category: "Full Stack"
// },
// {
//   icon: todoIcon,
//     title: "ToDo App",
//       description: "A task management frontend that lets users securely create, update, filter, and track todos in real time.",
//         liveLink: "https://todo.asiradnan.com/",
//           sourceLink: "https://github.com/asiradnan/todo_nextjs_frontend",
//             category: "Full Stack"
// },
// {
//   icon: tictactoeIcon,
//     title: "Tic Tac Toe",
//       description: "A game where you can play against your friend or AI!",
//         liveLink: "https://tictactoe.asiradnan.com/",
//           sourceLink: "https://github.com/asiradnan/Tic-Tac-Toe",
//             category: "Front End"
// },
// {
//   icon: calcIcon,
//     title: "Calculator",
//       description: "Basic calculator - result of vanilla javascript.",
//         liveLink: "https://calculator.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/Calculator",
//             category: "Front End"
// },
// {
//   icon: weatherIcon,
//     title: "Weather",
//       description: "A weather app with an integrated map.",
//         liveLink: "https://weather.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/Weather",
//             category: "Front End"
// },
// {
//   icon: ytIcon,
//     title: "YouTube Clone",
//       description: "A clone I made practicing API and responsive CSS",
//         liveLink: "https://yt.asiradnan.com",
//           sourceLink: "https://github.com/asiradnan/YouTube-Clone",
//             category: "Full Stack"
// },
// {
//   icon: redballIcon,
//     title: "Red Ball Detection",
//       description: "Red Ball detection from video or image using OpenCV and Python",
//         liveLink: "https://youtu.be/1JfK-jljfNw?si=-umm4iTdmRqVXQeG",
//           sourceLink: "https://github.com/asiradnan/Red-Ball-Detection",
//             category: "Others"
// },
// {
//   icon: lethalHeight,
//     title: "Lethal Height",
//       description: "A 2D shooting game built with Python and OpenGL featuring dynamic day-night cycles, and dual-player combat.",
//         liveLink: "https://github.com/asiradnan/Lethal-Height",
//           sourceLink: "https://github.com/asiradnan/Lethal-Height",
//             category: "Others"
// },
// {
//   icon: muslimApp,
//     title: "Muslim App",
//       description: "Muslim App is a feature-rich Kotlin-based Android application designed to help Muslims track their daily religious duties effectively.",
//         liveLink: "https://github.com/asiradnan/MuslimAppAndroid/releases/download/v1.0.0/muslimApp.apk",
//           sourceLink: "https://github.com/asiradnan/MuslimAppAndroid",
//             category: "Android"
// },
// {
//   icon: periodicTable,
//     title: "Periodic Table",
//       description: "An Android app a list of 118 elements, each with detailed information in Bangla/English language.",
//         liveLink: "https://play.google.com/store/apps/details?id=com.asiradnan.periodictable&pli=1",
//           sourceLink: "https://github.com/asiradnan/Periodic-Table",
//             category: "Android"
// },
// {
//   icon: greaterNumberGame,
//     title: "Greater Number Game",
//       description: "A simple and fun Android game where players guess which of the two numbers is greater.",
//         liveLink: "https://github.com/asiradnan/Greater-Number-Game/releases/download/v1.0.0/GreaterNumberGame.apk",
//           sourceLink: "https://github.com/asiradnan/Greater-Number-Game",
//             category: "Android"
// },
// {
//   icon: vangtiChai,
//     title: "Vangti Chai",
//       description: "An Android app built as one of my first practice projects in an Android development course. This app calculates the minimum number of currency notes needed to make up a given amount.",
//         liveLink: "https://github.com/asiradnan/Vangti-Chai/releases/download/v1.0.0/VangtiChai.apk",
//           sourceLink: "https://github.com/asiradnan/Vangti-Chai",
//             category: "Android"
// },



export const certificatesData = [
  {
    id: 1,
    name: "ICPC Asia Dhaka Regional 2023 Contestant",
    issuingOrganization: "ICPC Global",
    issueDate: "2023-12-09",
    expiryDate: null,
    credentialId: "WSTHJPP10AEF",
    skills: ["Competitive Programming", "C++", "Algorithms", "Data Structures", "Teamwork"],
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
    skills: ["Competitive Programming", "C++", "Algorithms", "Data Structures", "Teamwork"],
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
    skills: ["Joins", "Aggregations", "Subqueries"],
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
    skills: ["Python", "Basics", "Functions"],
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
    skills: ["Java", "Data Types", "Conditionals"],
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
      Rating: "1321",
      MaxRating: "1321",
      Rank: "Pupil",
      ProblemsSolved: "1150+"
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
      ProblemsSolved: "210+",
      EasyProblems: "55+",
      MediumProblems: "145+",
      HardProblems: "5+"
    },
    achievements: [
      "200+ Problems Solved",
      // "Contest Participant",
      // "Multiple badges earned"
    ]
  },
  {
    id: 3,
    platform: "CodeChef",
    username: "asiradnan",
    profileLink: " https://www.codechef.com/users/asiradnan",
    logo: "/platforms/codechef.png",
    stats: {
      Rating: "1569",
      MaxRating: "1602",
      Rank: "2★",
      ProblemsSolved: "180+"
    },
    achievements: [
      "Highest rank 3★",
    ]
  },
  {
    id: 4,
    platform: "BeeCrowd",
    username: "asiradnan",
    profileLink: "https://judge.beecrowd.com/en/profile/655116",
    logo: "/platforms/beecrowd.png",
    stats: {
      UniversityRanking: "1",
      CountryRanking: "21",
      WorldRanking: "400",
      ProblemsSolved: "405+"
    },
    achievements: [
      "Top 1% WorldWide",
      "1st in BRAC University",

    ]
  },
  {
    id: 5,
    platform: "CSES",
    username: "asiradnan",
    profileLink: "https://cses.fi/problemset/user/171849",
    logo: "/platforms/cses.png",
    stats: {
      ProblemsSolved: "75+"
    },
    achievements: [
      "Solved 75+ classic problems",
    ]
  },
  {
    id: 3,
    platform: "HackerRank",
    username: "asiradnan",
    profileLink: "https://www.hackerrank.com/profile/asiradnan",
    logo: "/platforms/hackerrank.png",
    stats: {
      stars: "5-star C++, 5-star SQL",
      // problemsSolved: "100+",
      badges: "4",
      certificates: "6"
    },
    achievements: [
      "5-star in C++, SQL",
      "Multiple domain certifications",
    ]
  },
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
import SkillsPage from "@/page_components/SkillPage";

export const metadata = {
  title: "Skills - Asir Adnan",
  description: "Comprehensive overview of Asir Adnan's technical expertise across 30+ technologies. From backend development with Django and Python to mobile development with Kotlin and Android. Explore skills in DevOps, databases, and programming languages with associated projects and certifications.",
  keywords: "Asir Adnan skills, Django, Python, Kotlin, Android development, JavaScript, React, Next.js, PostgreSQL, Redis, AWS, Docker, DevOps, full stack developer skills, mobile development, database management, programming languages",
  openGraph: {
    title: "Technical Skills - Asir Adnan | Full Stack & Mobile Development",
    description: "Explore 30+ technical skills across backend, frontend, mobile, and DevOps. Each skill linked to real projects and professional certifications.",
    url: "https://asiradnan.com/skills",
    images: [
      {
        url: "https://asiradnan.com/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Asir Adnan Technical Skills Overview",
      },
    ],
  },
  twitter: {
    title: "Technical Skills - Asir Adnan",
    description: "30+ technical skills in full-stack development, Android, DevOps, and databases. Each skill backed by real projects and certifications.",
    images: ["https://asiradnan.com/default-og.jpg"],
  },
  alternates: {
    canonical: "https://asiradnan.com/skills",
  },
};

export default function sp() {
  return  <SkillsPage />
}
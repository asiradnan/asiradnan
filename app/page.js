import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Asir Adnan",
  description: "I'm Asir Adnan, a passionate Full Stack Web Developer and Android Developer with expertise in DevOps. I build scalable web applications, native Android apps, and solve complex DSA problems. Explore my portfolio showcasing 20+ projects, professional certifications, and competitive programming achievements.",
  keywords: "Asir Adnan, Full Stack Developer, Android Developer, DevOps Engineer, Web Development, Django, Kotlin, JavaScript, Python, React, Next.js, Portfolio, Software Engineer, Bangladesh",
  authors: [{ name: "Asir Adnan" }],
  creator: "Asir Adnan",
  publisher: "Asir Adnan",
  robots: "index, follow",
  openGraph: {
    title: "Asir Adnan - Full Stack Developer | Android Developer | DevOps Engineer",
    description: "Passionate software developer specializing in full-stack web development, native Android apps, and DevOps. 20+ projects, certifications, and competitive programming achievements.",
    url: "https://asiradnan.com",
    siteName: "Asir Adnan Portfolio",
    images: [
      {
        url: "https://asiradnan.com/default-og.png",
        width: 1200,
        height: 630,
        alt: "Asir Adnan - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asir Adnan - Full Stack Developer | Android Developer | DevOps Engineer",
    description: "Passionate software developer with 20+ projects and competitive programming expertise. Building scalable solutions with modern technologies.",
    images: ["https://asiradnan.com/default-og.png"],
    creator: "@asiradnan",
  },
  alternates: {
    canonical: "https://asiradnan.com",
  },
  other: {
    "application-name": "Asir Adnan Portfolio",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Asir Adnan",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-tap-highlight": "no",
    "theme-color": "#000000",
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <SkillsSection />
      <ProjectsSection />
      <AchievementsSection /> */}
      <ContactSection/>
    </>

  )
}
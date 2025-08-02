import ProjectsPage from "@/page_components/ProjectPage";

export const metadata = {
  title: "Projects Portfolio - Asir Adnan | Web Apps, Android Apps & Software Solutions",
  description: "Explore Asir Adnan's portfolio of 20+ software projects including PulseCampus college management system, CopyPasta file transfer app, and Periodic Table Android app. Each project features live demos, source code, and detailed technical documentation using Django, Kotlin, React, and more.",
  keywords: "Asir Adnan projects, software development portfolio, Django projects, Android apps, Kotlin apps, React projects, PulseCampus, CopyPasta, web applications, mobile applications, GitHub projects, live demos",
  openGraph: {
    title: "Projects Portfolio - Asir Adnan | 20+ Software Development Projects",
    description: "Comprehensive portfolio showcasing web applications, Android apps, and software solutions. Live demos and source code available for each project.",
    url: "https://asiradnan.com/projects",
    images: [
      {
        url: "https://asiradnan.com/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Asir Adnan Projects Portfolio",
      },
    ],
  },
  twitter: {
    title: "Projects Portfolio - Asir Adnan",
    description: "20+ software development projects including web apps, Android apps, and enterprise solutions. Live demos and GitHub repositories available.",
    images: ["https://asiradnan.com/projects-og.jpg"],
  },
  alternates: {
    canonical: "https://asiradnan.com/projects",
  },
};



export default function pp(){
  return <ProjectsPage />
}
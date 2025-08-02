import ExperiencePage from "@/page_components/ExperiencePage";

export const metadata = {
  title: "Work Experience - Asir Adnan | Android Developer & Web Developer Professional History",
  description: "Explore Asir Adnan's professional work experience including Android Developer role at Altux Studio and Web Developer position at BRAC Business School. Detailed overview of responsibilities, achievements, and technologies used in each role including Kotlin, Django, and web development projects.",
  keywords: "Asir Adnan experience, Android developer experience, web developer career, Altux Studio, BRAC Business School, Kotlin developer, Django developer, professional experience, software developer career history",
  openGraph: {
    title: "Work Experience - Asir Adnan | Professional Software Developer",
    description: "Professional experience as Android Developer and Web Developer with detailed achievements and technologies used in each role.",
    url: "https://asiradnan.com/experience",
    images: [
      {
        url: "https://asiradnan.com/experience-og.jpg",
        width: 1200,
        height: 630,
        alt: "Asir Adnan Work Experience",
      },
    ],
  },
  twitter: {
    title: "Work Experience - Asir Adnan",
    description: "Professional software developer experience with roles in Android development and web development. Career progression and achievements.",
    images: ["https://asiradnan.com/experience-og.jpg"],
  },
  alternates: {
    canonical: "https://asiradnan.com/experience",
  },
}

export default function ep(){
    return <ExperiencePage />

}
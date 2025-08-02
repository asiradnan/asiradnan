import ResumePage from "@/page_components/ResumePage";

export const metadata = {
  title: "Resume & CV - Asir Adnan | Download Professional Resume PDF",
  description: "Download Asir Adnan's professional resume showcasing experience as Full Stack Developer and Android Developer. Includes work experience at Altux Studio and BRAC Business School, technical skills, projects, and contact information. Available in PDF format for instant download.",
  keywords: "Asir Adnan resume, CV download, software developer resume, full stack developer CV, Android developer resume, professional resume PDF, hire Asir Adnan, developer portfolio CV",
  openGraph: {
    title: "Resume & CV - Asir Adnan | Professional Software Developer",
    description: "Download professional resume with experience in full-stack and Android development. Work history, technical skills, and project highlights included.",
    url: "https://asiradnan.com/resume",
    images: [
      {
        url: "https://asiradnan.com/resume-og.jpg",
        width: 1200,
        height: 630,
        alt: "Asir Adnan Professional Resume",
      },
    ],
  },
  twitter: {
    title: "Resume & CV - Asir Adnan",
    description: "Professional software developer resume with full-stack and Android development experience. Download PDF format.",
    images: ["https://asiradnan.com/resume-og.jpg"],
  },
  alternates: {
    canonical: "https://asiradnan.com/resume",
  },
};

export default function rp(){
    return <ResumePage />
}
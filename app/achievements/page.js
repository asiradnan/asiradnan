import AchievementsPage from "@/page_components/AchievementPage";

export const metadata = {
  title: "Achievements & Certifications - Asir Adnan | Professional Certificates & Competitive Programming",
  description: "Explore Asir Adnan's professional achievements including 16+ verified certifications from HackerRank, SoloLearn, and prestigious programming contests. View competitive programming profiles on Codeforces, LeetCode, AtCoder, and more.",
  keywords: "Asir Adnan achievements, programming certifications, competitive programming, Codeforces, LeetCode, HackerRank, SoloLearn, ICPC, NCPC, Python certification, SQL certification, JavaScript certification, coding contest achievements",
  openGraph: {
    title: "Achievements & Certifications - Asir Adnan",
    description: "16+ professional certifications and competitive programming achievements across multiple platforms. Verified certificates in Python, SQL, JavaScript, and contest participations.",
    url: "https://asiradnan.com/achievements",
    images: [
      {
        url: "https://asiradnan.com/achievements-og.jpg",
        width: 1200,
        height: 630,
        alt: "Asir Adnan Achievements and Certifications",
      },
    ],
  },
  twitter: {
    title: "Achievements & Certifications - Asir Adnan",
    description: "16+ professional certifications and competitive programming achievements. View verified certificates and programming contest results.",
    images: ["https://asiradnan.com/achievements-og.jpg"],
  },
  alternates: {
    canonical: "https://asiradnan.com/achievements",
  },
};

export default function AP(){
  return <AchievementsPage />
}
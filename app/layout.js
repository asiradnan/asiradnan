import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import logo_image from "@/public/pics/me_resized.png"

const inter = Inter({ subsets: ['latin']  })

export const metadata = {
  title: "Asir Adnan",
  description: "Asir Adnan's personal portfolio website featuring Competitive Programming journey, Web Development Projects, Skills and Blogs.",
  openGraph: {
    title: 'Asir Adnan\'s Portfolio',
    description: 'Explore Asir Adnan\'s projects and professional experience.',
    type: "website",
    url: "https://asiradnan.com",
    images: [
      {
        url: logo_image.src,
        alt: "Asir Adnan's Profile Picture",
      },
    ],
    site_name: "asiradnan.com"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Asir Adnan",
            url: "https://asiradnan.com",
            sameAs: [
              "https://www.facebook.com/asiradnan23", 
              "https://github.com/asiradnan",              
              "https://www.linkedin.com/in/asiradnan", 
              "https://www.youtube.com/@AsironScreen",             ],
            image: logo_image.src,
            description: "Asir Adnan's portfolio showcasing projects and professional experience.",
          })}
        </script>
      </head>
      
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

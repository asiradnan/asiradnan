import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import logo_image from "@/public/pics/me_resized.png"

const inter = Inter({ subsets: ['latin']  })

export const metadata = {
  title: "Asir Adnan",
  description: "Landing page of Asir Adnan's portfolio",
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

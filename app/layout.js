import "./globals.css";
import NavBar from "../components/navbar";
import { ThemeProvider } from "@/components/ThemeContext";
import { JetBrains_Mono } from 'next/font/google';
import SocialSidebar from "@/components/SocialSidebar";
import { ClarityProvider } from "@/components/ClarityProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export const metadata = {
  title: "Asir Adnan",
  description: "Asir Adnan portfolio as a software engineer/developer/full stack developer/backend developer/android developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased">
        <ClarityProvider />
        <ThemeProvider>
          <NavBar />
          <SocialSidebar />
          <main className="w-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
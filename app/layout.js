import "./globals.css";
import NavBar from "../components/navbar";
import { ThemeProvider } from "@/components/ThemeContext";
import { JetBrains_Mono } from 'next/font/google';
import SocialSidebar from "@/components/SocialSidebar";

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
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex flex-grow relative">
              <SocialSidebar />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
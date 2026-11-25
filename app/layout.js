import "./globals.css";
import NavBar from "../components/navbar";
import { ThemeProvider } from "@/components/ThemeContext";
import { JetBrains_Mono } from 'next/font/google';
import SocialSidebar from "@/components/SocialSidebar";
import { ClarityProvider } from "@/components/ClarityProvider";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export const metadata = {
  title: "Asir Adnan",
  description: "Asir Adnan portfolio as a software engineer/developer/full stack developer/backend developer",
};

const themeInitScript = `
try {
  var saved = localStorage.getItem('theme');
  var isDark = saved ? saved === 'dark' : true;
  var root = document.documentElement;
  root.classList.toggle('dark', isDark);
  root.classList.toggle('light', !isDark);
  var meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) meta.content = isDark ? 'dark' : 'light';
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-mono antialiased">
        <ClarityProvider />
        <ThemeProvider>
          <NavBar />
          <SocialSidebar />
          <AnimatedBackground />
          <main className="w-full relative z-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
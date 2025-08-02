"use client";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from '@/components/ThemeContext'
import { usePathname } from 'next/navigation';

// Add JetBrains Mono font
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${isDark ? 'bg-black' : 'bg-white'} shadow-lg fixed top-0 left-0 w-full z-50 ${jetbrainsMono.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'} tracking-tight`}>
            <Link href={"/"}>Asir Adnan</Link> 
          </h1>

          {/* Desktop nav */}
          <nav className={`hidden lg:flex space-x-8 ${isDark ? 'text-white' : 'text-black'} font-medium`}>
            <NavLinks isDark={isDark} />
          </nav>

          {/* Theme toggle, mobile menu, and resume button */}
          <div className="flex items-center space-x-4">
            {/* Resume button - desktop only */}
            <div className="hidden lg:block">
              <ResumeButton isDark={isDark} />
            </div>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'} transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </button>

            {/* Mobile menu toggle */}
            <button
              className={`lg:hidden relative z-50 ${isDark ? 'text-white' : 'text-black'}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <motion.div
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: menuOpen ? 90 : -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: menuOpen ? -90 : 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`lg:hidden ${isDark ? 'bg-black border-gray-700' : 'bg-white border-gray-200'} overflow-hidden border-t shadow-lg`}
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className={`flex flex-col items-end space-y-4 py-6 ${isDark ? 'text-white' : 'text-black'} text-lg font-medium w-full pr-4 mr-4`}
            >
              <NavLinks isDark={isDark} />
              <ResumeButton isDark={isDark} />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLinks({ isDark }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {[
        { href: "/", label: "Home" },
        // { href: "/about", label: "About" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/achievements", label: "Achievements" },
        { href: "/experience", label: "Experience" },
      ].map(({ href, label }) => {
        const active = isActive(href);
        
        return (
          <Link 
            key={href} 
            href={href} 
            className={`relative group transition-all duration-300 ${
              active 
                ? (isDark ? 'text-white font-bold' : 'text-black font-bold')
                : (isDark ? 'hover:text-gray-300 text-white' : 'hover:text-gray-600 text-black')
            }`}
          >
            {label}
            <span 
              className={`block h-0.5 transition-transform duration-300 origin-left ${
                active 
                  ? `scale-x-100 ${isDark ? 'bg-white' : 'bg-black'}`
                  : `scale-x-0 group-hover:scale-x-100 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`
              }`} 
            />
          </Link>
        );
      })}
    </>
  );
}

function ResumeButton({ isDark }) {
  const pathname = usePathname();
  const active = pathname.startsWith('/resume');

  return (
    <Link 
      href="/resume"
      className={`relative group transition-all duration-300 px-4 py-2 rounded-lg border-2 font-medium ${
        active 
          ? (isDark 
              ? 'bg-white text-black border-white' 
              : 'bg-black text-white border-black'
            )
          : (isDark 
              ? 'border-white text-white hover:bg-white hover:text-black' 
              : 'border-black text-black hover:bg-black hover:text-white'
            )
      }`}
    >
      Resume
    </Link>
  );
}
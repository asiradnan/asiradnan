'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertCircle,
  Code2,
  Smartphone,
  Database,
  Server,
  Monitor,
  Brain,
  Zap,
  FileQuestion,
  ChevronDown
} from 'lucide-react';

// Add JetBrains Mono font
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    const checkTheme = () => {
      if (typeof window === 'undefined') return;
      
      // Multiple checks for theme
      const html = document.documentElement;
      const body = document.body;
      const savedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Check for dark class on html or body
      const hasHtmlDark = html.classList.contains('dark');
      const hasBodyDark = body.classList.contains('dark');
      
      // Also check for data attributes that might be used
      const dataTheme = html.getAttribute('data-theme');
      const colorScheme = html.style.colorScheme;
      
      const shouldBeDark = hasHtmlDark || 
                          hasBodyDark || 
                          dataTheme === 'dark' ||
                          colorScheme === 'dark' ||
                          savedTheme === 'dark' || 
                          (!savedTheme && systemDark);
      
      console.log('Theme check:', {
        hasHtmlDark,
        hasBodyDark,
        dataTheme,
        colorScheme,
        savedTheme,
        systemDark,
        shouldBeDark
      });
      
      setIsDark(shouldBeDark);
    };

    // Initial check
    checkTheme();
    
    // Watch for changes on html element
    const htmlObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'class' || 
             mutation.attributeName === 'data-theme' ||
             mutation.attributeName === 'style')) {
          setTimeout(checkTheme, 0); // Delay to ensure changes are applied
        }
      });
    });
    
    // Watch for changes on body element
    const bodyObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setTimeout(checkTheme, 0);
        }
      });
    });
    
    htmlObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'style']
    });
    
    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Watch for localStorage changes
    const handleStorage = (e) => {
      if (e.key === 'theme') {
        setTimeout(checkTheme, 0);
      }
    };
    
    window.addEventListener('storage', handleStorage);
    
    // Also watch for custom theme change events
    const handleThemeChange = () => {
      setTimeout(checkTheme, 0);
    };
    
    document.addEventListener('theme-change', handleThemeChange);
    window.addEventListener('theme-change', handleThemeChange);
    
    // Poll for changes as fallback (remove this if performance is a concern)
    const pollInterval = setInterval(checkTheme, 1000);
    
    return () => {
      htmlObserver.disconnect();
      bodyObserver.disconnect();
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('theme-change', handleThemeChange);
      window.removeEventListener('theme-change', handleThemeChange);
      clearInterval(pollInterval);
    };
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  // Floating background icons
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 20, y: 30 },
    { Icon: Smartphone, delay: 0.5, x: -30, y: 20 },
    { Icon: Database, delay: 1, x: 40, y: -20 },
    { Icon: Server, delay: 1.5, x: -20, y: -30 },
    { Icon: Monitor, delay: 2, x: 50, y: 40 },
    { Icon: Brain, delay: 2.5, x: -40, y: 35 },
    { Icon: Zap, delay: 3, x: 30, y: -40 },
    { Icon: AlertCircle, delay: 3.5, x: -50, y: 25 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-500 ${jetbrainsMono.className}`}
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(0, 0, 0) 50%, rgb(31, 41, 55) 100%)'
          : 'linear-gradient(135deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 50%, rgb(243, 244, 246) 100%)'
      }}
    >
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30"
          style={{ 
            color: isDark ? 'rgb(55, 65, 81)' : 'rgb(209, 213, 219)',
            left: `${20 + (index * 10)}%`,
            top: `${15 + (index * 8)}%`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.3,
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 360]
          }}
          transition={{
            delay: delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 py-12 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Error Icon with animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div 
            className="mx-auto w-24 h-24 rounded-full border-2 flex items-center justify-center"
            style={{
              backgroundColor: isDark ? 'rgb(31, 41, 55)' : 'rgb(243, 244, 246)',
              borderColor: isDark ? 'rgb(75, 85, 99)' : 'rgb(209, 213, 219)'
            }}
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <FileQuestion 
              size={40} 
              style={{ color: isDark ? 'rgb(248, 113, 113)' : 'rgb(220, 38, 127)' }}
            />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: isDark ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)' }}
        >
          Oops! The page you're looking for seems to have vanished into the digital void. 
          It might have been moved, deleted, or maybe it never existed at all.
        </motion.p>

        {/* Fun message */}
        <motion.div
          variants={itemVariants}
          className="p-4 rounded-lg border mb-8 max-w-md mx-auto"
          style={{
            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)',
            borderColor: isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(209, 213, 219, 0.5)'
          }}
        >
          <p 
            className="text-sm"
            style={{ color: isDark ? 'rgb(156, 163, 175)' : 'rgb(75, 85, 99)' }}
          >
            💡 <strong>Developer's Note:</strong> While you're here, why not check out some of my actual work? 
            I promise my projects exist! 😄
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/"
              className="flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
              style={{
                backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
              }}
            >
              <Home size={20} />
              Go Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/projects"
              className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-lg border-2 transition-all duration-300"
              style={{
                borderColor: isDark ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
                color: isDark ? 'rgb(229, 231, 235)' : 'rgb(31, 41, 55)',
                backgroundColor: 'transparent'
              }}
            >
              <Search size={20} />
              Explore Projects
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
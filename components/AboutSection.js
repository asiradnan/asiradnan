'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Brain, Trophy, ChevronDown, MessageSquare } from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

export default function AboutSection() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className={`py-16 sm:py-20 md:min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      {/* Main content */}
      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section title */}
        <motion.h2
          variants={itemVariants}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          About Me
        </motion.h2>

        {/* Main description - same style as hero description */}
        <motion.p
          variants={itemVariants}
          className={`text-sm sm:text-base md:text-lg ${isDark ? 'text-gray-200' : 'text-gray-800'} px-0 sm:px-4 md:px-8 py-6 sm:py-8 md:py-10 max-w-4xl mx-auto leading-relaxed font-normal`}
        >
          I&apos;m a Software Engineer with professional experience building and deploying full-stack applications using Django, Django REST Framework, React, and PostgreSQL. Alongside web, I actively develop native Android applications with Kotlin and Jetpack Compose.
    <br></br> <br></br>
My interests span backend architecture, REST APIs, cloud deployments, Android development, and writing maintainable software that is reliable, testable, and easy to evolve. I enjoy taking products from idea to production while focusing on clean architecture and long-term maintainability.
        </motion.p>

        {/* View More About Me Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap"
          >
            {/* View My Skills (Scroll - Secondary) */}
            <motion.button
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg border-2 ${isDark
                ? 'border-gray-400 text-gray-200 hover:bg-gray-700'
                : 'border-gray-500 text-gray-800 hover:bg-gray-100'
                } transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const skillsSection = document.getElementById("contact-section");
                skillsSection?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <MessageSquare size={20} />
              Contact Me
              <ChevronDown size={20} />
            </motion.button>

            {/* More About Me (Primary - New Page) */}
            {/* <Link href="/about">
              <motion.a
                className={`flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg ${isDark
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
                  } transition-all duration-300`}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserRound size={22} />
                More About Me
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                >
                  <ArrowRight size={28} />
                </motion.div>
              </motion.a>
            </Link> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
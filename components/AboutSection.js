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
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      {/* Main content */}
      <motion.div
        className="text-center z-10 px-6 max-w-5xl mx-auto"
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
          className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-200' : 'text-gray-800'} px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
        >
          I am in love with programming.
          Hence, I taught myself more of it than what the varsity taught me.
          Even though my journey began with Python,
          I learned C++ for competitive programming,
          JavaScript for Web programming,
          and Kotlin for Android along the way.
          I have also explored Java and C.
          To date, I have completed more than 20 personal web projects
          and worked professionally with more than 10.
          I have one Android app published on the Play Store,
          and more are on the way.
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
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-lg border-2 ${isDark
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
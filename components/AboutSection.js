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
          Backend-focused Full-Stack Developer passionate about building scalable web applications, APIs, and cloud-based systems. 
          I specialize in Python (Django, FastAPI) and JavaScript (Node.js, React, Next.js), with expertise in end-to-end development 
          from database design to cloud deployment on AWS and DigitalOcean.
          <br /><br />
          My journey began with Python, expanded to C++ for competitive programming (ICPC Regional participant), 
          JavaScript for modern web development, and Kotlin for Android applications. 
          I&apos;ve completed 20+ personal projects and delivered professional solutions through freelance work and contract positions.
          With one Android app published on Google Play Store and proven experience in CI/CD pipelines, 
          asynchronous architecture, and performance optimization, I focus on writing clean, efficient, and production-ready code.
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
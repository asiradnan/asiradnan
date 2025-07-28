'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, 
  Smartphone, 
  Database, 
  Globe, 
  Bot,
  Blocks,
  ChevronDown,
  Folder,
  ArrowRight,
  Trophy
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projectCategories = React.useMemo(() => [
    { 
      id: 'fullstack', 
      name: "Full Stack Projects", 
      icon: Code2, 
      count: 5
    },
    { 
      id: 'android', 
      name: "Android Applications", 
      icon: Smartphone, 
      count: 3
    },
    { 
      id: 'frontend', 
      name: "Frontend Projects", 
      icon: Globe, 
      count: 4
    },
    { 
      id: 'ai', 
      name: "AI & ML Projects", 
      icon: Bot, 
      count: 2
    },
    { 
      id: 'blockchain', 
      name: "Blockchain Applications", 
      icon: Blocks, 
      count: 1
    }
  ], []);

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 20, y: 30 },
    { Icon: Smartphone, delay: 0.5, x: -30, y: 20 },
    { Icon: Database, delay: 1, x: 40, y: -20 },
    { Icon: Bot, delay: 1.5, x: -20, y: -30 },
    { Icon: Blocks, delay: 2, x: 50, y: 40 },
    { Icon: Globe, delay: 2.5, x: -40, y: 35 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-scroll to center the projects section
          setTimeout(() => {
            sectionRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }, 100);
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
        delayChildren: 0.3
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
    <section
      id="projects-section"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className={`w-full h-full ${isDark ? 'bg-grid-white/[0.05]' : 'bg-grid-black/[0.05]'}`}
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
          className={`absolute ${isDark ? 'text-gray-700' : 'text-gray-300'} opacity-30`}
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
          style={{
            left: `${20 + (index * 12)}%`,
            top: `${15 + (index * 8)}%`
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

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
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <motion.span
            className={`bg-gradient-to-r ${isDark
              ? 'from-white via-blue-100 to-white'
              : 'from-gray-900 via-blue-600 to-gray-900'
              } bg-clip-text text-transparent`}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            My Projects
          </motion.span>
        </motion.h2>

        {/* Main description */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-3xl mx-auto leading-relaxed`}
        >
          I've built a diverse portfolio of applications across different platforms and domains.
          Here's a summary of the projects I've worked on so far.
        </motion.p>

        {/* Project Categories - Simple list similar to skills in AboutSection */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${isDark
                    ? 'border-gray-600 text-gray-300'
                    : 'border-gray-300 text-gray-700'
                  }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <category.icon size={20} />
                <span className="text-sm font-medium">{category.name} ({category.count})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final statement */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-12`}
        >
          Each project represents a unique challenge I've tackled, using various technologies 
          and approaches to create solutions that solve real-world problems.
        </motion.p>

        {/* View All Projects Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 flex-wrap"
        >    
          <motion.button
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-lg border-2 ${isDark
                ? 'border-gray-400 text-gray-200 hover:bg-gray-700'
                : 'border-gray-500 text-gray-800 hover:bg-gray-100'
              } transition-all duration-300`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              contactSection?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            <Trophy size={20} />
            My Achievements
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
          <motion.button
            className={`flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
              } transition-all duration-300`}
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            <Folder size={22} />
            View All Projects
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <ArrowRight size={28} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
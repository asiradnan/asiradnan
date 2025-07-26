'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Database,
  Brain,
  Server,
  Monitor
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'


export default function SkillsSection() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = React.useMemo(() => [
    {
      title: "Backend Development",
      icon: Server,
      color: isDark ? "text-blue-400" : "text-blue-600",
      bgColor: isDark ? "bg-blue-400/10" : "bg-blue-600/10",
      borderColor: isDark ? "border-blue-400/30" : "border-blue-600/30",
      skills: ["FastAPI", "Django", "DRF", "Express"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: isDark ? "text-purple-400" : "text-purple-600",
      bgColor: isDark ? "bg-purple-400/10" : "bg-purple-600/10",
      borderColor: isDark ? "border-purple-400/30" : "border-purple-600/30",
      skills: ["Android", "Kotlin", "Jetpack Compose"]
    },
    {
      title: "DevOPS and Tools",
      icon: Brain,
      color: isDark ? "text-teal-400" : "text-teal-600",
      bgColor: isDark ? "bg-teal-400/10" : "bg-teal-600/10",
      borderColor: isDark ? "border-teal-400/30" : "border-teal-600/30",
      skills: ["AWS", "Git", "CI/CD", "Nginx"]
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      color: isDark ? "text-green-400" : "text-green-600",
      bgColor: isDark ? "bg-green-400/10" : "bg-green-600/10",
      borderColor: isDark ? "border-green-400/30" : "border-green-600/30",
      skills: ["React", "Next", "HTML", "CSS", "JS"]
    },
    {
      title: "Database",
      icon: Database,
      color: isDark ? "text-pink-400" : "text-pink-600",
      bgColor: isDark ? "bg-pink-400/10" : "bg-pink-600/10",
      borderColor: isDark ? "border-pink-400/30" : "border-pink-600/30",
      skills: ["Postgre", "MySQL", "SQLite", "Mongo"]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      color: isDark ? "text-orange-400" : "text-orange-600",
      bgColor: isDark ? "bg-orange-400/10" : "bg-orange-600/10",
      borderColor: isDark ? "border-orange-400/30" : "border-orange-600/30",
      skills: ["Python", "Kotlin", "JavaScript", "C++"]
    },
  ], [isDark]);

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 20, y: 30 },
    { Icon: Smartphone, delay: 0.5, x: -30, y: 20 },
    { Icon: Database, delay: 1, x: 40, y: -20 },
    { Icon: Server, delay: 1.5, x: -20, y: -30 },
    { Icon: Monitor, delay: 2, x: 50, y: 40 },
    { Icon: Brain, delay: 2.5, x: -40, y: 35 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-scroll to center the skills section
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="skills-section"
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
        className="text-center z-10 px-6 max-w-7xl mx-auto"
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
            My Skills
          </motion.span>
        </motion.h2>



        {/* Skills Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.6 + (categoryIndex * 0.1) }}
              className={`relative p-6 rounded-2xl border backdrop-blur-sm ${category.bgColor} ${category.borderColor} ${isDark ? 'bg-gray-800/20' : 'bg-white/20'}`}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Category Header (Icon + Title in One Row) */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`p-3 rounded-full ${category.bgColor} ${category.color}`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon size={28} />
                </motion.div>
                <h3 className={`text-lg font-bold ${category.color}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List (Now horizontal wrapping row) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full border ${isDark
                        ? 'bg-gray-700/50 border-gray-600 text-gray-300'
                        : 'bg-white/50 border-gray-300 text-gray-700'
                      }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 ${isDark
              ? 'border-white text-white hover:bg-white hover:text-black'
              : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById("projects-section");
              projectsSection?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            View My Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/ThemeContext';
import { projectsData } from '@/data/projectsData';
import Link from 'next/link';
import { 
  Trophy, 
  ArrowRight, 
  ChevronDown, 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  Building, 
  FileText, 
  Briefcase,
  Code2,
  Smartphone,
  Database,
  Brain,
  Server,
  Monitor,
  Award,
  Play,
  Eye,
  Star,
  Users,
  Clock,
  Zap
} from 'lucide-react';

export default function ProjectsSection({ onProjectClick }) {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const featuredProjects = projectsData.slice(0, 4);

  // Floating background icons
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 20, y: 30 },
    { Icon: Smartphone, delay: 0.5, x: -30, y: 20 },
    { Icon: Database, delay: 1, x: 40, y: -20 },
    { Icon: Server, delay: 1.5, x: -20, y: -30 },
    { Icon: Monitor, delay: 2, x: 50, y: 40 },
    { Icon: Brain, delay: 2.5, x: -40, y: 35 }
  ];

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            sectionRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
      clearTimeout(loadingTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handleProjectClick = (project) => {
    // Navigate to projects page with project ID in URL hash
    window.open(`/projects#project-${project.id}`, '_blank');
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  const handleShowAllProjects = () => {
    setShowAllProjects(true);
  };

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <motion.div
      className="w-full max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`min-w-[320px] max-w-xs flex-shrink-0 ${
              isDark 
                ? 'bg-gray-900/50 border border-gray-700/50' 
                : 'bg-white/50 border border-gray-200/50'
            } rounded-2xl p-6 animate-pulse`}
          >
            {/* Image skeleton */}
            <div className="w-full aspect-video rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 mb-4" />
            
            {/* Category skeleton */}
            <div className="h-6 w-20 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full mb-2" />
            
            {/* Title skeleton */}
            <div className="h-6 w-3/4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded mb-2" />
            
            {/* Description skeleton */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded" />
              <div className="h-4 w-2/3 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  // All Projects Modal Component (similar to skills page)
  const AllProjectsModal = () => {
    if (!showAllProjects) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAllProjects(false)}
        >
          <motion.div
            className={`w-full max-w-4xl max-h-[80vh] rounded-2xl border ${
              isDark 
                ? 'bg-gray-900 border-white/20' 
                : 'bg-white border-black/20'
            } shadow-2xl flex flex-col`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b ${isDark ? 'border-white/20' : 'border-black/20'} flex-shrink-0`}>
              <div className="flex justify-between items-center">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  All Projects
                </h2>
                <button
                  onClick={() => setShowAllProjects(false)}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-black'}`}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex gap-4 mt-2 text-sm">
                <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Briefcase size={16} />
                  {projectsData.length} Total Projects
                </span>
              </div>
            </div>

            {/* Projects List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
              <div className="grid gap-4">
                {projectsData.map((project) => (
                  <motion.div
                    key={project.id}
                    className={`p-4 rounded-lg border ${
                      isDark 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                        : 'bg-black/5 border-black/10 hover:bg-black/10'
                    } transition-all duration-200 cursor-pointer`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                            {project.name}
                          </h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {project.category}
                          </span>
                        </div>
                        <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills && project.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className={`px-2 py-1 text-xs rounded-full ${
                                isDark 
                                  ? 'bg-white/10 text-white' 
                                  : 'bg-black/10 text-black'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {project.skills && project.skills.length > 4 && (
                            <span className={`px-2 py-1 text-xs rounded-full ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              +{project.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      <ExternalLink size={16} className={`ml-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <section
        id="projects-section"
        ref={sectionRef}
        className={`min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden py-16 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
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

        <div className="relative z-10 w-full">
          <motion.div
            className="text-center mb-10"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className={`bg-gradient-to-r ${
                isDark 
                  ? 'from-white via-blue-100 to-white' 
                  : 'from-gray-900 via-blue-600 to-gray-900'
              } bg-clip-text text-transparent`}>
                Featured Projects
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } max-w-2xl mx-auto leading-relaxed`}
            >
              Click on any project to explore detailed information, and live demos!
            </motion.p>
          </motion.div>

          {/* Featured Projects List */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <motion.div
                className="w-full max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                key="projects-grid"
              >
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x px-4 scrollbar-hide">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={cardVariants}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                      className={`min-w-[320px] max-w-xs flex-shrink-0 relative ${
                        isDark 
                          ? 'bg-gray-900/80 border border-gray-700/50 shadow-lg backdrop-blur-sm' 
                          : 'bg-white/80 border border-gray-200/50 shadow-md backdrop-blur-sm'
                      } rounded-2xl p-6 flex flex-col items-start snap-center transition-all duration-300 cursor-pointer group overflow-hidden`}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -8,
                        boxShadow: isDark 
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleProjectClick(project)}
                    >
                      {/* Hover Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 rounded-2xl"
                        whileHover={{
                          background: isDark
                            ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                            : "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)"
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 w-full">
                        {/* Project Image */}
                        <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          {project.image ? (
                            <img 
                              src={project.image} 
                              alt={project.name} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="text-gray-400 text-3xl font-bold flex items-center justify-center w-full h-full">
                              <Code2 size={48} />
                            </div>
                          )}
                        </div>

                        {/* Project Category */}
                        <motion.span 
                          className={`px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block ${
                            isDark 
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                              : 'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.category}
                        </motion.span>

                        {/* Project Title */}
                        <h3 className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        } group-hover:text-blue-500 transition-colors duration-300`}>
                          {project.name}
                        </h3>

                        {/* Project Description */}
                        <p className={`text-base mb-4 ${
                          isDark ? 'text-gray-400' : 'text-gray-700'
                        } line-clamp-3 leading-relaxed`}>
                          {project.shortDescription}
                        </p>

                        {/* Tech Stack Preview */}
                        {project.skills && project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.skills.slice(0, 3).map((skill) => (
                              <span
                                key={skill}
                                className={`px-2 py-1 text-xs rounded-md ${
                                  isDark 
                                    ? 'bg-white/10 text-gray-300' 
                                    : 'bg-black/10 text-gray-700'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                            {project.skills.length > 3 && (
                              <span className={`px-2 py-1 text-xs rounded-md ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                +{project.skills.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Action Hint */}
                        <motion.div
                          className={`flex items-center gap-2 text-sm font-medium ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <Eye size={14} />
                          Click to explore
                          <ArrowRight size={14} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible && !isLoading ? 'visible' : 'hidden'}
            className="mt-10 flex justify-center gap-4 flex-wrap px-4"
          >
            <motion.button
              variants={itemVariants}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-lg border-2 ${
                isDark
                  ? 'border-gray-400 text-gray-200 hover:bg-gray-700 hover:border-gray-300'
                  : 'border-gray-500 text-gray-800 hover:bg-gray-100 hover:border-gray-600'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowAllProjects}
            >
              <Trophy size={20} />
              My Achievements
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>

            <Link href="/skills">
            <motion.a
              className={`flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
                } transition-all duration-300`}
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 size={22} />
              View All Projects
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              >
                <ArrowRight size={28} />
              </motion.div>
            </motion.a>
          </Link>
          </motion.div>
        </div>
      </section>

      {/* All Projects Modal */}
      <AllProjectsModal />

      {/* Custom scrollbar hiding CSS */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
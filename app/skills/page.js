'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Database,
  Brain,
  Server,
  Monitor,
  Award,
  FolderOpen,
  ArrowLeft,
  X,
  ExternalLink,
  Github,
  Calendar,
  Building,
  FileText,
  Briefcase
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { projectsData, certificatesData } from '@/data/projectsData';
import { skillCategories, getSkillStats, getCategoryTotals } from '@/data/skillsData';
import Link from 'next/link';

const SkillsPage = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);

  // Icon mapping for categories - matching SkillsSection.js exactly
  const categoryIcons = {
    "Backend Development": Server,
    "Mobile Development": Smartphone,
    "DevOPS and Tools": Brain,
    "Frontend Development": Monitor,
    "Database": Database,
    "Programming Languages": Code2,
  };

  // Color scheme mapping - matching SkillsSection.js exactly
  const categoryThemes = React.useMemo(() => ({
    "Backend Development": {
      color: isDark ? "text-blue-400" : "text-blue-600",
      bgColor: isDark ? "bg-blue-400/10" : "bg-blue-600/10",
      borderColor: isDark ? "border-blue-400/30" : "border-blue-600/30",
    },
    "Mobile Development": {
      color: isDark ? "text-purple-400" : "text-purple-600",
      bgColor: isDark ? "bg-purple-400/10" : "bg-purple-600/10",
      borderColor: isDark ? "border-purple-400/30" : "border-purple-600/30",
    },
    "DevOPS and Tools": {
      color: isDark ? "text-teal-400" : "text-teal-600",
      bgColor: isDark ? "bg-teal-400/10" : "bg-teal-600/10",
      borderColor: isDark ? "border-teal-400/30" : "border-teal-600/30",
    },
    "Frontend Development": {
      color: isDark ? "text-green-400" : "text-green-600",
      bgColor: isDark ? "bg-green-400/10" : "bg-green-600/10",
      borderColor: isDark ? "border-green-400/30" : "border-green-600/30",
    },
    "Database": {
      color: isDark ? "text-pink-400" : "text-pink-600",
      bgColor: isDark ? "bg-pink-400/10" : "bg-pink-600/10",
      borderColor: isDark ? "border-pink-400/30" : "border-pink-600/30",
    },
    "Programming Languages": {
      color: isDark ? "text-orange-400" : "text-orange-600",
      bgColor: isDark ? "bg-orange-400/10" : "bg-orange-600/10",
      borderColor: isDark ? "border-orange-400/30" : "border-orange-600/30",
    }
  }), [isDark]);

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

  const handleSkillClick = (skill) => {
    const stats = getSkillStats(skill, projectsData, certificatesData);
    if (stats.projectCount > 0 || stats.certificateCount > 0) {
      setSelectedSkill({ skill, ...stats });
    }
  };

  // Skill Detail Modal Component
  const SkillDetailModal = () => {
    if (!selectedSkill) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            className={`w-full max-w-4xl max-h-[80vh] overflow-y-auto rounded-2xl border ${isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-300'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex justify-between items-center">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {selectedSkill.skill}
                </h2>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`p-2 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-600'}`}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex gap-4 mt-2 text-sm">
                <span className={`flex items-center gap-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  <Award size={16} />
                  {selectedSkill.certificateCount} Certificates
                </span>
                <span className={`flex items-center gap-1 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  <Briefcase size={16} />
                  {selectedSkill.projectCount} Projects
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Projects Section */}
              {selectedSkill.projects.length > 0 && (
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <Briefcase size={20} />
                    Projects ({selectedSkill.projects.length})
                  </h3>
                  <div className="grid gap-4">
                    {selectedSkill.projects.map((project) => (
                      <motion.div
                        key={project.id}
                        className={`p-4 rounded-lg border ${isDark 
                          ? 'bg-gray-700/30 border-gray-600/30 hover:bg-gray-600/30' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        } transition-all duration-200 cursor-pointer`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => window.open(`/projects#project-${project.id}`, '_blank')}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {project.name}
                            </h4>
                            <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              {project.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.skills.slice(0, 4).map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 text-xs rounded-full ${isDark 
                                    ? 'bg-gray-600 text-gray-200' 
                                    : 'bg-gray-200 text-gray-700'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                              {project.skills.length > 4 && (
                                <span className={`px-2 py-1 text-xs rounded-full ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                  +{project.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                          <ExternalLink size={16} className={`ml-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Section */}
              {selectedSkill.certificates.length > 0 && (
                <div>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <Award size={20} />
                    Certificates ({selectedSkill.certificates.length})
                  </h3>
                  <div className="grid gap-4">
                    {selectedSkill.certificates.map((certificate) => (
                      <motion.div
                        key={certificate.id}
                        className={`p-4 rounded-lg border ${isDark 
                          ? 'bg-gray-700/30 border-gray-600/30 hover:bg-gray-600/30' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        } transition-all duration-200 cursor-pointer`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => window.open(`/certificates#certificate-${certificate.id}`, '_blank')}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {certificate.name}
                            </h4>
                            <div className="flex items-center gap-4 text-sm mb-3">
                              <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                <Building size={14} />
                                {certificate.issuingOrganization}
                              </span>
                              <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                <Calendar size={14} />
                                {new Date(certificate.issueDate).getFullYear()}
                              </span>
                            </div>
                            <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              {certificate.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {certificate.skills.slice(0, 4).map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 text-xs rounded-full ${isDark 
                                    ? 'bg-gray-600 text-gray-200' 
                                    : 'bg-gray-200 text-gray-700'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                              {certificate.skills.length > 4 && (
                                <span className={`px-2 py-1 text-xs rounded-full ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                  +{certificate.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                          <ExternalLink size={16} className={`ml-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {selectedSkill.projects.length === 0 && selectedSkill.certificates.length === 0 && (
                <div className="text-center py-8">
                  <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    No projects or certificates found for {selectedSkill.skill}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
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

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h1
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
                Detailed Skills
              </motion.span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-3xl mx-auto leading-relaxed`}
            >
              Click on any skill to view associated projects and certifications
            </motion.p>
          </motion.div>

          {/* Skills Grid - matching the 3x2 layout from screenshot */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => {
              const categoryTotals = getCategoryTotals(category, projectsData, certificatesData);
              const theme = categoryThemes[category];
              const IconComponent = categoryIcons[category] || Code2;
              
              return (
                <motion.div
                  key={category}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.6 + (categoryIndex * 0.1) }}
                  className={`relative p-6 rounded-2xl border backdrop-blur-sm ${theme.bgColor} ${theme.borderColor} ${isDark ? 'bg-gray-800/20' : 'bg-white/20'} flex flex-col`}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Category Header - Icon + Title in One Row */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className={`p-3 rounded-full ${theme.bgColor} ${theme.color}`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent size={28} />
                    </motion.div>
                    <h2 className={`text-xl font-bold ${theme.color}`}>
                      {category}
                    </h2>
                  </div>

                  {/* Skills List - Each skill with project and certificate counts */}
                  <div className="space-y-2 mb-6 flex-1">
                    {skills.map((skill, skillIndex) => {
                      const stats = getSkillStats(skill, projectsData, certificatesData);
                      const hasData = stats.projectCount > 0 || stats.certificateCount > 0;
                      
                      return (
                        <motion.div
                          key={skill}
                          className={`flex justify-between items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                            hasData 
                              ? `cursor-pointer ${isDark 
                                  ? 'hover:bg-gray-700/30' 
                                  : 'hover:bg-white/30'
                                }`
                              : 'cursor-default'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 1 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          whileHover={hasData ? { scale: 1.02, x: 4 } : {}}
                          onClick={() => handleSkillClick(skill)}
                        >
                          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} ${hasData ? 'hover:underline' : ''}`}>
                            {skill}
                          </span>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Award size={12} className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                              <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {stats.certificateCount}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase size={12} className={`${isDark ? 'text-green-400' : 'text-green-600'}`} />
                              <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {stats.projectCount}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Category Total - At the very bottom */}
                  <div className={`pt-4 border-t ${isDark ? 'border-gray-600/30' : 'border-gray-300/30'} mt-auto`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Award size={16} className={theme.color} />
                        <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                          {categoryTotals.totalCertificates} Total Certificates
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className={theme.color} />
                        <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                          {categoryTotals.totalProjects} Total Projects
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      <SkillDetailModal />
    </div>
  );
};

export default SkillsPage;
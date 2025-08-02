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
  X,
  ExternalLink,
  Calendar,
  Building,
  Briefcase
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { projectsData, certificatesData } from '@/data/projectsData';
import { skillCategories, getSkillStats, getCategoryTotals } from '@/data/skillsData';

const SkillsPage = () => {
  const { isDark } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Icon mapping for categories
  const categoryIcons = {
    "Backend Development": Server,
    "Mobile Development": Smartphone,
    "DevOPS and Tools": Brain,
    "Frontend Development": Monitor,
    "Database": Database,
    "Programming Languages": Code2,
  };

  // Color scheme mapping
  const categoryThemes = React.useMemo(() => ({
    "Backend Development": {
      color: isDark ? "text-blue-400" : "text-blue-600",
      bgColor: isDark ? "bg-blue-400/10" : "bg-blue-600/10",
      borderColor: isDark ? "border-blue-400/30" : "border-blue-600/30",
      hoverBg: isDark ? "hover:bg-blue-400/15" : "hover:bg-blue-600/15",
    },
    "Mobile Development": {
      color: isDark ? "text-purple-400" : "text-purple-600",
      bgColor: isDark ? "bg-purple-400/10" : "bg-purple-600/10",
      borderColor: isDark ? "border-purple-400/30" : "border-purple-600/30",
      hoverBg: isDark ? "hover:bg-purple-400/15" : "hover:bg-purple-600/15",
    },
    "DevOPS and Tools": {
      color: isDark ? "text-teal-400" : "text-teal-600",
      bgColor: isDark ? "bg-teal-400/10" : "bg-teal-600/10",
      borderColor: isDark ? "border-teal-400/30" : "border-teal-600/30",
      hoverBg: isDark ? "hover:bg-teal-400/15" : "hover:bg-teal-600/15",
    },
    "Frontend Development": {
      color: isDark ? "text-green-400" : "text-green-600",
      bgColor: isDark ? "bg-green-400/10" : "bg-green-600/10",
      borderColor: isDark ? "border-green-400/30" : "border-green-600/30",
      hoverBg: isDark ? "hover:bg-green-400/15" : "hover:bg-green-600/15",
    },
    "Database": {
      color: isDark ? "text-pink-400" : "text-pink-600",
      bgColor: isDark ? "bg-pink-400/10" : "bg-pink-600/10",
      borderColor: isDark ? "border-pink-400/30" : "border-pink-600/30",
      hoverBg: isDark ? "hover:bg-pink-400/15" : "hover:bg-pink-600/15",
    },
    "Programming Languages": {
      color: isDark ? "text-orange-400" : "text-orange-600",
      bgColor: isDark ? "bg-orange-400/10" : "bg-orange-600/10",
      borderColor: isDark ? "border-orange-400/30" : "border-orange-600/30",
      hoverBg: isDark ? "hover:bg-orange-400/15" : "hover:bg-orange-600/15",
    }
  }), [isDark]);

  // Simple mount check
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSkillClick = (skill) => {
    const stats = getSkillStats(skill, projectsData, certificatesData);
    if (stats.projectCount > 0 || stats.certificateCount > 0) {
      setSelectedSkill({ skill, ...stats });
    }
  };

  // Skill Detail Modal Component
  const SkillDetailModal = () => {
    if (!selectedSkill || !mounted) return null;

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
              ? 'bg-gray-900 border-white/20' 
              : 'bg-white border-black/20'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b ${isDark ? 'border-white/20' : 'border-black/20'}`}>
              <div className="flex justify-between items-center">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {selectedSkill.skill}
                </h2>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-black'} transition-colors`}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex gap-4 mt-2 text-sm">
                <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Award size={16} />
                  {selectedSkill.certificateCount} Certificates
                </span>
                <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Briefcase size={16} />
                  {selectedSkill.projectCount} Projects
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Projects Section */}
              {selectedSkill.projects.length > 0 && (
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    <Briefcase size={20} />
                    Projects ({selectedSkill.projects.length})
                  </h3>
                  <div className="grid gap-4">
                    {selectedSkill.projects.map((project) => (
                      <div
                        key={project.id}
                        className={`p-4 rounded-lg border ${isDark 
                          ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                          : 'bg-black/5 border-black/10 hover:bg-black/10'
                        } transition-all duration-200 cursor-pointer hover:scale-[1.01]`}
                        onClick={() => window.open(`/projects#project-${project.id}`, '_blank')}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                              {project.name}
                            </h4>
                            <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {project.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.skills.slice(0, 4).map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 text-xs rounded-full ${isDark 
                                    ? 'bg-white/10 text-white' 
                                    : 'bg-black/10 text-black'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                              {project.skills.length > 4 && (
                                <span className={`px-2 py-1 text-xs rounded-full ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                  +{project.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                          <ExternalLink size={16} className={`ml-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Section */}
              {selectedSkill.certificates.length > 0 && (
                <div>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    <Award size={20} />
                    Certificates ({selectedSkill.certificates.length})
                  </h3>
                  <div className="grid gap-4">
                    {selectedSkill.certificates.map((certificate) => (
                      <div
                        key={certificate.id}
                        className={`p-4 rounded-lg border ${isDark 
                          ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                          : 'bg-black/5 border-black/10 hover:bg-black/10'
                        } transition-all duration-200 cursor-pointer hover:scale-[1.01]`}
                        onClick={() => window.open(certificate.verificationLink || '#', '_blank')}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                              {certificate.name}
                            </h4>
                            <div className="flex items-center gap-4 text-sm mb-3">
                              <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                <Building size={14} />
                                {certificate.issuingOrganization}
                              </span>
                              {certificate.issueDate && (
                                <span className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                  <Calendar size={14} />
                                  {new Date(certificate.issueDate).getFullYear()}
                                </span>
                              )}
                            </div>
                            {certificate.description && (
                              <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {certificate.description}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {certificate.skills.slice(0, 4).map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 text-xs rounded-full ${isDark 
                                    ? 'bg-white/10 text-white' 
                                    : 'bg-black/10 text-black'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                              {certificate.skills.length > 4 && (
                                <span className={`px-2 py-1 text-xs rounded-full ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                  +{certificate.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                          <ExternalLink size={16} className={`ml-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        </div>
                      </div>
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

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-8 w-8 border-b-2 mb-4 mx-auto ${isDark ? 'border-white' : 'border-gray-900'}`}></div>
          <p className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - same style as AchievementsPage */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Skills
            </h1>
            <p className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}>
              Click on any skill to view associated projects and certifications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => {
              const categoryTotals = getCategoryTotals(category, projectsData, certificatesData);
              const theme = categoryThemes[category];
              const IconComponent = categoryIcons[category] || Code2;
              
              return (
                <motion.div
                  key={category}
                  className={`relative p-4 rounded-2xl border ${theme.bgColor} ${theme.borderColor} ${isDark ? 'bg-gray-800/20' : 'bg-white/20'} flex flex-col hover:scale-[1.01] transition-transform duration-200`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (categoryIndex * 0.1), duration: 0.5 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-full ${theme.bgColor} ${theme.color}`}>
                      <IconComponent size={28} />
                    </div>
                    <h2 className={`text-xl font-bold ${theme.color}`}>
                      {category}
                    </h2>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2 mb-6 flex-1">
                    {skills.map((skill) => {
                      const stats = getSkillStats(skill, projectsData, certificatesData);
                      const hasData = stats.projectCount > 0 || stats.certificateCount > 0;
                      
                      return (
                        <div
                          key={skill}
                          className={`flex justify-between items-center py-1 px-3 rounded-lg transition-all duration-200 ${
                            hasData 
                              ? `cursor-pointer ${theme.hoverBg} hover:scale-[1.02]`
                              : 'cursor-default'
                          }`}
                          onClick={() => handleSkillClick(skill)}
                        >
                          <span className={`font-medium ${isDark ? 'text-white' : 'text-black'} ${hasData ? 'hover:underline' : ''}`}>
                            {skill}
                          </span>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Award size={12} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stats.certificateCount}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase size={12} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stats.projectCount}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Category Total */}
                  <div className={`pt-4 border-t ${isDark ? 'border-white/20' : 'border-black/20'} mt-auto`}>
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
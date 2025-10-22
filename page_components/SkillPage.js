'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Server,
  Monitor,
  Award,
  X,
  ExternalLink,
  Calendar,
  Building,
  Briefcase,
  TrendingUp
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
    "DevOPS and Tools": Cloud,
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            className={`w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-xl border shadow-2xl ${
              isDark 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-white border-gray-200'
            }`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`sticky top-0 z-10 p-6 border-b backdrop-blur-sm ${
              isDark 
                ? 'bg-gray-900/95 border-gray-800' 
                : 'bg-white/95 border-gray-200'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedSkill.skill}
                  </h2>
                  <div className="flex gap-4 text-sm">
                    <span className={`flex items-center gap-1.5 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Award size={16} />
                      {selectedSkill.certificateCount} Certificate{selectedSkill.certificateCount !== 1 ? 's' : ''}
                    </span>
                    <span className={`flex items-center gap-1.5 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Briefcase size={16} />
                      {selectedSkill.projectCount} Project{selectedSkill.projectCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                      : 'hover:bg-gray-100 text-gray-600 hover:text-black'
                  }`}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Projects Section */}
              {selectedSkill.projects.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Briefcase size={20} />
                    Projects ({selectedSkill.projects.length})
                  </h3>
                  <div className="space-y-3">
                    {selectedSkill.projects.map((project) => (
                      <div
                        key={project.id}
                        className={`group p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800' 
                            : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                        }`}
                        onClick={() => window.open(`/projects`, '_blank')}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1.5 group-hover:text-blue-500 transition-colors">
                              {project.name}
                            </h4>
                            <p className={`text-sm mb-3 line-clamp-2 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {project.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.skills.slice(0, 5).map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                                    isDark 
                                      ? 'bg-gray-700 text-gray-300' 
                                      : 'bg-white text-gray-700 border border-gray-200'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                              {project.skills.length > 5 && (
                                <span className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                                  isDark ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                  +{project.skills.length - 5}
                                </span>
                              )}
                            </div>
                          </div>
                          <ExternalLink 
                            size={18} 
                            className={`flex-shrink-0 transition-colors ${
                              isDark ? 'text-gray-600 group-hover:text-gray-400' : 'text-gray-400 group-hover:text-gray-600'
                            }`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Section */}
              {selectedSkill.certificates.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award size={20} />
                    Certificates ({selectedSkill.certificates.length})
                  </h3>
                  <div className="space-y-3">
                    {selectedSkill.certificates.map((certificate) => (
                      <div
                        key={certificate.id}
                        className={`group p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800' 
                            : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                        }`}
                        onClick={() => certificate.verificationLink && window.open(certificate.verificationLink, '_blank')}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1.5 group-hover:text-blue-500 transition-colors">
                              {certificate.name}
                            </h4>
                            <div className="flex items-center gap-3 text-xs mb-2">
                              <span className={`flex items-center gap-1 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                <Building size={12} />
                                {certificate.issuingOrganization}
                              </span>
                              {certificate.issueDate && (
                                <span className={`flex items-center gap-1 ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  <Calendar size={12} />
                                  {new Date(certificate.issueDate).getFullYear()}
                                </span>
                              )}
                            </div>
                            {certificate.description && (
                              <p className={`text-sm mb-3 line-clamp-2 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {certificate.description}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-1.5">
                              {certificate.skills.slice(0, 5).map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                                    isDark 
                                      ? 'bg-gray-700 text-gray-300' 
                                      : 'bg-white text-gray-700 border border-gray-200'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                              {certificate.skills.length > 5 && (
                                <span className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                                  isDark ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                  +{certificate.skills.length - 5}
                                </span>
                              )}
                            </div>
                          </div>
                          {certificate.verificationLink && (
                            <ExternalLink 
                              size={18} 
                              className={`flex-shrink-0 transition-colors ${
                                isDark ? 'text-gray-600 group-hover:text-gray-400' : 'text-gray-400 group-hover:text-gray-600'
                              }`} 
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Data Message */}
              {selectedSkill.projects.length === 0 && selectedSkill.certificates.length === 0 && (
                <div className="text-center py-12">
                  <p className={`text-base ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    No projects or certificates found for <span className="font-semibold">{selectedSkill.skill}</span>
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
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-8 w-8 border-b-2 mb-4 mx-auto ${
            isDark ? 'border-white' : 'border-black'
          }`}></div>
          <p className={isDark ? 'text-white' : 'text-black'}>Loading skills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Skills
            </h1>
            <p className={`text-base sm:text-lg md:text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}>
              Click on any skill to view related projects and certifications
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
                className={`rounded-2xl border p-4 transition-all duration-200 flex flex-col ${
                  isDark
                    ? 'bg-gray-800/30 border-gray-700/50'
                    : 'bg-white/50 border-gray-200/50'
                } hover:scale-[1.01]`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (categoryIndex * 0.1), duration: 0.5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`p-1.5 rounded-lg ${theme.bgColor}`}>
                    <IconComponent size={20} className={theme.color} />
                  </div>
                  <h2 className={`text-base font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {category}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-1 mb-3 flex-1">
                  {skills.map((skill) => {
                    const stats = getSkillStats(skill, projectsData, certificatesData);
                    const hasData = stats.projectCount > 0 || stats.certificateCount > 0;
                    
                    return (
                      <div
                        key={skill}
                        className={`flex justify-between items-center py-1.5 px-2.5 rounded-lg transition-all duration-200 ${
                          hasData 
                            ? `cursor-pointer ${isDark ? 'hover:bg-gray-700/30' : 'hover:bg-gray-200/50'}`
                            : 'cursor-default'
                        }`}
                        onClick={() => hasData && handleSkillClick(skill)}
                      >
                        <span className={`text-sm font-medium ${
                          hasData 
                            ? `${isDark ? 'text-white' : 'text-black'} hover:underline`
                            : `${isDark ? 'text-gray-500' : 'text-gray-400'}`
                        }`}>
                          {skill}
                        </span>
                        {hasData && (
                          <div className="flex items-center gap-2.5 text-xs">
                            <div className={`flex items-center gap-0.5 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <Award size={11} />
                              <span>{stats.certificateCount}</span>
                            </div>
                            <div className={`flex items-center gap-0.5 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <Briefcase size={11} />
                              <span>{stats.projectCount}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Category Total */}
                <div className={`pt-3 border-t ${
                  isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                } mt-auto`}>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1">
                      <Award size={12} className={theme.color} />
                      <span className={`font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {categoryTotals.totalCertificates} Cert{categoryTotals.totalCertificates !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={12} className={theme.color} />
                      <span className={`font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {categoryTotals.totalProjects} Project{categoryTotals.totalProjects !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <SkillDetailModal />
    </div>
  );
};

export default SkillsPage;
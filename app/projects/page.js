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
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Filter,
  X,
  ArrowLeft,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Eye,
  Lightbulb,
  Target,
  Trophy,
  ChevronDown
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { projectsData } from '@/data/projectsData';
import { skillCategories } from '@/data/skillsData';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const sectionRef = useRef(null);

  // Get all unique categories and skills
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  const allSkills = ['All', ...new Set(projectsData.flatMap(project => project.skills))].sort();

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
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Check for project ID in URL hash and scroll to it
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const projectId = parseInt(hash.replace('#project-', ''));
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        setTimeout(() => {
          const element = document.getElementById(`project-${projectId}`);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Optionally open the project detail modal
          setSelectedProject(project);
        }, 500);
      }
    }

    return () => observer.disconnect();
  }, []);

  // Filter projects based on category and skill
  useEffect(() => {
    let filtered = projectsData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (selectedSkill !== 'All') {
      filtered = filtered.filter(project => 
        project.skills.some(skill => skill.toLowerCase() === selectedSkill.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedSkill]);

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

  // Project Detail Modal Component
  const ProjectDetailModal = () => {
    if (!selectedProject) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className={`w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border ${isDark 
              ? 'bg-gray-900/95 border-gray-700/50' 
              : 'bg-white/95 border-gray-200/50'
            } backdrop-blur-md`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProject.name}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${isDark 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-blue-100 text-blue-700'
                    }`}>
                      {selectedProject.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDark 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-green-100 text-green-700'
                    }`}>
                      {selectedProject.status}
                    </span>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${isDark 
                      ? 'bg-purple-500/20 text-purple-300' 
                      : 'bg-purple-100 text-purple-700'
                    }`}>
                      <Calendar size={14} />
                      {selectedProject.duration}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700/50 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Project Image */}
              <div className="mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {selectedProject.image ? (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Eye size={48} className="text-gray-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Code2 size={20} />
                      Description
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Motivation */}
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Lightbulb size={20} />
                      Motivation
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.motivation}
                    </p>
                  </div>

                  {/* Result */}
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Trophy size={20} />
                      Result
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.result}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Server size={20} />
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${isDark 
                            ? 'bg-gray-700/50 text-gray-200' 
                            : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <Tag size={20} />
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${isDark 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <ExternalLink size={20} />
                      Links
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.githubLink && (
                        <motion.a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 p-4 rounded-xl border ${isDark 
                            ? 'border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50' 
                            : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                          } transition-all duration-200 group`}
                          whileHover={{ scale: 1.01, x: 2 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'} group-hover:bg-gray-600 transition-colors`}>
                            <Github size={20} />
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              Source Code
                            </div>
                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              Explore the code on GitHub
                            </div>
                          </div>
                          <ExternalLink size={16} className={`${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors`} />
                        </motion.a>
                      )}
                      {selectedProject.liveLink && (
                        <motion.a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 p-4 rounded-xl border ${isDark 
                            ? 'border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50' 
                            : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                          } transition-all duration-200 group`}
                          whileHover={{ scale: 1.01, x: 2 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className={`p-2 rounded-lg ${isDark ? 'bg-green-900/50' : 'bg-green-100'} group-hover:bg-green-600 transition-colors`}>
                            <ExternalLink size={20} className="text-green-500 group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              Live Demo
                            </div>
                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              See the project in action
                            </div>
                          </div>
                          <ExternalLink size={16} className={`${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-green-500 transition-colors`} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className={`w-full h-full ${isDark ? 'bg-grid-white/[0.03]' : 'bg-grid-black/[0.03]'}`}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute ${isDark ? 'text-gray-700' : 'text-gray-300'} opacity-20`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.2,
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
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Projects
            </h1>
            
            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
            >
              A showcase of my work, passion projects, and technical achievements
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-4 py-3 pr-10 rounded-xl border ${isDark 
                    ? 'bg-gray-800/80 border-gray-700/50 text-gray-200 hover:bg-gray-700/80 focus:bg-gray-700/80 focus:border-gray-600/50' 
                    : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white focus:bg-white focus:border-gray-300'
                  } appearance-none cursor-pointer min-w-[140px] backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-blue-500/30' : 'focus:ring-blue-500/20'}`}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>

              {/* Skill Filter */}
              <div className="relative">
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className={`px-4 py-3 pr-10 rounded-xl border ${isDark 
                    ? 'bg-gray-800/80 border-gray-700/50 text-gray-200 hover:bg-gray-700/80 focus:bg-gray-700/80 focus:border-gray-600/50' 
                    : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white focus:bg-white focus:border-gray-300'
                  } appearance-none cursor-pointer min-w-[140px] backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-blue-500/30' : 'focus:ring-blue-500/20'}`}
                >
                  {allSkills.slice(0, 10).map(skill => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
            </div>

            <div className="text-center">
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Showing {filteredProjects.length} of {projectsData.length} projects
              </span>
            </div>
          </motion.div>

          {/* Projects List - Horizontal Cards */}
          <motion.div
            variants={containerVariants}
            className="space-y-16"
          >
            {filteredProjects.map((project, index) => {
              const isReversed = index % 2 === 1;
              
              return (
                <motion.div
                  key={project.id}
                  id={`project-${project.id}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.6 + (index * 0.2) }}
                  className={`relative rounded-2xl border backdrop-blur-sm ${isDark 
                    ? 'bg-gray-800/10 border-gray-700/30' 
                    : 'bg-white/30 border-gray-200/40'
                  } overflow-hidden group`}
                  whileHover={{
                    scale: 1.005,
                    y: -1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${isReversed ? 'lg:col-start-2' : ''}`}>
                      {/* Project Category & Status */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark 
                          ? 'bg-blue-500/20 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${isDark 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-green-100 text-green-700'
                        }`}>
                          {project.status}
                        </span>
                        <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${isDark 
                          ? 'bg-purple-500/20 text-purple-300' 
                          : 'bg-purple-100 text-purple-700'
                        }`}>
                          <Calendar size={14} />
                          {project.duration}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.name}
                      </h3>
                      
                      {/* Project Description */}
                      <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.fullDescription}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-sm rounded-full ${isDark 
                              ? 'bg-gray-700/50 text-gray-200' 
                              : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.liveLink && (
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium ${isDark
                              ? 'bg-green-600/80 hover:bg-green-600 text-white'
                              : 'bg-green-600 hover:bg-green-700 text-white'
                            } transition-all duration-200 group`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Live Link</span>
                            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                          </motion.a>
                        )}
                        
                        {project.githubLink && (
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium border ${isDark
                              ? 'border-gray-600/50 text-gray-200 hover:bg-gray-700/50 hover:border-gray-500/50'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                            } transition-all duration-200 group`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </motion.a>
                        )}

                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium ${isDark
                            ? 'bg-gray-700/50 text-gray-200 hover:bg-gray-600/50'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          } transition-all duration-200 group`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Eye size={16} />
                          <span>Details</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className={`relative aspect-square lg:aspect-auto ${isReversed ? 'lg:col-start-1' : ''}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Code2 size={48} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      {/* Overlay on hover */}
                      <div className={`absolute inset-0 ${isDark ? 'bg-black/10' : 'bg-white/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <Code2 size={64} className={`mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                No projects found
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your filters to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal />
    </div>
  );
};

export default ProjectsPage;
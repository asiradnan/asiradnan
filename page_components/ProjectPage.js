'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Database,
  Brain,
  Server,
  Monitor,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  X,
  Play,
  Eye,
  Lightbulb,
  Trophy,
  LayoutGrid,
  Layers,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { projectsData } from '@/data/projectsData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'All': return LayoutGrid;
    case 'Full Stack': return Layers;
    case 'Android': return Smartphone;
    case 'Front End': return Monitor;
    case 'Backend': return Database;
    default: return Code2;
  }
};

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mounted, setMounted] = useState(false);

  // Get all unique categories
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  // Simple mount check
  useEffect(() => {
    setMounted(true);

    // Check for project ID in URL hash and scroll to it
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const projectId = parseInt(hash.replace('#project-', ''));
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        setTimeout(() => {
          const element = document.getElementById(`project-${projectId}`);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setSelectedProject(project);
        }, 500);
      }
    }
  }, []);

  // Filter projects based on category
  useEffect(() => {
    let filtered = projectsData;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  // Project Detail Modal Component
  const ProjectDetailModal = () => {
    if (!selectedProject || !mounted) return null;

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
                    {selectedProject.fullDescription
                      .trim()
                      .split('\n')
                      .map((line, index) => (
                        <p key={index} className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {line}
                        </p>
                      ))}
                  </div>

                  {/* Motivation */}
                  {selectedProject.motivation && (
                    <div>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <Lightbulb size={20} />
                        Motivation
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedProject.motivation}
                      </p>
                    </div>
                  )}

                  {/* Result */}
                  {selectedProject.result && (
                    <div>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <Trophy size={20} />
                        Result
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedProject.result}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
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
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 p-4 rounded-xl border ${isDark
                            ? 'border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50'
                            : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            } transition-all duration-200 hover:scale-[1.01]`}
                        >
                          <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
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
                          <ExternalLink size={16} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        </a>
                      )}
                      {selectedProject.liveLink && (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 p-4 rounded-xl border ${isDark
                            ? 'border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50'
                            : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            } transition-all duration-200 hover:scale-[1.01]`}
                        >
                          <div className={`p-2 rounded-lg ${isDark ? 'bg-green-900/50' : 'bg-green-100'}`}>
                            <ExternalLink size={20} className="text-green-500" />
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              Live Demo
                            </div>
                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              See the project in action
                            </div>
                          </div>
                          <ExternalLink size={16} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        </a>
                      )}
                      {selectedProject.playStoreLink && (
                        <a
                          href={selectedProject.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 p-4 rounded-xl border ${isDark
                            ? 'border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50'
                            : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            } transition-all duration-200 hover:scale-[1.01]`}
                        >
                          <div className={`p-2 rounded-lg ${isDark ? 'bg-green-900/50' : 'bg-green-100'}`}>
                            <Play size={20} className="text-green-500" />
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              Play Store
                            </div>
                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              Download from Google Play
                            </div>
                          </div>
                          <ExternalLink size={16} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                        </a>
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

  if (!mounted) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-8 w-8 border-b-2 mb-4 mx-auto ${isDark ? 'border-white' : 'border-gray-900'}`}></div>
          <p className={`${isDark ? 'text-white' : 'text-gray-900'}`}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </h1>
          <p className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}>
            A showcase of my work, passion projects, and technical achievements
          </p>
        </motion.div>

        {/* Filters - Visual Tabs */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              const isSelected = selectedCategory === category;
              const count = category === 'All' 
                  ? projectsData.length 
                  : projectsData.filter(p => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isSelected
                      ? isDark ? 'text-black' : 'text-white'
                      : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {/* Background Animation */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className={`absolute inset-0 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Content (z-10 to stay above background) */}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {category}
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                      isSelected 
                        ? isDark ? 'bg-black/10' : 'bg-white/20'
                        : isDark ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative group rounded-2xl border flex flex-col h-full ${isDark
                  ? 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50'
                  : 'bg-white/50 border-gray-200/50 hover:bg-white hover:border-gray-300/80'
                  } overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Section */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-b dark:border-gray-700/50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Code2 size={48} className="text-gray-400" />
                    </div>
                  )}
                  {/* Category Badge overlaying image */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${isDark
                      ? 'bg-black/60 text-white border border-white/10'
                      : 'bg-white/80 text-black border border-black/10'
                      }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.name}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.shortDescription}
                  </p>

                  {/* Skills (limit to 3 for grid layout) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md ${isDark
                          ? 'bg-gray-700/50 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Footer Stats / Time */}
                  <div className={`flex items-center justify-between pt-4 mt-auto border-t ${isDark ? 'border-gray-700/50' : 'border-gray-100'}`}>
                     <span className={`flex items-center gap-1.5 text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <Calendar size={14} />
                        {project.duration}
                      </span>
                      <span className={`text-xs font-medium flex items-center gap-1 group-hover:text-blue-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        View Details <ChevronRight className="w-3 h-3" />
                      </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Code2 size={64} className={`mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              No projects found
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Try adjusting your filters to see more projects.
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal />
    </div>
  );
};

export default ProjectsPage;
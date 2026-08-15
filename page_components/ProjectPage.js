'use client'
import React, { useState, useEffect, useMemo } from 'react';
import {
  Code2, Database, Monitor, ExternalLink, Github, Calendar, X,
  Play, Lightbulb, Trophy, LayoutGrid, Layers, Smartphone, ChevronRight
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

const ProjectDetailModal = ({ selectedProject, setSelectedProject, isDark }) => {
  if (!selectedProject) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border ${isDark
          ? 'bg-gray-900 border-gray-700/50'
          : 'bg-white border-gray-200/50'
          } shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 flex justify-between items-center p-6 border-b ${isDark ? 'bg-gray-900/90 border-gray-700/50' : 'bg-white/90 border-gray-200/50'} backdrop-blur-md`}>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {selectedProject.name}
          </h2>
          <button
            onClick={() => setSelectedProject(null)}
            className={`p-2 rounded-full ${isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-600'} transition-colors`}
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {selectedProject.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Code2 size={20} /> Description
                </h3>
                <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedProject.fullDescription.trim().split('\n').map((line, i) => (
                    <p key={i} className="leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>

              {selectedProject.motivation && (
                <div>
                  <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <Lightbulb size={20} /> Motivation
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedProject.motivation}
                  </p>
                </div>
              )}

              {selectedProject.result && (
                <div>
                  <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <Trophy size={20} /> Result
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedProject.result}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className={`p-5 rounded-xl border ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Overview</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Category</span>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProject.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Timeline</span>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProject.duration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill) => (
                    <span key={skill} className={`px-3 py-1.5 rounded-md text-xs font-semibold ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {selectedProject.githubLink && (
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 w-full p-3 rounded-xl font-semibold transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                    <Github size={18} /> Source Code
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full p-3 rounded-xl font-semibold transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {selectedProject.playStoreLink && (
                  <a href={selectedProject.playStoreLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full p-3 rounded-xl font-semibold transition-colors bg-green-600 hover:bg-green-700 text-white">
                    <Play size={18} /> Play Store
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projectsData.map(project => project.category))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const projectId = parseInt(hash.replace('#project-', ''));
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        setTimeout(() => {
          document.getElementById(`project-${projectId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setSelectedProject(project);
        }, 500);
      }
    }
  }, []);

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Projects</h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my work, passion projects, and technical achievements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${isSelected
                    ? isDark
                      ? 'bg-white text-black shadow-lg scale-105'
                      : 'bg-gray-900 text-white shadow-lg scale-105'
                    : isDark
                      ? 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                <Icon size={16} />
                {category}
              </button>
            );
          })}
        </div>

        {/*
          No motion library here at all. Filtering is a plain array filter driving a plain
          .map(). Every card keeps the same DOM node/key (project.id) whenever it stays
          visible across a filter switch — React just toggles the `hidden` attribute
          instead of unmounting, so images never get torn down and re-decoded. A CSS
          transition on opacity gives a soft fade without any JS-driven animation math.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const visible = selectedCategory === 'All' || project.category === selectedCategory;
            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                hidden={!visible}
                onClick={() => setSelectedProject(project)}
                className={`group flex flex-col rounded-2xl border overflow-hidden cursor-pointer transition-opacity duration-150 ${isDark
                    ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-800">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Code2 size={48} className="text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-black/75 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className={`text-sm leading-relaxed mb-6 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.shortDescription}
                  </p>
                  <div className={`flex items-center justify-between pt-4 mt-auto border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                    <span className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      <Calendar size={14} />
                      {project.duration}
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1 text-blue-500">
                      View Details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold">No projects found</h3>
          </div>
        )}
      </div>

      <ProjectDetailModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} isDark={isDark} />
    </div>
  );
};

export default ProjectsPage;
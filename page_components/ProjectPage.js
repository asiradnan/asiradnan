'use client'
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

const ProjectsPage = () => {
  const { isDark } = useTheme();
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const visible = selectedCategory === 'All' || project.category === selectedCategory;
            return (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                id={`project-${project.id}`}
                hidden={!visible}
                className={`group flex flex-col rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${isDark
                    ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:bg-gray-800/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50'
                  }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-800">
                  {project.image ? (
                    <Image src={project.image} alt={project.name} fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                    <span className="text-sm font-semibold flex items-center gap-1 text-blue-500 group-hover:text-blue-400 transition-colors">
                      View Details <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold">No projects found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2, Lightbulb, Trophy, ExternalLink, Github, Play, ArrowLeft, Calendar
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';

const ProjectDetailPage = ({ project }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation */}
        <Link 
          href="/projects" 
          className={`inline-flex items-center gap-2 mb-10 font-semibold transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            {project.name}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.shortDescription}
          </p>
        </div>

        {/* Main Image */}
        {project.image && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-16 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-lg">
            <Image src={project.image} alt={project.name} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 1024px" />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left Col) */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Code2 size={28} className="text-blue-500" /> About the Project
              </h3>
              <div className={`space-y-5 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.fullDescription.trim().split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {project.motivation && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Lightbulb size={28} className="text-yellow-500" /> Motivation
                </h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.motivation}
                </p>
              </div>
            )}

            {project.result && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Trophy size={28} className="text-green-500" /> Result & Impact
                </h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.result}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar (Right Col) */}
          <div className="space-y-10">
            {/* Overview Card */}
            <div>
              <h3 className={`text-sm uppercase tracking-wider font-bold mb-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Project Info</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200 dark:border-gray-800">
                  <span className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Category</span>
                  <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.category}</span>
                </div>
                <div className="pb-4 border-b border-gray-200 dark:border-gray-800">
                  <span className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Timeline</span>
                  <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.duration}</span>
                </div>
                {project.status && (
                  <div className="pb-4 border-b border-gray-200 dark:border-gray-800">
                    <span className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Status</span>
                    <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.status}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className={`text-sm uppercase tracking-wider font-bold mb-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Technologies</h3>
              <div className="flex flex-wrap gap-2.5">
                {project.skills.map((skill) => (
                  <span key={skill} className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-sm ${isDark ? 'bg-gray-800 text-gray-200 border border-gray-700' : 'bg-gray-100 text-gray-800 border border-gray-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4 pt-2">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-3 w-full p-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                  <Github size={22} /> View Source Code
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full p-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink size={22} /> Visit Live Site
                </a>
              )}
              {project.playStoreLink && (
                <a href={project.playStoreLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full p-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-green-600 hover:bg-green-700 text-white">
                  <Play size={22} /> Get on Play Store
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;

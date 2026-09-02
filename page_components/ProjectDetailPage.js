'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2, Lightbulb, Trophy, ExternalLink, Github, Play, ArrowLeft, Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeContext';

const PlayStoreIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z" fill="#4285F4" />
    <path d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" fill="#34A853" />
    <path d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" fill="#EA4335" />
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z" fill="#FBBC04" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  })
};

const renderDescription = (text, isDark) => {
  const trimmed = text.trim();
  const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  const hasBullets = lines.some(l => l.startsWith('- '));

  if (hasBullets) {
    return (
      <ul className={`space-y-3 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {lines.map((line, i) => {
          const content = line.startsWith('- ') ? line.slice(2) : line;
          return (
            <li key={i} className="flex items-start gap-3">
              <span className={`mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-500'}`} />
              <span>{content}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={`space-y-5 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
};

const ProjectDetailPage = ({ project }) => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">

        {/* Navigation */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 mb-10 font-semibold transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              {project.name}
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.shortDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 ${isDark ? 'bg-white hover:bg-gray-200 text-black shadow-lg shadow-white/5' : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md'}`}>
                <Github size={18} /> Source Code
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 ${isDark ? 'bg-white hover:bg-gray-200 text-black shadow-lg shadow-white/5' : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md'}`}>
                <ExternalLink size={18} /> Live Site
              </a>
            )}
            {project.playStoreLink && (
              <a href={project.playStoreLink} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 ${isDark ? 'bg-white hover:bg-gray-200 text-black shadow-lg shadow-white/5' : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md'}`}>
                <PlayStoreIcon className="w-[18px] h-[18px]" /> Play Store
              </a>
            )}
          </div>
        </motion.div>

        {/* Main Image */}
        {project.image && (
          <motion.div
            className={`relative aspect-video w-full rounded-2xl overflow-hidden mb-16 border shadow-lg ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Image src={project.image} alt={`Screenshot of ${project.name} — ${project.category}`} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 1024px" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">

          {/* Main Content (Left Col) */}
          <div className="md:col-span-2 space-y-12">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Code2 size={28} className="text-blue-500" /> About the Project
              </h2>
              {renderDescription(project.fullDescription, isDark)}
            </motion.div>

            {project.motivation && (
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Lightbulb size={28} className="text-yellow-500" /> Motivation
                </h2>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.motivation}
                </p>
              </motion.div>
            )}

            {project.result && (
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
                <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Trophy size={28} className="text-green-500" /> Result & Impact
                </h2>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.result}
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar (Right Col) */}
          <div className="space-y-10">
            {/* Overview Card */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <h2 className={`text-sm uppercase tracking-wider font-bold mb-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Project Info</h2>
              <div className="space-y-4">
                <div className={`pb-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <span className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Category</span>
                  <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.category}</span>
                </div>
                <div className={`pb-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <span className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Timeline</span>
                  <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.duration}</span>
                </div>
                {project.status && (
                  <div className={`pb-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                    <span className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Status</span>
                    <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.status}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
              <h2 className={`text-sm uppercase tracking-wider font-bold mb-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Technologies</h2>
              <div className="flex flex-wrap gap-2.5">
                {project.skills.map((skill) => (
                  <span key={skill} className={`px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm ${isDark ? 'bg-gray-800 text-gray-200 border border-gray-700' : 'bg-gray-100 text-gray-800 border border-gray-200'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;

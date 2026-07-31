import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { ExternalLink, Layers, Sparkles, ArrowRight, X, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Full Stack' | 'Backend & Cloud' | 'AI & Automation'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Backend & Cloud', 'AI & Automation'] as const;

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={`py-24 relative ${selectedProject ? 'z-[100]' : 'z-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono"
          >
            <Layers className="w-3.5 h-3.5" /> FEATURED SOFTWARE PROJECTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Production-Grade Systems & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Full Stack Applications
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-slate-400 font-sans"
          >
            Real software built to address complex scalability, microservices, telecom queuing, and AI document retrieval challenges.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0b0b0f] border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 text-xs font-mono font-medium rounded-xl transition-all duration-200 ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <SpotlightCard className="group h-full flex flex-col justify-between p-0 overflow-hidden hover:border-cyan-500/40">
                  <div>
                    {/* Image Banner */}
                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/40 to-transparent" />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-semibold backdrop-blur-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-cyan-400" /> FEATURED
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-slate-300 text-[10px] font-mono backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-cyan-400 font-mono mt-1 font-medium">{project.subtitle}</p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Metric Banner */}
                      {project.metrics && (
                        <div className="px-3 py-2 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center justify-between">
                          <span>Performance Metric:</span>
                          <span className="font-bold text-white">{project.metrics}</span>
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300 text-[11px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-md bg-white/[0.04] text-slate-500 text-[11px] font-mono">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons Footer */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Demo
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 text-xs font-medium transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> Code
                      </a>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-all"
                    >
                      <span>Architecture Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study / Architecture Breakdown Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e14] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-6 sm:p-8 space-y-6 z-[101] custom-scrollbar my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Details */}
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  {selectedProject.category} • ARCHITECTURE CASE STUDY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans pt-1">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-cyan-400 font-mono">{selectedProject.subtitle}</p>
              </div>

              {/* Main Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {selectedProject.longDescription}
              </p>

              {/* Architecture & Role Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> ARCHITECTURE PATTERN
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedProject.architecture}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400" /> KEY ENGINEERING CHALLENGE
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedProject.challenges}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Implementation Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" /> Open Live Application
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium hover:bg-white/10"
                >
                  <GithubIcon className="w-4 h-4" /> View GitHub Repository
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

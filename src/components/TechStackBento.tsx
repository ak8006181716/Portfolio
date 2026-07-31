import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { Cpu, Server, Database, Cloud, Code, Sparkles, Layers, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, TECH_GRID } from '../data/portfolioData';

export const TechStackBento: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    if (title.includes('Frontend')) return Code;
    if (title.includes('Backend')) return Server;
    if (title.includes('Databases')) return Database;
    return Cloud;
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#07070a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono"
          >
            <Cpu className="w-3.5 h-3.5" /> TECHNICAL STACK & PROFICIENCY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Core Skills & Engineering <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Toolbox
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-slate-400 font-sans"
          >
            Grouped by architectural domain. No arbitrary progress percentages — just genuine engineering capability.
          </motion.p>
        </div>

        {/* Grouped Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, idx) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-sans">{category.title}</h3>
                        <p className="text-xs text-slate-400 font-sans mt-0.5">{category.description}</p>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white font-sans">{skill.name}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-500/30 font-medium">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Interactive Grid Banner */}
        <div className="p-8 rounded-3xl bg-[#09090d] border border-white/10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" /> Interactive Tech Ecosystem Grid
              </h3>
              <p className="text-xs text-slate-400">
                Hover over technologies to reveal category telemetry & active status
              </p>
            </div>
            <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              16 Core Technologies
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TECH_GRID.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 text-center space-y-1.5 cursor-pointer group"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mx-auto transition-transform group-hover:scale-125"
                  style={{ backgroundColor: tech.color }}
                />
                <div className="text-xs font-bold text-slate-200 group-hover:text-white font-sans">
                  {tech.name}
                </div>
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

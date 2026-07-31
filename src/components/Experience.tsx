import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { Briefcase, CheckCircle2, ChevronRight, Cpu, Layers, Sparkles, Terminal, Trophy } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="py-24 relative z-10 bg-[#07070a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono"
          >
            <Trophy className="w-3.5 h-3.5" /> MEASURABLE ENGINEERING IMPACT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Engineering Experience & <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-slate-400 font-sans"
          >
            A track record of shipping scalable software, refactoring latency bottlenecks, and building fault-tolerant backend architectures.
          </motion.p>
        </div>

        {/* Experience Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 space-y-4">
            {EXPERIENCE_TIMELINE.map((exp, idx) => {
              const isSelected = selectedExp === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedExp(idx)}
                  whileHover={{ scale: 1.01 }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                      : 'bg-[#0b0b0e] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{exp.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-3 font-sans">{exp.role}</h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">{exp.company}</p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{exp.type}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </motion.button>
              );
            })}

            {/* Quick Stat Highlight Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 via-blue-950/20 to-transparent border border-cyan-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" /> HIGHLIGHT METRICS
              </div>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <div className="text-2xl font-bold font-mono text-white">35% ↓</div>
                  <div className="text-[11px] text-slate-400">API Latency Drop</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-cyan-400">5,000+</div>
                  <div className="text-[11px] text-slate-400">Daily Telemetry Queue</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard className="p-8 space-y-8">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white font-sans">
                        {EXPERIENCE_TIMELINE[selectedExp].role}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium font-sans">
                        {EXPERIENCE_TIMELINE[selectedExp].company}
                      </p>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 text-xs font-mono">
                      {EXPERIENCE_TIMELINE[selectedExp].period}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {EXPERIENCE_TIMELINE[selectedExp].description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" /> Key Engineering Accomplishments
                    </h4>
                    <div className="space-y-3">
                      {EXPERIENCE_TIMELINE[selectedExp].achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      Technologies & Tools Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {EXPERIENCE_TIMELINE[selectedExp].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

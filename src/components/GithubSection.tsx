import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { ExternalLink, Code2, Terminal, Activity } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  const languages = [
    { name: 'TypeScript / JavaScript', percentage: 55, color: '#3178c6' },
    { name: 'Java (Spring Boot)', percentage: 22, color: '#b07219' },
    { name: 'Python (FastAPI)', percentage: 13, color: '#3572A5' },
    { name: 'HTML / CSS / SQL', percentage: 10, color: '#e34c26' },
  ];

  return (
    <section id="github" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono"
          >
            <GithubIcon className="w-3.5 h-3.5" /> OPEN SOURCE & CODE TELEMETRY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            GitHub Activity & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Source Code Insights
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-slate-400 font-sans"
          >
            Clean commit history, structured PR merges, modular component repositories, and active codebase iterations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* GitHub Stats Summary Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.05] text-white border border-white/10">
                      <GithubIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-sans">@ak8006181716</h3>
                      <p className="text-xs text-slate-400 font-mono">Full Stack Engineer • GitHub Contributor</p>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-cyan-300 transition-colors"
                  >
                    <span>Follow</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Stat Counters Grid */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                    <div className="text-2xl font-bold font-mono text-white">500+</div>
                    <div className="text-[11px] text-slate-400 mt-1">Total Commits</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                    <div className="text-2xl font-bold font-mono text-cyan-400">20+</div>
                    <div className="text-[11px] text-slate-400 mt-1">Public Repos</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                    <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                    <div className="text-[11px] text-slate-400 mt-1">Type Safety</div>
                  </div>
                </div>

                {/* Simulated Contribution Graph Heatmap */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-cyan-400" /> Contribution Activity Heatmap
                    </span>
                    <span className="text-slate-500">Less → More</span>
                  </div>

                  <div className="grid grid-cols-16 sm:grid-cols-24 gap-1.5 p-3 rounded-xl bg-black/40 border border-white/5">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const level = (i % 7 === 0 || i % 11 === 0 || i % 13 === 0) ? (i % 4 + 1) : (i % 3);
                      const colors = [
                        'bg-white/[0.03]',
                        'bg-cyan-950/60 border border-cyan-500/30',
                        'bg-cyan-600/60',
                        'bg-cyan-400/90 shadow-[0_0_8px_rgba(6,182,212,0.6)]'
                      ];
                      return (
                        <div
                          key={i}
                          className={`h-3 w-full rounded-sm transition-all hover:scale-125 ${colors[level]}`}
                          title={`Day ${i + 1}: Active commits`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Languages Breakdown & Pinned Repos (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Languages breakdown */}
            <SpotlightCard className="p-6 space-y-4">
              <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" /> Most Used Languages
              </h3>

              {/* Progress stacked bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-white/5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="h-full"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legends list */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-slate-300">{lang.name}</span>
                    <span className="text-slate-500 ml-auto">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Top Pinned Repos Box */}
            <SpotlightCard className="p-6 space-y-3">
              <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Pinned Repositories
              </h3>

              <div className="space-y-2 text-xs font-mono">
                {PROJECTS.slice(0, 3).map((p) => (
                  <a
                    key={p.id}
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex items-center justify-between text-cyan-300 font-bold">
                      <span>{p.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans line-clamp-1 mt-1">{p.subtitle}</p>
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

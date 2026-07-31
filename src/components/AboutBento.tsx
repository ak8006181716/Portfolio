import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { Cpu, Database, Server, Zap, MapPin, Code2, Globe, Shield, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono"
          >
            <Code2 className="w-3.5 h-3.5" /> ABOUT & ENGINEERING FOCUS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Engineering Systems Built for <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Speed, Scalability & Resilience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-slate-400 font-sans"
          >
            Beyond simple web apps: I solve backend latency bottlenecks, design clean distributed microservices, and build intuitive user experiences.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">

          {/* Bento Card 1: Core Bio & Philosophy (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    CORE PHILOSOPHY
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                    Backend Focused, Full Stack Capable
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                    {PERSONAL_INFO.bio}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm font-sans pt-2">
                    I thrive in building asynchronous queue workers, multi-tenant databases, vector search RAG systems, and decoupled Spring Boot microservices while ensuring frontends remain responsive and beautiful.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] mt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>High Concurrency Queues</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>JWT & Role Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Redis In-Memory Caching</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 2: Quick Experience Highlight (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between bg-gradient-to-b from-[#0f0f14] to-[#0b0b0e]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10">
                    STATISTICS
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-5xl font-black text-white font-mono tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    1+ Year
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mt-1">Full Stack Development</div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Delivering end-to-end production features, optimizing backend query bottlenecks, and maintaining high system uptime.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">APIs Optimized:</span>
                  <span className="text-cyan-400 font-bold">35% Faster</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[85%] rounded-full" />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 3: Technology Domains Stack (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-sans">Specialized Technologies</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {['MERN Stack', 'Node.js / Express', 'Next.js 14/15', 'FastAPI (Python)', 'Spring Boot (Java)', 'OpenAI RAG', 'Docker Containers', 'AWS EC2 / S3'].map((tech) => (
                    <div key={tech} className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300">
                      • {tech}
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 4: Database & Datastores (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-sans">Database Mastery</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Deep experience with relational (PostgreSQL, MySQL) and document (MongoDB) databases, alongside in-memory Redis caching for ultra-fast query execution.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">MongoDB</span>
                  <span className="px-2.5 py-1 rounded bg-red-950/40 border border-red-500/30 text-red-300">Redis Cache</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento Card 5: Location & Communication (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> India (IST)
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-sans">Global Engineering Mindset</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Comfortable collaborating asynchronously, conducting code reviews, writing detailed documentation, and shipping reliable code.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

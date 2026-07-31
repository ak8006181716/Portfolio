import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Radial Lights & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[140px] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">

            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Available for Full Stack & Backend Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
                Architecting <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
                  Scalable Software
                </span> <br />
                for Modern Systems.
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
                Full Stack Engineer specialized in high-concurrency Node.js & Spring Boot microservices, Next.js applications, PostgreSQL/MongoDB datastores, and cloud deployments.
              </p>
            </motion.div>

            {/* Micro Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2"
            >
              {['Node.js', 'Next.js', 'React', 'TypeScript', 'Spring Boot', 'FastAPI', 'Docker', 'AWS'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono font-medium hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Ankit_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={onCopyEmail}
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                  title="Copy Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Dark Glass Code Playground Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />

              {/* Code Glass Window */}
              <div className="relative rounded-2xl bg-[#09090d]/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden font-mono">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d12] border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-[11px] text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-cyan-400" /> developer.config.ts
                    </span>
                  </div>
                  <span className="text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2 overflow-x-auto">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">engineer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">'Ankit Kumar'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">'Full Stack & Backend Specialist'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">coreTech:</span> [<span className="text-amber-300">'Node.js'</span>, <span className="text-amber-300">'Next.js'</span>, <span className="text-amber-300">'Spring Boot'</span>, <span className="text-amber-300">'FastAPI'</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">databases:</span> [<span className="text-cyan-300">'PostgreSQL'</span>, <span className="text-cyan-300">'MongoDB'</span>, <span className="text-cyan-300">'Redis'</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">keyMetrics:</span> &#123;</p>
                  <p className="pl-8"><span className="text-slate-400">apiLatencyReduced:</span> <span className="text-cyan-400">'35%'</span>,</p>
                  <p className="pl-8"><span className="text-slate-400">bundlePerformance:</span> <span className="text-cyan-400">'+45%'</span>,</p>
                  <p className="pl-8"><span className="text-slate-400">dailyCallDispatches:</span> <span className="text-cyan-400">'5,000+'</span></p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">'READY_FOR_DEPLOYMENT'</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Footer Status bar inside terminal */}
                <div className="px-5 py-3 bg-[#0d0d12] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Unit & Integration Tests: PASS</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Latency: 12ms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

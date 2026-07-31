import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, TrendingUp, Zap, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Metrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return Briefcase;
      case 'TrendingUp': return TrendingUp;
      case 'Zap': return Zap;
      default: return Code2;
    }
  };

  return (
    <section id="metrics" className="py-20 relative z-10 border-y border-white/[0.08] bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-cyan-500/5 group-hover:text-cyan-500/10 transition-colors pointer-events-none">
                  <Icon className="w-24 h-24" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-4xl font-extrabold font-mono text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                      {item.value}
                    </div>
                    <div className="text-sm font-bold text-cyan-400 font-sans mt-1">
                      {item.label}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Briefcase, Code, Cpu, Mail, FileText, ArrowRight, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PROJECTS, PERSONAL_INFO } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onCopyEmail }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigationItems = [
    { id: 'about', label: 'Go to About Section', icon: Briefcase, category: 'Navigation', action: () => scrollTo('about') },
    { id: 'experience', label: 'Go to Experience & Metrics', icon: Cpu, category: 'Navigation', action: () => scrollTo('experience') },
    { id: 'projects', label: 'Go to Projects Showcase', icon: Code, category: 'Navigation', action: () => scrollTo('projects') },
    { id: 'skills', label: 'Go to Tech Stack & Skills', icon: Cpu, category: 'Navigation', action: () => scrollTo('skills') },
    { id: 'github', label: 'Go to GitHub Insights', icon: GithubIcon, category: 'Navigation', action: () => scrollTo('github') },
    { id: 'contact', label: 'Go to Contact Form', icon: Mail, category: 'Navigation', action: () => scrollTo('contact') },
    { id: 'email', label: 'Copy Email Address', icon: Mail, category: 'Actions', action: () => { onCopyEmail(); onClose(); } },
    { id: 'resume', label: 'Download Resume (PDF)', icon: FileText, category: 'Actions', action: () => { window.open('/Ankit_Kumar_Resume.pdf', '_blank'); onClose(); } },
    { id: 'github-profile', label: 'Open GitHub Profile', icon: GithubIcon, category: 'Social', action: () => { window.open(PERSONAL_INFO.github, '_blank'); onClose(); } },
    { id: 'linkedin-profile', label: 'Open LinkedIn Profile', icon: LinkedinIcon, category: 'Social', action: () => { window.open(PERSONAL_INFO.linkedin, '_blank'); onClose(); } }
  ];

  const projectItems = PROJECTS.map(p => ({
    id: `project-${p.id}`,
    label: `Project: ${p.title}`,
    icon: Code,
    category: 'Projects',
    action: () => {
      scrollTo('projects');
      onClose();
    }
  }));

  const allItems = [...navigationItems, ...projectItems];

  const filteredItems = allItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id: string) => {
    onClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0e0e12] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-50"
          >
            {/* Command Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, search projects, or jump to section..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-sans"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command Items List */}
            <div className="max-h-96 overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500">
                  No matching results found for "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white border border-cyan-500/20'
                          : 'text-slate-300 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-slate-200">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight className="w-4 h-4 text-cyan-400" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Shortcut Telemetry */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#09090c] border-t border-white/5 text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">↑↓</kbd> navigate</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">↵</kbd> select</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">esc</kbd> close</span>
              </div>
              <div className="flex items-center gap-1 text-cyan-400 font-semibold">
                <Command className="w-3 h-3" /> Raycast Palette
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBento } from './components/AboutBento';
import { Experience } from './components/Experience';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStackBento } from './components/TechStackBento';
import { Metrics } from './components/Metrics';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/ui/CursorGlow';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CommandPalette } from './components/ui/CommandPalette';
import { Toast } from './components/ui/Toast';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    triggerToast(`Email copied: ${PERSONAL_INFO.email}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500/30 selection:text-white relative font-sans">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Mouse Spotlight Cursor Glow */}
      <CursorGlow />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Navigation Header */}
      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <AboutBento />
        <Metrics />
        <Experience />
        <ProjectsShowcase />
        <TechStackBento />
        <GithubSection />
        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;

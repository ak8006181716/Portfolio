export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Backend & Cloud' | 'AI & Automation';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string;
  architecture: string;
  role: string;
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Achievement {
  value: string;
  label: string;
  description: string;
  icon: string;
}

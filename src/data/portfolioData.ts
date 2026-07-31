import { Project, SkillCategory, ExperienceItem, Achievement } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ankit Kumar',
  title: 'Full Stack Engineer & Distributed Systems Specialist',
  tagline: 'Architecting high-concurrency backends, scalable cloud microservices, and modern web applications with cutting-edge AI integrations.',
  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'ankitk8006@gmail.com',
  phone: '+91 8006181716',
  github: 'https://github.com/ak8006181716',
  linkedin: 'https://www.linkedin.com/in/ankitkumar02',
  twitter: 'https://x.com/Ankit8006Kumar',
  instagram: 'https://www.instagram.com/i_am_ankitkumar89',
  availability: 'Open for Full Stack & Backend Engineering Opportunities',
  bio: 'I am a results-oriented Full Stack Engineer with 1+ years of experience engineering high-performance web applications and backend microservices. Specialized in Node.js, Next.js, Spring Boot, FastAPI, Docker, AWS, and PostgreSQL/MongoDB databases. Passionate about solving complex backend bottleneck challenges, reducing API latencies by up to 35%, and building AI-augmented software solutions.'
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    value: '1+ Year',
    label: 'Production Experience',
    description: 'Building high-reliability web apps & distributed services',
    icon: 'Briefcase'
  },
  {
    value: '45%',
    label: 'Performance Gain',
    description: 'Optimized frontend bundle sizes & backend query execution',
    icon: 'TrendingUp'
  },
  {
    value: '35%',
    label: 'API Latency Reduction',
    description: 'Refactored backend microservices and implemented Redis caching',
    icon: 'Zap'
  },
  {
    value: '20+',
    label: 'Features Shipped',
    description: 'End-to-end full stack features delivered across production applications',
    icon: 'Code2'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-auto-dialer',
    title: 'Smart Auto Dialer',
    subtitle: 'Automated Telecommunication & Outbound Call Scheduling Platform',
    category: 'Backend & Cloud',
    description: 'High-throughput automated calling system with real-time queue management, webhook telemetry, call logging, and interactive agent dashboards.',
    longDescription: 'Engineered a robust telecommunication service designed for high-concurrency outbound call automation. Built asynchronous queue pipelines with Redis and Node.js to manage thousands of dispatch calls efficiently while maintaining real-time call telemetry via WebSockets.',
    image: '/projects/smart_auto_dialer.png',
    technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Twilio Webhooks', 'React', 'Docker'],
    features: [
      'Asynchronous call queuing with Redis BullMQ',
      'Real-time WebSocket telemetry feed for call status updates',
      'Intelligent agent routing and automated retry policy on line drop',
      'Exportable analytics dashboard for call durations and success rates'
    ],
    challenges: 'Handling concurrent webhook callbacks from telecom providers without triggering database lockups or event drops.',
    architecture: 'Microservice-inspired queue worker architecture backed by Redis pub/sub and PostgreSQL transaction logs.',
    role: 'Lead Backend & Infrastructure Architect',
    metrics: 'Processed 5,000+ call dispatches daily with under 50ms queue latency.',
    githubUrl: 'https://github.com/ak8006181716/Smart-Auto-Dialer',
    liveUrl: 'https://github.com/ak8006181716/Smart-Auto-Dialer',
    featured: true
  },
  {
    id: 'smartwear-ecommerce',
    title: 'SmartWear Ecommerce',
    subtitle: 'Ultra-Fast Wearable Tech Commerce Engine with Secure Checkout',
    category: 'Full Stack',
    description: 'Full-stack online storefront featuring instant product indexing, user auth, dynamic cart management, and payment gateway webhooks.',
    longDescription: 'SmartWear Ecommerce delivers a frictionless shopping experience for modern smart wearables. Built with React and Node.js, featuring optimized server queries, JWT auth, inventory decrement concurrency guards, and custom administrative product controls.',
    image: '/projects/smartwear_ecommerce.png',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
    features: [
      'Instant search and multi-facet product filtering',
      'State-persistent shopping cart with quantity reservation',
      'Secure Stripe payment processing & automated invoice receipt',
      'Admin portal for real-time inventory management and order fulfillment'
    ],
    challenges: 'Preventing race conditions during flash sales when multiple users attempt to purchase limited inventory simultaneously.',
    architecture: 'MERN stack with transactional MongoDB session updates and optimistic UI updates.',
    role: 'Full Stack Engineer',
    metrics: 'Achieved sub-100ms API response time and 99.8% checkout reliability.',
    githubUrl: 'https://github.com/ak8006181716/Ecommerce',
    liveUrl: 'https://ecommerce-self-pi-99.vercel.app',
    featured: true
  },
  {
    id: 'ai-document-assistant',
    title: 'AI Document Assistant',
    subtitle: 'RAG-Powered Intelligent Document Querying & Vector Search System',
    category: 'AI & Automation',
    description: 'AI platform enabling users to upload complex PDF documents, extract contextual knowledge, and converse via LLM embeddings.',
    longDescription: 'Developed an Enterprise Retrieval-Augmented Generation (RAG) assistant using FastAPI, OpenAI embeddings, and vector similarity search. Enables users to parse massive documents instantly and receive verbatim semantic answers backed by precise page citations.',
    image: '/projects/ai_document_assistant.png',
    technologies: ['FastAPI', 'Python', 'OpenAI API', 'LangChain', 'Pinecone', 'Next.js', 'Tailwind CSS'],
    features: [
      'Multi-format PDF text extraction and semantic chunking',
      'High-dimensional vector embedding stored in Pinecone DB',
      'Context-aware question answering with direct source references',
      'Streamed text response generation using Server-Sent Events (SSE)'
    ],
    challenges: 'Eliminating hallucinated answers by tuning chunk chunking strategies and cosine similarity thresholds.',
    architecture: 'Python FastAPI microservice backend connected to OpenAI LLM pipeline and Next.js frontend container.',
    role: 'AI Systems Developer',
    metrics: 'Reduced document inspection time by 80% for 500+ page technical manuals.',
    githubUrl: 'https://github.com/ak8006181716/Ai_Chatbot',
    liveUrl: 'https://ai-chatbot-g8e8.vercel.app',
    featured: true
  },
  {
    id: 'spring-boot-microservices',
    title: 'Spring Boot Microservices Platform',
    subtitle: 'Distributed Enterprise Backend with API Gateway & Service Registry',
    category: 'Backend & Cloud',
    description: 'Resilient distributed backend architecture leveraging Spring Cloud Eureka, API Gateway, Resilience4j circuit breakers, and Docker containers.',
    longDescription: 'Architected a production-grade microservices system breaking down monolithic operational burdens into modular Spring Boot services. Integrated Eureka service discovery, centralized configuration servers, distributed tracing, and fault-tolerant fallback mechanisms.',
    image: '/projects/spring_boot_microservices.png',
    technologies: ['Spring Boot', 'Java 17', 'Spring Cloud Eureka', 'API Gateway', 'Docker', 'PostgreSQL', 'RabbitMQ'],
    features: [
      'Centralized Spring Cloud API Gateway with JWT verification filters',
      'Eureka Service Discovery for dynamic load balancing across instances',
      'Resilience4j Circuit Breakers preventing cascading failure across dependencies',
      'Asynchronous inter-service communication via RabbitMQ message broker'
    ],
    challenges: 'Ensuring zero downtime during service updates and configuring cross-service distributed tracing across async queues.',
    architecture: 'Containerized Java Spring Cloud architecture orchestrated via Docker Compose.',
    role: 'Backend Microservices Architect',
    metrics: 'Maintained 99.99% service availability during simulated node failure tests.',
    githubUrl: 'https://github.com/ak8006181716/Ride_sharing_app',
    liveUrl: 'https://github.com/ak8006181716/Ride_sharing_app',
    featured: true
  },
  {
    id: 'videotube',
    title: 'VideoTube Platform',
    subtitle: 'High-Performance Video Streaming & Content Creator Network',
    category: 'Full Stack',
    description: 'Feature-rich video streaming engine with responsive playback, channel subscriptions, nested comments, and search indexing.',
    longDescription: 'VideoTube is a responsive web application designed for seamless media consumption. Features custom video player controls, adaptive video rendering layout, channel subscription feeds, like/dislike reactions, and optimized MongoDB index queries.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary API'],
    features: [
      'Smooth video streaming with lazy chunk loading',
      'Interactive comment trees and dynamic like state counts',
      'Debounced search input with instant tag suggestions',
      'Responsive creator management dashboard'
    ],
    challenges: 'Optimizing video asset delivery and thumbnail loading across mobile viewports.',
    architecture: 'RESTful Node backend storing media metadata on MongoDB and media assets on Cloudinary CDN.',
    role: 'Full Stack Developer',
    metrics: 'Delivered sub-1.2s Page Speed Load across video catalog feeds.',
    githubUrl: 'https://github.com/ak8006181716/youtube_clone',
    liveUrl: 'https://videotube-pearl.vercel.app',
    featured: false
  },
  {
    id: 'ems-college-events',
    title: 'EMS - Event Management System',
    subtitle: 'University Event Scheduling, Ticketing & Auth Platform',
    category: 'Full Stack',
    description: 'Comprehensive college event coordination platform with JWT authentication, pass generation, and role-based admin controls.',
    longDescription: 'EMS streamlines campus event management by providing event creation workflows, attendee registration, pass verification, and automated email confirmation notifications.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
    features: [
      'Role-based access control (Student vs Administrator)',
      'Digital event registration pass generation with unique code',
      'Automated email confirmation dispatch on registration',
      'Interactive event calendar with filter by department'
    ],
    challenges: 'Managing high traffic spikes during campus event seat registration windows.',
    architecture: 'Decoupled React client with Node/Express REST API and bcrypt hashed authentication.',
    role: 'Full Stack Lead',
    metrics: 'Successfully handled 1,200+ event registration requests without server degradation.',
    githubUrl: 'https://github.com/ak8006181716/EMS',
    liveUrl: 'https://ems-navy-psi.vercel.app',
    featured: false
  },
  {
    id: 'mini-mobile-app-builder',
    title: 'Mini Mobile App Builder',
    subtitle: 'Cross-Platform Store Catalog App for Expo Native & React Web',
    category: 'Full Stack',
    description: 'Unified multi-client application enabling users to query store catalogs dynamically across mobile (Expo/React Native) and Web clients.',
    longDescription: 'Created a cross-platform architectural demo serving both React Native (Expo) and React (Vite) web applications from a single Node/Express API backend. Demonstrates clean code reusability across web and native mobile environments.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React Native', 'Expo', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Unified REST API endpoints serving Web and Native clients',
      'Store ID lookup engine returning instant inventory catalog',
      'Cross-platform responsive design patterns',
      'Offline cached catalog storage on mobile client'
    ],
    challenges: 'Sharing state interfaces and business logic across React DOM and React Native components cleanly.',
    architecture: 'Monorepo-style structure sharing TypeScript schemas between mobile app, web dashboard, and server API.',
    role: 'Full Stack Mobile & Web Developer',
    metrics: 'Achieved 85% shared code logic across mobile and web UI layers.',
    githubUrl: 'https://github.com/ak8006181716/mini_mobile_app_builder',
    liveUrl: 'https://mini-mobile-app-builder.vercel.app',
    featured: false
  },
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    subtitle: 'Visual Wealth Management & Analytical Budget Engine',
    category: 'Full Stack',
    description: 'Analytical dashboard application providing visual breakdown of income streams, expenses, savings targets, and category statistics.',
    longDescription: 'Personal Finance Tracker empowers users to control their financial health. Built with Next.js App Router and PostgreSQL, offering interactive chart analytics, recurring expense predictions, and monthly budget alerts.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Chart.js'],
    features: [
      'Interactive monthly budget graphs and spending breakdown',
      'Categorized transaction management with CSV export',
      'Custom savings target progress tracking',
      'Dark mode UI with responsive data tables'
    ],
    challenges: 'Designing fast relational database queries to aggregate monthly transactions into instant analytical charts.',
    architecture: 'Next.js App Router with Server Actions and relational PostgreSQL database schema.',
    role: 'Full Stack Developer',
    metrics: 'Reduced report render time to under 150ms for multi-year financial datasets.',
    githubUrl: 'https://github.com/ak8006181716/Personal_Finance_Tracker',
    liveUrl: 'https://personal-finance-tracker-one-rho.vercel.app',
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    description: 'Crafting pixel-perfect, accessible, and ultra-responsive user interfaces with modern web standards.',
    skills: [
      { name: 'React 19 / 18', level: 'Expert', iconName: 'Atom', description: 'Hooks, Context, State Management, Custom Hooks, Performance Tuning' },
      { name: 'Next.js (App Router)', level: 'Advanced', iconName: 'Globe', description: 'Server Components, SSR, ISR, Server Actions, Route Handlers' },
      { name: 'TypeScript', level: 'Advanced', iconName: 'FileCode2', description: 'Strict Typing, Generics, Type Guarding, Interface Schemas' },
      { name: 'Tailwind CSS', level: 'Expert', iconName: 'Palette', description: 'Design Systems, Custom Tokens, Dark Mode, Animations' },
      { name: 'Framer Motion', level: 'Advanced', iconName: 'Sparkles', description: 'Spring Physics, Scroll Revelations, Layout Animations' }
    ]
  },
  {
    title: 'Backend Systems & API',
    description: 'Engineering secure, high-concurrency server microservices and scalable API endpoints.',
    skills: [
      { name: 'Node.js / Express', level: 'Expert', iconName: 'Server', description: 'Async Event Loop, REST APIs, WebSockets, Middleware pipelines' },
      { name: 'Spring Boot (Java)', level: 'Advanced', iconName: 'Cpu', description: 'Microservices, Spring Security, JPA/Hibernate, Eureka, Gateway' },
      { name: 'FastAPI (Python)', level: 'Advanced', iconName: 'Zap', description: 'Asynchronous Python, Pydantic Schemas, OpenAPI Specs' },
      { name: 'RESTful & WebSockets', level: 'Expert', iconName: 'Network', description: 'API Contract Design, Real-time Feeds, Rate Limiting' }
    ]
  },
  {
    title: 'Databases & In-Memory Caching',
    description: 'Designing resilient relational and document databases with high performance indices.',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', iconName: 'Database', description: 'Relational Schemas, Complex Joins, Indexing, Transactions' },
      { name: 'MongoDB', level: 'Expert', iconName: 'Layers', description: 'Document Schemas, Aggregation Framework, Index Optimization' },
      { name: 'Redis', level: 'Advanced', iconName: 'Flame', description: 'In-memory Caching, Queue Management (BullMQ), Session Stores' },
      { name: 'MySQL', level: 'Advanced', iconName: 'Database', description: 'Relational Database Queries, Constraints, Stored Procedures' }
    ]
  },
  {
    title: 'Cloud, DevOps & AI Integrations',
    description: 'Containerizing services and deploying intelligent AI workflows to cloud infrastructure.',
    skills: [
      { name: 'Docker & Containers', level: 'Advanced', iconName: 'Box', description: 'Containerization, Docker Compose, Multi-stage Builds' },
      { name: 'AWS (Amazon Web Services)', level: 'Intermediate', iconName: 'Cloud', description: 'EC2, S3, Lambda, CloudWatch, IAM Policies' },
      { name: 'OpenAI API & RAG', level: 'Advanced', iconName: 'Bot', description: 'Embeddings, Vector Databases (Pinecone), LLM Integration' },
      { name: 'Git & GitHub Actions', level: 'Expert', iconName: 'GitBranch', description: 'Version Control, CI/CD Workflows, Branching Strategies' }
    ]
  }
];

export const TECH_GRID = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', color: '#FFFFFF' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6' },
  { name: 'Node.js', category: 'Backend', color: '#5FA04E' },
  { name: 'Express.js', category: 'Backend', color: '#A8B1C0' },
  { name: 'Spring Boot', category: 'Backend', color: '#6DB33F' },
  { name: 'FastAPI', category: 'Backend', color: '#009688' },
  { name: 'Python', category: 'Language', color: '#3776AB' },
  { name: 'Java', category: 'Language', color: '#ED8B00' },
  { name: 'PostgreSQL', category: 'Database', color: '#4169E1' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'Redis', category: 'Database', color: '#DC382D' },
  { name: 'Docker', category: 'Cloud & DevOps', color: '#2496ED' },
  { name: 'AWS', category: 'Cloud & DevOps', color: '#FF9900' },
  { name: 'OpenAI', category: 'AI', color: '#10A37F' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06B6D4' }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    company: 'Full Stack & Software Engineering Projects',
    role: 'Full Stack Engineer & Core Developer',
    period: '2023 - Present',
    location: 'Ghaziabad, India',
    type: 'Engineering Lead & Project Architect',
    description: 'Designed and deployed multi-tenant web applications, telecommunication software, RAG-powered AI assistants, and enterprise Spring Boot backend microservices.',
    achievements: [
      'Engineered Smart Auto Dialer backend processing 5,000+ dispatches daily with under 50ms queue latency.',
      'Reduced overall REST API response times by 35% across projects using Redis caching layers and PostgreSQL indexing.',
      'Constructed scalable microservice architecture using Java Spring Boot, Eureka Service Discovery, and API Gateway.',
      'Developed 8+ full-stack production web applications leveraging React, Next.js, Express, and MongoDB.'
    ],
    techStack: ['Node.js', 'React', 'Next.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS']
  }
];

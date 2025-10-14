import React, { useEffect, useRef, useState } from "react";
import e_commerce from "./assets/preview_img/Ecommerce.png";
import video_tube from "./assets/preview_img/videoTube.png";
import ems from "./assets/preview_img/Ems.png";
import mobile_app from "./assets/preview_img/mini_mobile_app-builder.png";
import ride_sharing_app from "./assets/preview_img/ride_sharing_app.jpeg";
import personal_finance_tracker from "./assets/preview_img/Personal_Finance_Tracke.png";
import ai_chatbot from "./assets/preview_img/Ai_Chatbot.png";
import weather_app from "./assets/preview_img/Weather_app.png";
import Container from "./components/Container.jsx";
import Header from "./components/Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
  const [, setHoveredCard] = useState(null);
  const [likedProjects, setLikedProjects] = useState(new Set());
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const filterRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Built a full-stack e-commerce platform with product listings and shopping cart functionality. Integrated secure user authentication and RESTful APIs. Managed front-end state and backend database operations.",
      image: e_commerce,
      liveUrl: "https://ecommerce-self-pi-99.vercel.app",
      codeUrl: "https://github.com/ak8006181716/Ecommerce",
      technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Express"],
      color: "blue",
      featured: true
    },
    {
      id: 2,
      title: "VideoTube",
      description: "VideoTube is a YouTube clone. It lets users browse, search, and watch videos with a clean, responsive interface. The app includes features like video playback, related videos, search functionality, and dynamic routing, showcasing strong frontend and UI development skills.",
      image: video_tube,
      liveUrl: "https://videotube-pearl.vercel.app",
      codeUrl: "https://github.com/ak8006181716/youtube_clone",
      technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Express"],
      color: "red",
      featured: true
    },
    {
      id: 3,
      title: "EMS",
      description: "A full-stack web application to manage college events, including event creation, registration. Implemented secure user authentication using JWT (JSON Web Tokens) and bcrypt password hashing. Designed and integrated RESTful APIs for event management and user operations",
      image: ems,
      liveUrl: "https://ems-navy-psi.vercel.app",
      codeUrl: "https://github.com/ak8006181716/EMS",
      technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Express"],
      color: "indigo",
      featured: true
    },
    {
      id: 4,
      title: "Mini Mobile App Builder",
      description: "A compact full-stack application comprising three modules (mobile, server, and web) that enables users to look up a store by its ID and view its product listings. You can run the app on Expo (React Native) for mobile and Vite + React for web, both consuming the same Express + MongoDB backend API",
      image: mobile_app,
      liveUrl: "https://mini-mobile-app-builder.vercel.app",
      codeUrl: "https://github.com/ak8006181716/mini_mobile_app_builder",
      technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Express", "React Native"],
      color: "cyan",
      featured: true
    },
    {
      id: 5,
      title: "Ride Sharing App",
      description: "A full-stack ride sharing platform built with separate frontend, backend, and smart contract modules. It enables users to schedule, book, and manage rides in a decentralized or semi-centralized setting.",
      image: ride_sharing_app,
      liveUrl: "https://github.com/ak8006181716/Ride_sharing_app",
      codeUrl: "https://github.com/ak8006181716/Ride_sharing_app",
      technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Express", "Blockchain", "Smart Contract"],
      color: "orange",
      featured: false
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description: "The Personal Finance Tracker is a full-stack web application designed to help users manage their expenses, income, and savings efficiently. It provides a clear, visual overview of financial activities through interactive charts, categorized transactions, and budget tracking tools.",
      image: personal_finance_tracker,
      liveUrl: "https://personal-finance-tracker-one-rho.vercel.app",
      codeUrl: "https://github.com/ak8006181716/Personal_Finance_Tracker",
      technologies: ["Next.js", "Tailwind CSS", "Node", "Express", "MongoDB", "SQL"],
      color: "emerald",
      featured: true
    },
    {
      id: 7,
      title: "AI Chatbot",
      description: "An intelligent chat interface powered by AI, capable of engaging in conversational interactions, answering questions, and generating context-aware responses.",
      image: ai_chatbot,
      liveUrl: "https://ai-chatbot-g8e8.vercel.app",
      codeUrl: "https://github.com/ak8006181716/Ai_Chatbot",
      technologies: ["React", "Tailwind CSS", "GSAP"],
      color: "violet",
      featured: false
    },
    {
      id: 8,
      title: "Weather App",
      description: "A sleek web or mobile application that fetches and displays weather information for user-specified cities or locations.",
      image: weather_app,
      liveUrl: "https://ak8006181716.github.io/Weather-app",
      codeUrl: "https://github.com/ak8006181716/Weather-app",
      technologies: ["HTML", "CSS", "JavaScript"],
      color: "sky",
      featured: true
    }
  ];

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    // Scroll-triggered animations for cards
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

  }, []);

  const handleLike = (projectId) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        hoverGradient: "hover:from-blue-600 hover:to-blue-700",
        shadow: "hover:shadow-blue-500/20",
        border: "hover:border-blue-400/50",
        text: "group-hover:text-blue-300",
        bgGradient: "from-blue-500/15 to-blue-600/8"
      },
      red: {
        gradient: "from-red-500 to-red-600",
        hoverGradient: "hover:from-red-600 hover:to-red-700",
        shadow: "hover:shadow-red-500/20",
        border: "hover:border-red-400/50",
        text: "group-hover:text-red-300",
        bgGradient: "from-red-500/15 to-red-600/8"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        hoverGradient: "hover:from-purple-600 hover:to-purple-700",
        shadow: "hover:shadow-purple-500/20",
        border: "hover:border-purple-400/50",
        text: "group-hover:text-purple-300",
        bgGradient: "from-purple-500/15 to-purple-600/8"
      },
      cyan: {
        gradient: "from-cyan-500 to-cyan-600",
        hoverGradient: "hover:from-cyan-600 hover:to-cyan-700",
        shadow: "hover:shadow-cyan-500/20",
        border: "hover:border-cyan-400/50",
        text: "group-hover:text-cyan-300",
        bgGradient: "from-cyan-500/15 to-cyan-600/8"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        hoverGradient: "hover:from-orange-600 hover:to-orange-700",
        shadow: "hover:shadow-orange-500/20",
        border: "hover:border-orange-400/50",
        text: "group-hover:text-orange-300",
        bgGradient: "from-orange-500/15 to-orange-600/8"
      },
      green: {
        gradient: "from-green-500 to-green-600",
        hoverGradient: "hover:from-green-600 hover:to-green-700",
        shadow: "hover:shadow-green-500/20",
        border: "hover:border-green-400/50",
        text: "group-hover:text-green-300",
        bgGradient: "from-green-500/15 to-green-600/8"
      },
      pink: {
        gradient: "from-pink-500 to-pink-600",
        hoverGradient: "hover:from-pink-600 hover:to-pink-700",
        shadow: "hover:shadow-pink-500/20",
        border: "hover:border-pink-400/50",
        text: "group-hover:text-pink-300",
        bgGradient: "from-pink-500/15 to-pink-600/8"
      },
      yellow: {
        gradient: "from-yellow-500 to-yellow-600",
        hoverGradient: "hover:from-yellow-600 hover:to-yellow-700",
        shadow: "hover:shadow-yellow-500/20",
        border: "hover:border-yellow-400/50",
        text: "group-hover:text-yellow-300",
        bgGradient: "from-yellow-500/15 to-yellow-600/8"
      },
      indigo: {
        gradient: "from-indigo-500 to-indigo-600",
        hoverGradient: "hover:from-indigo-600 hover:to-indigo-700",
        shadow: "hover:shadow-indigo-500/20",
        border: "hover:border-indigo-400/50",
        text: "group-hover:text-indigo-300",
        bgGradient: "from-indigo-500/15 to-indigo-600/8"
      },
      teal: {
        gradient: "from-teal-500 to-teal-600",
        hoverGradient: "hover:from-teal-600 hover:to-teal-700",
        shadow: "hover:shadow-teal-500/20",
        border: "hover:border-teal-400/50",
        text: "group-hover:text-teal-300",
        bgGradient: "from-teal-500/15 to-teal-600/8"
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        hoverGradient: "hover:from-emerald-600 hover:to-emerald-700",
        shadow: "hover:shadow-emerald-500/20",
        border: "hover:border-emerald-400/50",
        text: "group-hover:text-emerald-300",
        bgGradient: "from-emerald-500/15 to-emerald-600/8"
      },
      violet: {
        gradient: "from-violet-500 to-violet-600",
        hoverGradient: "hover:from-violet-600 hover:to-violet-700",
        shadow: "hover:shadow-violet-500/20",
        border: "hover:border-violet-400/50",
        text: "group-hover:text-violet-300",
        bgGradient: "from-violet-500/15 to-violet-600/8"
      },
      rose: {
        gradient: "from-rose-500 to-rose-600",
        hoverGradient: "hover:from-rose-600 hover:to-rose-700",
        shadow: "hover:shadow-rose-500/20",
        border: "hover:border-rose-400/50",
        text: "group-hover:text-rose-300",
        bgGradient: "from-rose-500/15 to-rose-600/8"
      },
      sky: {
        gradient: "from-sky-500 to-sky-600",
        hoverGradient: "hover:from-sky-600 hover:to-sky-700",
        shadow: "hover:shadow-sky-500/20",
        border: "hover:border-sky-400/50",
        text: "group-hover:text-sky-300",
        bgGradient: "from-sky-500/15 to-sky-600/8"
      },
      lime: {
        gradient: "from-lime-500 to-lime-600",
        hoverGradient: "hover:from-lime-600 hover:to-lime-700",
        shadow: "hover:shadow-lime-500/20",
        border: "hover:border-lime-400/50",
        text: "group-hover:text-lime-300",
        bgGradient: "from-lime-500/15 to-lime-600/8"
      },
      amber: {
        gradient: "from-amber-500 to-amber-600",
        hoverGradient: "hover:from-amber-600 hover:to-amber-700",
        shadow: "hover:shadow-amber-500/20",
        border: "hover:border-amber-400/50",
        text: "group-hover:text-amber-300",
        bgGradient: "from-amber-500/15 to-amber-600/8"
      }
    };
    return colorMap[color] || colorMap.purple;
  };
           
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         

          {/* Filter Buttons */}
          <div ref={filterRef} className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105">
                All Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <div
                  key={project.id}
                  ref={el => cardsRef.current[index] = el}
                  className={`group relative bg-gradient-to-br ${colors.bgGradient} border border-white/20 rounded-3xl p-6 flex flex-col backdrop-blur-sm transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl ${colors.shadow} ${colors.border} hover:-translate-y-3 hover:scale-105`}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-2 -right-2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <FontAwesomeIcon icon={faStar} className="text-xs" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(project.id);
                    }}
                    className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon 
                      icon={faHeart} 
                      className={`text-sm transition-colors duration-300 ${
                        likedProjects.has(project.id) ? 'text-red-500' : 'text-gray-400'
                      }`} 
                    />
                  </button>

                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <FontAwesomeIcon icon={faEye} className="text-white text-lg" />
                        </a>
                        <a 
                          href={project.codeUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <FontAwesomeIcon icon={faCode} className="text-white text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className={`text-xl text-gray-200 mb-3 font-semibold transition-colors duration-300 ${colors.text}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-gray-300 text-xs font-medium hover:scale-105 transition-transform duration-200 hover:bg-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`flex-1 text-center py-3 px-4 bg-gradient-to-r ${colors.gradient} rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${colors.hoverGradient} flex items-center justify-center gap-2`}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 text-center py-3 px-4 border border-white/30 rounded-xl text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faCode} className="text-sm" />
                      Code
                    </a>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Like What You See?</h3>
              <p className="text-gray-300 mb-6">Let's work together on your next project!</p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Projects;
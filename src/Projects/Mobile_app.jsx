import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import mobile_app from '../assets/preview_img/mini_mobile_app-builder.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Mobile_app = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  Mini Mobile App Builder
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive full-stack application with mobile, server, and web modules. Enables users to 
                look up stores by ID and view product listings. Supports both React Native mobile app and 
                React web interface consuming the same Express + MongoDB backend API.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Expo"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://mini-mobile-app-builder.vercel.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/mini_mobile_app_builder" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-300 font-semibold py-3 px-6 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={mobile_app} 
                alt="Mini Mobile App Builder" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-cyan-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The Mini Mobile App Builder is a comprehensive full-stack application that demonstrates 
                  cross-platform development capabilities. It consists of three interconnected modules: 
                  mobile app (React Native), web interface (React), and backend API (Node.js + Express).
                </p>
                <p>
                  The application allows users to search for stores by ID and browse their product listings 
                  across both mobile and web platforms, showcasing unified backend architecture and 
                  responsive design principles.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Cross-Platform Support</h3>
                      <p className="text-gray-400 text-sm">React Native mobile app and React web interface</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Store Lookup</h3>
                      <p className="text-gray-400 text-sm">Search stores by ID with detailed information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Product Management</h3>
                      <p className="text-gray-400 text-sm">Browse and manage product listings</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Unified Backend</h3>
                      <p className="text-gray-400 text-sm">Single API serving both mobile and web clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Expo Integration</h3>
                      <p className="text-gray-400 text-sm">Easy mobile app development and deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Responsive Design</h3>
                      <p className="text-gray-400 text-sm">Optimized for all screen sizes and devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Mini Mobile App Builder showcases full-stack development skills with React Native for 
                  mobile development and React for web interface. Both frontend applications consume the same 
                  RESTful API built with Node.js and Express.js, demonstrating code reusability and 
                  unified backend architecture.
                </p>
                <p>
                  The mobile app is built with Expo for easy development and deployment, while the web 
                  interface uses Tailwind CSS for styling. MongoDB serves as the database for storing 
                  store and product information, with proper data modeling and API endpoints.
                </p>
                <p>
                  The project demonstrates proficiency in cross-platform development, API design, and 
                  modern JavaScript frameworks. It's deployed on Vercel for web access and supports 
                  mobile app distribution through Expo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Mobile_app;
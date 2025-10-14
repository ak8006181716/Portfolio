import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import video_tube from '../assets/preview_img/videoTube.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const VideoTube = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent mb-4">
                  VideoTube
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A YouTube clone application with comprehensive video streaming functionality. Features include 
                video playback, search capabilities, related videos, and dynamic routing with a clean, 
                responsive interface that showcases strong frontend development skills.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Video API", "Responsive Design"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://videotube-pearl.vercel.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/youtube_clone" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-red-400 text-red-300 font-semibold py-3 px-6 rounded-xl hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={video_tube} 
                alt="VideoTube" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-red-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  VideoTube is a comprehensive YouTube clone that replicates the core functionality of the 
                  popular video streaming platform. Built with modern web technologies, it demonstrates 
                  proficiency in frontend development, API integration, and user interface design.
                </p>
                <p>
                  The application provides a seamless video viewing experience with features like video 
                  playback, search functionality, related video suggestions, and responsive design that 
                  works across all devices.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Video Playback</h3>
                      <p className="text-gray-400 text-sm">High-quality video streaming with custom player controls</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Search Functionality</h3>
                      <p className="text-gray-400 text-sm">Real-time search with autocomplete and filters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Related Videos</h3>
                      <p className="text-gray-400 text-sm">Smart recommendations based on video content</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Dynamic Routing</h3>
                      <p className="text-gray-400 text-sm">Clean URLs and navigation between videos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Responsive Design</h3>
                      <p className="text-gray-400 text-sm">Optimized for desktop, tablet, and mobile devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Video Categories</h3>
                      <p className="text-gray-400 text-sm">Organized content with category browsing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  VideoTube is built using React with Tailwind CSS for styling, providing a modern and 
                  responsive user interface. The application integrates with video APIs to fetch and 
                  display video content, with proper state management for video playback and user interactions.
                </p>
                <p>
                  The backend utilizes Node.js and Express.js for API development, with MongoDB for 
                  data storage. Key technical features include dynamic routing with React Router, 
                  video player integration, and efficient data fetching with proper error handling.
                </p>
                <p>
                  The application demonstrates strong frontend development skills with clean code structure, 
                  component-based architecture, and modern JavaScript practices. It's deployed on Vercel 
                  for optimal performance and accessibility.
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

export default VideoTube;
import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ride_sharing_app from '../assets/preview_img/ride_sharing_app.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Ride_sharing_app = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                  Ride Sharing App
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive full-stack ride sharing platform with blockchain integration. Features 
                separate frontend, backend, and smart contract modules enabling users to schedule, 
                book, and manage rides in a decentralized or semi-centralized environment.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Blockchain", "Smart Contracts"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://github.com/ak8006181716/Ride_sharing_app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/Ride_sharing_app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-orange-400 text-orange-300 font-semibold py-3 px-6 rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={ride_sharing_app} 
                alt="Ride Sharing App" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-orange-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The Ride Sharing App is an innovative full-stack platform that combines traditional web 
                  development with blockchain technology. Built with modular architecture, it provides 
                  a complete solution for ride scheduling, booking, and management in decentralized environments.
                </p>
                <p>
                  The application demonstrates advanced technical skills including blockchain integration, 
                  smart contract development, and modern web application architecture with secure 
                  transaction handling.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Ride Scheduling</h3>
                      <p className="text-gray-400 text-sm">Schedule rides with date, time, and location details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Smart Contracts</h3>
                      <p className="text-gray-400 text-sm">Blockchain-based ride agreements and payments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">User Management</h3>
                      <p className="text-gray-400 text-sm">Driver and rider registration with verification</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Payment Processing</h3>
                      <p className="text-gray-400 text-sm">Secure blockchain-based payment system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Real-time Tracking</h3>
                      <p className="text-gray-400 text-sm">Live ride tracking and status updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Decentralized Architecture</h3>
                      <p className="text-gray-400 text-sm">Modular design with blockchain integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Ride Sharing App is built using React for the frontend with Tailwind CSS for styling, 
                  providing a modern and responsive user interface. The backend utilizes Node.js and Express.js 
                  for API development, with MongoDB for data storage and blockchain integration for 
                  decentralized functionality.
                </p>
                <p>
                  Smart contracts handle ride agreements, payments, and dispute resolution, ensuring 
                  transparency and security in the ride sharing process. The modular architecture 
                  allows for easy maintenance and scalability across different deployment environments.
                </p>
                <p>
                  The application demonstrates expertise in blockchain development, smart contract 
                  programming, and modern web technologies. It showcases the integration of 
                  traditional web development with cutting-edge blockchain solutions.
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

export default Ride_sharing_app;
import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ems from '../assets/preview_img/Ems.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Ems = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  EMS - Event Management System
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive full-stack web application designed to manage college events efficiently. 
                The system includes event creation, registration management, user authentication, and 
                administrative controls with a modern, responsive interface.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "JWT", "bcrypt"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://ems-navy-psi.vercel.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/EMS" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-indigo-400 text-indigo-300 font-semibold py-3 px-6 rounded-xl hover:bg-indigo-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={ems} 
                alt="EMS - Event Management System" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-indigo-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The Event Management System (EMS) is a comprehensive full-stack web application designed 
                  to streamline event management for educational institutions. Built with modern web technologies, 
                  it provides a complete solution for creating, managing, and tracking college events.
                </p>
                <p>
                  The system features secure user authentication, role-based access control, event registration 
                  management, and administrative dashboards. It demonstrates proficiency in full-stack development, 
                  database design, and modern web application architecture.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Event Creation & Management</h3>
                      <p className="text-gray-400 text-sm">Create, edit, and manage events with detailed information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">User Registration System</h3>
                      <p className="text-gray-400 text-sm">Secure user registration and authentication with JWT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Role-Based Access Control</h3>
                      <p className="text-gray-400 text-sm">Different access levels for students, organizers, and admins</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Event Registration</h3>
                      <p className="text-gray-400 text-sm">Students can register for events with capacity management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Admin Dashboard</h3>
                      <p className="text-gray-400 text-sm">Comprehensive admin panel for system management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Responsive Design</h3>
                      <p className="text-gray-400 text-sm">Mobile-friendly interface for all devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The EMS is built using the MERN stack (MongoDB, Express.js, React, Node.js) with additional 
                  security features including JWT authentication and bcrypt password hashing. The frontend 
                  utilizes React with Tailwind CSS for styling, providing a modern and responsive user interface.
                </p>
                <p>
                  The backend implements RESTful APIs for event management and user operations, with proper 
                  error handling and data validation. The database design follows best practices for scalability 
                  and data integrity, with proper indexing and relationship management.
                </p>
                <p>
                  Security features include password hashing with bcrypt, JWT token-based authentication, 
                  input validation, and CORS protection. The application follows modern web development 
                  best practices and is deployed on Vercel for optimal performance.
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

export default Ems;
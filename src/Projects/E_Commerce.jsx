import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import e_commerce from '../assets/preview_img/Ecommerce.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const E_Commerce = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  E-Commerce Website
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive full-stack e-commerce platform with complete shopping functionality. 
                Features include product listings, shopping cart, secure checkout, user authentication, 
                and admin dashboard for inventory management.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "JWT", "Stripe API"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://ecommerce-self-pi-99.vercel.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/Ecommerce" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-blue-400 text-blue-300 font-semibold py-3 px-6 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={e_commerce} 
                alt="E-Commerce Website" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-blue-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  This full-stack e-commerce platform provides a complete online shopping experience with 
                  modern web technologies. Built using the MERN stack, it demonstrates proficiency in 
                  full-stack development, database design, and payment integration.
                </p>
                <p>
                  The platform includes comprehensive features for both customers and administrators, 
                  with secure user authentication, product management, order processing, and payment 
                  handling through integrated payment gateways.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Product Catalog</h3>
                      <p className="text-gray-400 text-sm">Comprehensive product listings with search and filtering</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Shopping Cart</h3>
                      <p className="text-gray-400 text-sm">Add, remove, and manage items with real-time updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">User Authentication</h3>
                      <p className="text-gray-400 text-sm">Secure login, registration, and profile management</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Payment Integration</h3>
                      <p className="text-gray-400 text-sm">Secure checkout with Stripe payment processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Admin Dashboard</h3>
                      <p className="text-gray-400 text-sm">Product management, order tracking, and analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Order Management</h3>
                      <p className="text-gray-400 text-sm">Order history, tracking, and status updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The e-commerce platform is built using React for the frontend with Tailwind CSS for styling, 
                  providing a responsive and modern user interface. The backend utilizes Node.js and Express.js 
                  for API development, with MongoDB for data storage and management.
                </p>
                <p>
                  Security features include JWT-based authentication, password hashing with bcrypt, input 
                  validation, and CORS protection. Payment processing is handled through Stripe API integration, 
                  ensuring secure and reliable transaction processing.
                </p>
                <p>
                  The application follows modern web development best practices with proper error handling, 
                  data validation, and responsive design. It's deployed on Vercel for optimal performance 
                  and scalability.
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

export default E_Commerce;
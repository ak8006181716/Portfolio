import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import weather_app from '../assets/preview_img/Weather_app.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Weather_app = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  Weather App
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A sleek web application that fetches and displays weather information for user-specified cities or locations. 
                Built with vanilla HTML, CSS, and JavaScript, this project demonstrates clean frontend development practices 
                and API integration skills.
              </p>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-400/30 rounded-full text-sky-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://ak8006181716.github.io/Weather-app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/Weather-app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-sky-400 text-sky-300 font-semibold py-3 px-6 rounded-xl hover:bg-sky-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={weather_app} 
                alt="Weather App" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-sky-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The Weather App is a responsive web application that provides real-time weather information 
                  for any city worldwide. Users can search for weather conditions in their desired location 
                  and get detailed forecasts including temperature, humidity, wind speed, and weather conditions.
                </p>
                <p>
                  The application features a clean, intuitive interface with smooth animations and responsive 
                  design that works seamlessly across desktop and mobile devices. It demonstrates proficiency 
                  in vanilla JavaScript, DOM manipulation, and API integration.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Real-time Weather Data</h3>
                      <p className="text-gray-400 text-sm">Fetches current weather conditions from reliable weather APIs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">City Search</h3>
                      <p className="text-gray-400 text-sm">Search weather for any city worldwide with autocomplete</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Detailed Forecast</h3>
                      <p className="text-gray-400 text-sm">Temperature, humidity, wind speed, and weather conditions</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Responsive Design</h3>
                      <p className="text-gray-400 text-sm">Optimized for all screen sizes and devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Smooth Animations</h3>
                      <p className="text-gray-400 text-sm">CSS animations and transitions for better UX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Error Handling</h3>
                      <p className="text-gray-400 text-sm">Graceful error handling for invalid searches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Weather App is built using vanilla HTML, CSS, and JavaScript, showcasing clean frontend 
                  development practices without relying on external frameworks. The application integrates with 
                  weather APIs to fetch real-time data and displays it in an intuitive, user-friendly interface.
                </p>
                <p>
                  Key technical aspects include proper API handling, responsive CSS Grid and Flexbox layouts, 
                  smooth CSS animations, and efficient DOM manipulation. The code is well-structured with 
                  clear separation of concerns and follows modern JavaScript best practices.
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

export default Weather_app;

import React from "react";
import dummy from "../assets/profile.webp";
import Header from "./Header.jsx";

import Footer from "./Footer.jsx";
import gsap from "gsap";
import Container from "./Container.jsx";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".rounded-3xl", {
      scrollTrigger: {
        trigger: ".rounded-3xl",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: -200,
      opacity: 0,
    });
    gsap.from(".para", {
      scrollTrigger: {
        trigger: ".para",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: 200,
      opacity: 0,
    });
  });

  return (
    <>
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 relative">
              <span className="relative text-white font-semibold z-10">About Me</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-sm opacity-75"></div>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative">
                  <img 
                    src={dummy} 
                    alt="Ankit Kumar Image" 
                    className="rounded-3xl  h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto w-auto relative shadow-2xl hover:scale-105 transition-transform duration-500 border-2 border-white/20 group-hover:border-white/40" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex m-2 justify-center flex-col items-center">
              <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-8">
                <p className="para text-gray-200 text-lg leading-relaxed relative z-10">
                  I am a dedicated and versatile full stack developer with a passion for
                  creating efficient and user-friendly web applications. I have worked
                  with a variety of technologies, including React, Node.js, Express.js,
                  MySQL, and MongoDB. My journey in web development began with a deep
                  curiosity for how things work, and it has evolved into a career where
                  I continuously strive to learn and adapt to new challenges. I thrive
                  in collaborative environments and enjoy solving complex problems to
                  deliver high-quality solutions. Outside of coding, I enjoy staying
                  active, exploring new technologies, and contributing to open-source
                  projects.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gradient-to-r from-blue-400 to-purple-400 text-blue-300 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
     <Footer/>
      </Container>
   </>
  );
};

export default About;

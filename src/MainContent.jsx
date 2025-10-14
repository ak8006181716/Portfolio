import React from "react";
import image from "./assets/profile1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const MainContent = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".first-text", {
      duration: 0.8,
      y: -30,
      opacity: 0,
      ease: "power2.out"
    });
    tl.from(".second-text", {
      duration: 0.8,
      y: -20,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.4");
    tl.from(".third-text", {
      duration: 0.8,
      y: -20,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.4");
    tl.from(".fourth", {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.6");
  });

  return (
    <>
      <main className="py-8 md:py-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="relative">
                <h1 className="first-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white tracking-wide leading-tight mb-6 relative">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Ankit Kumar
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-75"></div>
                </h1>
                <h3 className="second-text text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 font-medium relative">
                  Full Stack Developer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
                </h3>
              </div>
              
              <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
                <p className="third-text text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 relative z-10">
                  I am a passionate full stack developer with a knack for crafting
                  robust and scalable web applications. I have honed my skills in
                  front-end technologies like React and Next.js, as well as back-end
                  technologies like SpringBoot, Node.js, MySQL, PostgreSQL, and
                  MongoDB. My goal is to leverage my expertise to create innovative
                  solutions that drive business growth and deliver exceptional user
                  experiences.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projects" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden">
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link to="/contact" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gradient-to-r from-blue-400 to-purple-400 text-blue-300 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative">
                  <img
                    src={image}
                    alt="Ankit Kumar"
                    className="fourth w-full h-80 sm:h-96 lg:h-[28rem] rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 object-cover border-2 border-white/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;

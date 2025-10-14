import React from "react";
import Container from "./Container.jsx";
import react1 from "../assets/1611079.png";
import mongoDB from "../assets/images (1).png";
import node from "../assets/Node.js_logo.svg.png";
import express from "../assets/express_js.png";
import c from "../assets/C_Logo.png";
import AWS from "../assets/Amazon_Web_Services_Logo.png"
import java from "../assets/java-coffee-cup-logo--v2.png"
import tailwind from "../assets/tailwind-css-logo-rounded-free-png.webp";
import bootstrap from "../assets/Bootstrap_(front-end_framework)-Logo.wine.png";
import html from "../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/919826.png";
import sql from "../assets/MySQL-Logo.wine.png"
import next from "../assets/next.js-logo_brandlogos.net_zeccw.png";
import gsap from "gsap";
import gsapimg from "../assets/GSAP_2023.webp";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./Header.jsx";
function Technology() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".text-one", {
      scrollTrigger: {
        trigger: ".text-one",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -200,
      opacity: 0,
    });
    gsap.from(".logo-one", {
      scrollTrigger: {
        trigger: ".logo-one",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: -200,
      opacity: 0,
    });
    gsap.from(".logo-two", {
      scrollTrigger: {
        trigger: ".logo-two",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -200,
      opacity: 0,
    });
    gsap.from(".logo-three", {
      scrollTrigger: {
        trigger: ".logo-three",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: 200,
      opacity: 0,
    });
    gsap.from(".logo-four", {
      scrollTrigger: {
        trigger: ".logo-four",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: 200,
      opacity: 0,
    });
    gsap.from(".logo-five", {
      scrollTrigger: {
        trigger: ".logo-five",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -200,
      opacity: 0,
    });
    gsap.from(".logo-six", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x:-200,
      opacity: 0,
    });
    gsap.from(".logo-seven", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: 200,
      opacity: 0,
    });
    gsap.from(".logo-eight", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: -200,
      opacity: 0,
    });
    gsap.from(".logo-nine", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: 200,
      opacity: 0,
    });
    gsap.from(".logo-ten", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: 200,
      opacity: 0,
    });
    gsap.from(".logo-eleven", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x:-200,
      opacity: 0,
    });
    gsap.from(".logo-twelve", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y:200,
      opacity: 0,
    });
    gsap.from(".logo-thirteen", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -200,
      opacity: 0,
    });
    gsap.from(".logo-fourteen", {
      scrollTrigger: {
        trigger: ".logo-six",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: 200,
      opacity: 0,
    });
  });

  return (
    
    <Container>
      <Header />
      {/*displaying the all technology*/}
      <div className="px-4 md:px-10 pt-16 md:pt-20  relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 relative">
              <span className="relative text-white font-semibold z-10">Technologies</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-75"></div>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
       
          <div className="flex flex-wrap justify-center pb-5 gap-6 md:gap-10">
          <div className="logo-one group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20">
              <img
                src={react1}
                alt="reactjs"
                className="w-16 h-16 md:w-20 md:h-20 object-cover group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="logo-two group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20">
              <img
                src={express}
                alt="express js"
                className="w-16 h-16 md:w-20 md:h-20 bg-transparent rounded-full group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="logo-three group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20">
              <img
                src={node}
                alt="node js"
                className="w-36 md:w-28 md:h-20 object-fill group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="logo-four group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20">
              <img
                src={mongoDB}
                alt="mongo DB"
                className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover bg-transparent group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          </div>
         
          <div className="logo-five group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20">
              <img
                src={tailwind}
                alt="tailwind css"
                className="rounded-full w-16 h-16 md:w-20 md:h-20 group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="logo-six group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20">
              <img
                src={gsapimg}
                alt="gsap"
                className="w-28 h-20 group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="logo-seven group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20">
              <img 
                src={bootstrap}
                alt="bootstrap" 
                className="w-16 h-16 md:w-20 md:h-20 object-cover bg-transparent group-hover:drop-shadow-lg transition-all duration-300" 
              />
            </div>
          </div>
        
          <div className="logo-eight group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/20">
              <img 
                src={html}
                alt="html"
                className="w-16 h-16 md:w-20 md:h-20 object-cover bg-transparent group-hover:drop-shadow-lg transition-all duration-300" 
              />
            </div>
          </div>
         
          <div className="logo-nine group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20">
              <img 
                src={css}
                alt="css"
                className="w-16 h-16 md:w-20 md:h-20 object-cover group-hover:drop-shadow-lg transition-all duration-300" 
              />
            </div>
          </div>
          
          <div className="logo-ten group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-gray-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/20">
              <img 
                src={next}
                alt="nextjs"
                className="w-16 h-16 md:w-20 md:h-20 object-cover bg-white rounded-xl group-hover:drop-shadow-lg transition-all duration-300" 
              />
            </div>
          </div>
          
          <div className="logo-eleven group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20">
              <img
                src={sql} 
                alt="sql logo" 
                className="w-28 rounded-xl bg-white group-hover:drop-shadow-lg transition-all duration-300" 
              />
            </div>
          </div>

          <div className="logo-twelve group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/20">
              <img
                src={java} 
                alt="Java logo" 
                className="w-20 bg-white rounded-xl group-hover:drop-shadow-lg transition-all duration-300" 
              />
            </div>
          </div>
          
          <div className="logo-thirteen group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20">
              <img src={c} alt="c logo" className="w-20 h-20 group-hover:drop-shadow-lg transition-all duration-300" />
            </div>
          </div>

          <div className="logo-fourteen group">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/20">
              <img src={AWS} alt="AWS logo" className="w-20 h-20 bg-white rounded-xl group-hover:drop-shadow-lg transition-all duration-300"/>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      </Container>
    
  );
}

export default Technology;

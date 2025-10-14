import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faHeart, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate footer elements
    gsap.from(".footer-title", {
      scrollTrigger: {
        trigger: ".footer-title",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -50,
      opacity: 0,
    });

    gsap.from(".footer-content", {
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from(".social-links", {
      scrollTrigger: {
        trigger: ".social-links",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.1,
    });

    // Floating animation for social icons
    gsap.to(".social-icon", {
      y: -10,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 1
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Footer Title */}
            <div className="text-center mb-16">
              <h1 className="footer-title text-4xl pb-4 sm:text-5xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Let's Work Together
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
              <p className="footer-content text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
              
              {/* Location */}
              <div className="footer-content text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Pratap Vihar</p>
                <p className="text-gray-400">Ghaziabad, Uttar Pradesh</p>
              </div>

              {/* Phone */}
              <div className="footer-content text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:+918006181716" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
                >
                  +91 8006181716
                </a>
              </div>

              {/* Email */}
              <div className="footer-content text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:ankitk8006@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block break-all"
                >
                  ankitk8006@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center mb-16">
              <h3 className="text-white text-xl font-semibold mb-8">Follow Me</h3>
              <div className=" social-links flex justify-center gap-6">
                <a 
                  href="https://github.com/ak8006181716" 
                  target="_blank" 
                  rel="noreferrer"
                  className=" text-white social-icon group w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ankit-kumar-5206b42aa" 
                  target="_blank" 
                  rel="noreferrer"
                  className=" text-white social-icon group w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.instagram.com/i_am_ankitkumar89" 
                  target="_blank" 
                  rel="noreferrer"
                  className=" text-white social-icon group w-14 h-14 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center hover:from-pink-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://x.com/Ankit8006Kumar" 
                  target="_blank" 
                  rel="noreferrer"
                  className=" text-white social-icon group w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="text-right absolute mb-12">
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faArrowUp} className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2025 Ankit Kumar. Made with</span>
                <FontAwesomeIcon icon={faHeart} className="text-red-500 text-sm animate-pulse" />
                <span>and modern web technologies</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Full Stack Developer</span>
                <span>•</span>
                <span>React Specialist</span>
                <span>•</span>
                <span>UI/UX Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Container from './Container.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faCheck, faSpinner, faPaperPlane, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faGithub as faGithubBrand, faLinkedin as faLinkedinBrand, faInstagram as faInstagramBrand, faXTwitter as faXTwitterBrand } from "@fortawesome/free-brands-svg-icons";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  
  const titleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(contactInfoRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(formRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(socialRef.current.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Floating animation for contact icons
    gsap.to(".floating-icon", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // EmailJS configuration - using environment variables for security
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_qtqngek';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_60rfbsp';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Il3Yy97U9ehmSYpH-';
      
      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ankitk8006@gmail.com'
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact me directly at ankitk8006@gmail.com');
    }
  };

  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <h1 
          ref={titleRef}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 md:mb-16 relative"
        >
          <span className="relative z-10 text-white font-semibold">Get In Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm opacity-50"></div>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className="group">
              <h2 className="text-3xl font-semibold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105">
                <div className="floating-icon w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Email</p>
                  <a href="mailto:ankitk8006@gmail.com" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                    ankitk8006@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105">
                <div className="floating-icon w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Phone</p>
                  <a href="tel:+918006181716" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                    +91 8006181716
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-105">
                <div className="floating-icon w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Location</p>
                  <p className="text-white font-medium">Ghaziabad Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div ref={socialRef}>
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/ak8006181716" target="_blank" rel="noreferrer" className="group w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50 transform">
                  <FontAwesomeIcon icon={faGithubBrand} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/ankit-kumar-5206b42aa" target="_blank" rel="noreferrer" className="group w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transform">
                  <FontAwesomeIcon icon={faLinkedinBrand} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.instagram.com/i_am_ankitkumar89" target="_blank" rel="noreferrer" className="group w-14 h-14 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl flex items-center justify-center hover:from-pink-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 transform">
                  <FontAwesomeIcon icon={faInstagramBrand} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://x.com/Ankit8006Kumar" target="_blank" rel="noreferrer" className="group w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50 transform">
                  <FontAwesomeIcon icon={faXTwitterBrand} className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500/50' 
                            : focusedField === 'name'
                            ? 'border-blue-500 focus:ring-2 focus:ring-blue-500/50'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500/50' 
                            : focusedField === 'email'
                            ? 'border-blue-500 focus:ring-2 focus:ring-blue-500/50'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500/50' 
                            : focusedField === 'message'
                            ? 'border-blue-500 focus:ring-2 focus:ring-blue-500/50'
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        placeholder="Your message..."
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    {submitError && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-400 mr-3" />
                          <p className="text-red-400 text-sm">{submitError}</p>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
     
    </Container>
  )
}

export default Contact
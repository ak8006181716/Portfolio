import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ai_chatbot from '../assets/preview_img/Ai_Chatbot.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Ai_chatbot = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  AI Chatbot
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                An intelligent conversational AI chatbot with advanced natural language processing capabilities. 
                Features context-aware responses, multi-turn conversations, learning capabilities, and 
                seamless integration with modern web technologies for enhanced user interaction.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "GSAP", "AI Integration", "NLP", "Context Awareness"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full text-violet-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://ai-chatbot-g8e8.vercel.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/Ai_Chatbot" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-violet-400 text-violet-300 font-semibold py-3 px-6 rounded-xl hover:bg-violet-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={ai_chatbot} 
                alt="AI Chatbot" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-violet-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The AI Chatbot is an intelligent conversational interface powered by advanced artificial 
                  intelligence and natural language processing. Built with React and modern web technologies, 
                  it demonstrates proficiency in AI integration, context management, and interactive user interfaces.
                </p>
                <p>
                  The chatbot features sophisticated conversation capabilities including context awareness, 
                  multi-turn dialogue management, and adaptive learning to provide meaningful and 
                  contextually relevant responses to user queries.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Natural Language Processing</h3>
                      <p className="text-gray-400 text-sm">Advanced NLP for understanding user intent and context</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Context Awareness</h3>
                      <p className="text-gray-400 text-sm">Maintains conversation context across multiple turns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Learning Capabilities</h3>
                      <p className="text-gray-400 text-sm">Adapts and improves responses based on interactions</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Interactive Interface</h3>
                      <p className="text-gray-400 text-sm">Smooth animations and responsive chat interface</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Real-time Responses</h3>
                      <p className="text-gray-400 text-sm">Fast and accurate response generation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Multi-turn Conversations</h3>
                      <p className="text-gray-400 text-sm">Supports complex, extended dialogue sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The AI Chatbot is built using React with Tailwind CSS for styling, providing a modern 
                  and responsive user interface. GSAP (GreenSock Animation Platform) is integrated 
                  for smooth animations and enhanced user experience during conversations.
                </p>
                <p>
                  The application integrates with advanced AI services for natural language processing 
                  and response generation. Context management is handled through sophisticated state 
                  management, ensuring coherent and contextually relevant conversations.
                </p>
                <p>
                  The project demonstrates expertise in AI integration, conversational interface design, 
                  and modern web development practices. It showcases the seamless integration of 
                  artificial intelligence with user-friendly web interfaces.
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

export default Ai_chatbot;
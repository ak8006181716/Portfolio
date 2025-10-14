import React from 'react';
import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import personal_finance_tracker from '../assets/preview_img/Personal_Finance_Tracke.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Personal_Finance_Tracker = () => {
  return (
    <Container>
      <Header />
      <main className="py-8 md:py-16 min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors duration-300 mb-8 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
                  Personal Finance Tracker
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive financial management application designed to help users manage expenses, 
                income, and savings efficiently. Features interactive charts, categorized transactions, 
                budget tracking tools, and clear visual overview of financial activities.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "SQL", "Chart.js"].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://personal-finance-tracker-one-rho.vercel.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  Live Demo
                </a>
                <a 
                  href="https://github.com/ak8006181716/Personal_Finance_Tracker" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 border border-emerald-400 text-emerald-300 font-semibold py-3 px-6 rounded-xl hover:bg-emerald-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src={personal_finance_tracker} 
                alt="Personal Finance Tracker" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-emerald-400/20"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The Personal Finance Tracker is a comprehensive full-stack web application designed 
                  to help users manage their financial activities efficiently. Built with Next.js and 
                  modern web technologies, it provides a clear, visual overview of financial data 
                  through interactive charts and categorized transactions.
                </p>
                <p>
                  The application features budget tracking tools, expense categorization, income 
                  management, and detailed financial reporting, making it easy for users to 
                  understand their spending patterns and achieve their financial goals.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Expense Tracking</h3>
                      <p className="text-gray-400 text-sm">Categorize and track all expenses with detailed records</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Income Management</h3>
                      <p className="text-gray-400 text-sm">Track income sources and recurring payments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Budget Planning</h3>
                      <p className="text-gray-400 text-sm">Set budgets and monitor spending against limits</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Interactive Charts</h3>
                      <p className="text-gray-400 text-sm">Visual data representation with Chart.js integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Financial Reports</h3>
                      <p className="text-gray-400 text-sm">Generate detailed reports and analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Savings Goals</h3>
                      <p className="text-gray-400 text-sm">Set and track progress towards savings objectives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Technical Implementation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Personal Finance Tracker is built using Next.js for the frontend with Tailwind CSS 
                  for styling, providing a modern and responsive user interface. The backend utilizes 
                  Node.js and Express.js for API development, with MongoDB for data storage and 
                  SQL integration for complex financial queries.
                </p>
                <p>
                  Data visualization is handled through Chart.js integration, providing interactive 
                  charts and graphs for financial data representation. The application includes 
                  comprehensive data validation, secure user authentication, and responsive design 
                  principles for optimal user experience.
                </p>
                <p>
                  The project demonstrates proficiency in full-stack development, data visualization, 
                  and financial application architecture. It's deployed on Vercel for optimal 
                  performance and accessibility across all devices.
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

export default Personal_Finance_Tracker;
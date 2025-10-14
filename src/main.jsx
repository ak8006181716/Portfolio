import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./components/Contact.jsx";
import Technology from "./components/Technology.jsx";
import E_Commerce from "./Projects/E_Commerce.jsx";
import Ai_chatbot from "./Projects/Ai_chatbot.jsx";
import Personal_Finance_Tracker from "./Projects/Personal_Finance_Tracker.jsx";
import VideoTube from "./Projects/VideoTube.jsx";
import Ems from "./Projects/Ems.jsx";
import Mobile_app from "./Projects/Mobile_app.jsx";
import Ride_sharing_app from "./Projects/Ride_sharing_app.jsx";
import Weather_app from "./Projects/Weather_app.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/E-Commerce" element={<E_Commerce />} />
        <Route path="/Ai_chatbot" element={<Ai_chatbot />} />
        <Route path="/Personal_Finance_Tracker" element={<Personal_Finance_Tracker />} />
        <Route path="/VideoTube" element={<VideoTube />} />
        <Route path="/Ems" element={<Ems />} />
        <Route path="/Mobile_app" element={<Mobile_app />} />
        <Route path="/Ride_sharing_app" element={<Ride_sharing_app />} />
        <Route path="/Weather_app" element={<Weather_app />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

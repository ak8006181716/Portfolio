import React from "react";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".main-text", {
      scrollTrigger: {
        trigger: ".main-text",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -200,
      opacity: 0,
    });

    gsap.from(".img-1", {
      scrollTrigger: {
        trigger: ".img-1",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: -200,
      opacity: 0,
    });

    gsap.from(".project-1", {
      scrollTrigger: {
        trigger: ".project-1",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: 200,
      opacity: 0,
    });

    gsap.from(".img-2", {
      scrollTrigger: {
        trigger: ".img-2",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: -200,
      opacity: 0,
    });
    gsap.from(".project-2", {
      scrollTrigger: {
        trigger: ".project-2",
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
      <h1 className=" main-text text-center text-6xl pt-20  font-extralight text-gray-300">
        Projects
      </h1>

      <div className="flex justify-center pt-40 gap-30">
        <img src={project1} alt="peject 1 image" className=" img-1 h-40 w-40" />
        <div className="project-1">
          <h3 className="text-2xl text-gray-400">E-Commerce Website</h3>
          <p className="text-gray-200 max-w-[36rem] ">
            A fully functional e-commerce website with features like product
            listing, shopping cart, and user authentication.
          </p>
          <div className="flex gap-2">
            <span className="p-1 border bg-gray-500 rounded-xl">React</span>
            <span className="p-1 border bg-gray-500 rounded-xl">node</span>
            <span className="p-1 border bg-gray-500 rounded-xl">mongoDB</span>
            <span className="p-1 border bg-gray-500 rounded-xl">express</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10 gap-30">
        <img src={project2} alt="project 2 image" className="img-2 h-40 w-40" />
        <div className="project-2">
          <h3 className="text-2xl text-gray-400">Portfolio Website</h3>
          <p className="text-gray-200 max-w-[36rem] ">
            A personal portfolio website showcasing projects, skills, and
            contact information.
          </p>
          <div className="flex gap-2">
            <span className="p-1 border bg-gray-500 rounded-xl">React</span>
            <span className="p-1 border bg-gray-500 rounded-xl">
              Teailwind CSS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

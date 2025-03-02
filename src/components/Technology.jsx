import React from "react";
import react1 from "../assets/asset-svg-7.svg";
import mongoDB from "../assets/asset-svg-9.svg";
import node from "../assets/Node.js_logo.svg.png";
import express from "../assets/express_js.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  });

  return (
    <>
      <div className="p-10">
        <h1 className="text-one text-6xl font-extralight text-center">
          Technologies
        </h1>
        <div className="flex justify-center pt-30 aspect-auto gap-20 object-contain ">
          <img
            src={react1}
            alt="reactjs"
            className="logo-one w-20 h-20 object-cover bg-transparent border-2 border-white rounded-sm"
          />
          <img
            src={express}
            alt="express js"
            className=" logo-two w-20 h-20  bg-transparent rounded-full border-2 border-white "
          />
          <img
            src={node}
            alt="node js"
            className=" logo-three w-20 h-20 object-fill bg-transparent border-2 border-white rounded-sm"
          />
          <img
            src={mongoDB}
            alt="mongo DB"
            className="logo-four w-20 h-20 object-cover bg-transparent border-2 border-white rounded-sm"
          />
        </div>
      </div>
    </>
  );
}

export default Technology;

import React from "react";
import dummy from "../assets/dummy_image.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      <h1 className="text-center text-6xl pt-20  font-extralight text-gray-300">
        About me
      </h1>
      <div className="min-h-screen p-30 flex justify-between ">
        <img src={dummy} alt="dummy" className="rounded-3xl h-[35rem] " />
        <p className="para text-gray-200 max-w-[36rem] pt-10">
          I am a dedicated and versatile full stack developer with a passion for
          creating efficient and user-friendly web applications.I have worked
          with a variety of technologies, including React, Node.js,Express js,
          MySQL, and MongoDB. My journey in web development began with a deep
          curiosity for how things work, and it has evolved into a career where
          I continuously strive to learn and adapt to new challenges. I thrive
          in collaborative environments and enjoy solving complex problems to
          deliver high-quality solutions. Outside of coding, I enjoy staying
          active, exploring new technologies, and contributing to open-source
          projects.
        </p>
      </div>
    </>
  );
};

export default About;

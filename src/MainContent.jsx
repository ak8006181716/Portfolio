import React from "react";
import image from "./assets/profile1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MainContent = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".first-text", {
      duration: 0.5,
      x: -200,
      opacity: 0,
    });
    tl.from(".second-text", {
      duration: 0.5,
      x: -200,
      opacity: 0,
    });
    tl.from(".third-text", {
      duration: 0.5,
      x: -200,
      opacity: 0,
    });
    tl.from(".fourth", {
      duration: 0.5,
      x: 200,
      opacity: 0,
    });
  });

  return (
    <>
      <div className="flex justify-center gap-20 p-10">
        <div className="p-10  m-2 ">
          <h1 className="first-text text-8xl font-extralight text-gray-300 tracking-wide ">
            Ankit Kumar
          </h1>
          <h3 className="second-text text-3xl text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-red-300 pt-6">
            Full Stack Developer
          </h3>
          <p className="third-text text-blue-100 pt-6 w-3xl">
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. I have honed my skills in
            front-end technologies like React and Next.js, as well as back-end
            technologies like SpringBoot,Node.js, MySQL, PostgreSQL, and
            MongoDB. My goal is to leverage my expertise to create innovative
            solutions that drive business growth and deliver exceptional user
            experiences.
          </p>
        </div>
        <img
          src={image}
          alt="Photo"
          className="fourth h-[28.125rem]  rounded-2xl"
        />
      </div>
    </>
  );
};

export default MainContent;

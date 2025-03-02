import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Footer = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".last-tab", {
      scrollTrigger: {
        trigger: ".last-tab",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      y: -200,
      opacity: 0,
    });

    gsap.from(".mob", {
      scrollTrigger: {
        trigger: ".mob",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none none",
      },
      duration: 1,
      x: -200,
      opacity: 0,
    });
  });

  return (
    <>
      <>
        <div className="pb-10">
          <h1 className="last-tab text-center text-6xl  font-extralight text-gray-300">
            Get In Touch
          </h1>
          <div className="mob flex items-center flex-col gap-3 pt-25">
            <p>Pratap Vihar, Ghaziabad, Uttar Pradesh</p>
            <p>+91 8006181716</p>
            <p>ankitk8006@gmail.com</p>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;

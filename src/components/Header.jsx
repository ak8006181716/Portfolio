import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between p-10">
      <h1 className="text-4xl p-10">Ak</h1>
      <div className="p-10 flex text-xl gap-4">
        {/* LinkedIn */}

        <a href="www.linkedin.com/in/ankit-kumar-5206b42aa" rel="Linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <div>
          {/* GitHub */}

          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div>
          {/* Instagram */}

          <FontAwesomeIcon icon={faInstagram} />
        </div>

        <div>
          {/* X (Twitter) */}

          <FontAwesomeIcon icon={faXTwitter} />
        </div>
      </div>
    </div>
  );
};

export default Header;

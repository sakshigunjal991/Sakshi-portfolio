import React from "react";
import "./Hero.css";
import profile_img from "../../assets/hero_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Sakshi Gunjal,</span> frontend developer based in IND.
      </h1>
      <p>
        I am a frontend developer from Maharashtra, IND with 03 month of
        internship experience in Pravara Infotech Pvt. Ltd.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/1TtSk8Hb1g95j2tSU2gfIIf9MiQrM56RE/view?usp=sharing"
          download="Samir_Varpe_Resume.pdf"
          className="hero-resume"
          target="_blank"
           rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
      <div className="hero-icon">
        <div className="hero-github">
          <a
            href="https://github.com/sakshigunjal991"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="hero-gitlab">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab size={30} />
          </a>
        </div>

        <div className="hero-linkdin">
          <a
            href="https://www.linkedin.com/in/sakshi-gunjal-4a83bb376/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

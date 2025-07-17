import React from "react";
import "./Hero.css";
import profile_img from "../../assets/passport_size_photo.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Samir Varpe,</span> frontend developer based in IND.
      </h1>
      <p>
        I am a frontend developer from Maharashtra, IND with 1 year of
        experience in baap company.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/1e6tY-oWnxriAbkPVtTZ1Drd90IXGTf3M/view?usp=drive_link"
          download="Samir_Varpe_Resume.pdf"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
      <div className="hero-icon">
        <div className="hero-github">
          <a
            href="https://github.com/samirvarpe991"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <div className="hero-gitlab">
          <a
            href="https://gitlab.com/samirvarpe991"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab size={30} />
          </a>
        </div>

        <div className="hero-linkdin">
          <a
            href="https://www.linkedin.com/in/samir-varpe-5b901b264/"
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

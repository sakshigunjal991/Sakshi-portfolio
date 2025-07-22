import React from 'react';
import './Skills.css';
import bg_img from '../../assets/bg_img.svg';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiReact,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={bg_img} alt="" />
      </div>

      <div className="skills-container">
        <div className="skills-category">
          <h2>Frontend</h2>
          <ul>
            <li><SiHtml5 /> HTML5</li>
            <li><SiCss3 /> CSS3</li>
            <li><SiJavascript /> JavaScript</li>
            <li><SiBootstrap /> Bootstrap</li>
            <li><SiReact /> React.js</li>
          </ul>
        </div>

        <div className="skills-category">
          <h2>Tools & Others</h2>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><SiGithub /> GitHub</li>
            <li><VscVscode /> VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

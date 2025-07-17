// import React from 'react';
// import './Skills.css';
// import bg_img from '../../assets/bg_img.svg'

// const Skills = () => {
//   return (
//     <div className="skills" id="skills">
//       <div className="skills-title">
//         <h1>My Skills</h1>
//         <img src={bg_img} alt="" />
//       </div>

//       <div className="skills-container">

//         <div className="skills-category">
//           <h2>Frontend</h2>
//           <ul>
//             <li>HTML5</li>
//             <li>CSS3</li>
//             <li>JavaScript</li>
//             <li>React.js</li>
//             <li>Tailwind CSS</li>
//             <li>Bootstrap</li>
//           </ul>
//         </div>

//         <div className="skills-category">
//           <h2>Backend</h2>
//           <ul>
//             <li>Node.js</li>
//             <li>Express.js</li>
//             <li>PostgreSQL</li>
//             <li>MongoDB</li>
//           </ul>
//         </div>

//         <div className="skills-category">
//             <h2>CRM & Cloud Platforms</h2>
//             <ul>
//                 <li>Salesforce Admin</li>
//                 <li>Lightning Web Components (LWC)</li>
//                 <li>Salesforce Flows</li>
//             </ul>
//         </div>

//         <div className="skills-category">
//           <h2>Tools & Others</h2>
//           <ul>
//             <li>Git & GitHub</li>
//             <li>GitLab</li>
//             <li>VS Code</li>
//             <li>Postman</li>
//             <li>Compass</li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';
import './Skills.css';
import bg_img from '../../assets/bg_img.svg';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSalesforce,
  SiPostman,
  SiGithub,
  SiGitlab,
  SiNodedotjs
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import { FaGitAlt } from 'react-icons/fa';
import { TbCloudComputing } from 'react-icons/tb';
import { BiLogoMongodb } from 'react-icons/bi';


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
            <li><SiReact /> React.js</li>
            <li><SiTailwindcss /> Tailwind CSS</li>
            <li><SiBootstrap /> Bootstrap</li>
          </ul>
        </div>

        <div className="skills-category">
          <h2>Backend</h2>
          <ul>
            <li><SiNodedotjs /> Node.js</li>
            <li><SiExpress /> Express.js</li>
            <li><SiPostgresql /> PostgreSQL</li>
            <li><SiMongodb /> MongoDB</li>
          </ul>
        </div>

        <div className="skills-category">
          <h2>CRM & Cloud Platforms</h2>
          <ul>
            <li><SiSalesforce /> Salesforce Admin</li>
            <li><TbCloudComputing /> Lightning Web Components (LWC)</li>
            <li><TbCloudComputing /> Salesforce Flows</li>
          </ul>
        </div>

        <div className="skills-category">
          <h2>Tools & Others</h2>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><SiGithub /> GitHub</li>
            <li><SiGitlab /> GitLab</li>
            <li><VscVscode /> VS Code</li>
            <li><SiPostman /> Postman</li>
            <li><BiLogoMongodb /> Compass</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;

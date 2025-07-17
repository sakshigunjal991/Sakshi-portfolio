import React from 'react';
import './Experience.css';
import bg_img from '../../assets/bg_img.svg';
import auro_icon from '../../assets/auro_icon.svg';
import Experience_Data from '../../assets/experience_data.js';

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={bg_img} alt="Background" />
      </div>

      <div className="experience-container">
        {Experience_Data.map((exp, index) => (
          <div key={index} className="experience-card">
            <img src={exp.e_img} alt="Company Logo" className="experience-img" />
            <div className="experience-content">
              <h2>{exp.company}</h2>
              <h3>{exp.role}</h3>
              <p className="exp-duration">{exp.duration}</p>
              <p>{exp.description}</p>
              <p><strong>Tech Used:</strong> {exp.technologies}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="experience-showmore">
        <p>Show More</p>
        <img src={auro_icon} alt="arrow" />
      </div> */}
    </div>
  );
};

export default Experience;

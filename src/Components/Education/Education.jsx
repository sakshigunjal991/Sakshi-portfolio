import React from 'react';
import './Education.css';
import bg_img from '../../assets/bg_img.svg';
import hsc_logo from '../../assets/pune-university.jpg';
import ssc_logo from '../../assets/pune-university.jpg'; 

const Education = () => {
  const educationData = [
  {
  degree: "BE - Computer Engineering",
  institute: "Savitribai Phule Pune University",
  duration: "2024 – 2026",
  description: "Pursuing B.E. in Computer Engineering with a strong focus on data structures, operating systems, DBMS, computer networks, and software development. Worked on various academic projects like a Task Management System (React + Node.js), Student Result Portal using PHP and MySQL, and a Portfolio Website built with React.js and Tailwind CSS.",
  logo: hsc_logo
},
{
  degree: "Higher Secondary Education – HSC",
  institute: "Savitribai Phule Pune University",
  duration: "2023 – 2024",
  description: "Completed HSC in Science stream with core subjects including Physics, Chemistry, and Mathematics. Also studied Computer Science, gaining foundational knowledge in programming, algorithms, and software applications.",
  logo: hsc_logo
},
{
  degree: "Secondary School Certification – SSC",
  institute: "Savitribai Phule Pune University",
  duration: "2020 – 2021",
  description: "Completed SSC with subjects like Mathematics, Science, English, and Social Studies. Developed a strong academic base and initial interest in technology and computing.",
  logo: ssc_logo
}
];

  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={bg_img} alt="" />
      </div>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <img src={edu.logo} alt="Institute Logo" className="education-img" />
            <div className="education-content">
              <h2>{edu.degree}</h2>
              <h3>{edu.institute}</h3>
              <p className="edu-duration">{edu.duration}</p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

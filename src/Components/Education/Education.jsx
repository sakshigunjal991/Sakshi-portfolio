import React from 'react';
import './Education.css';
import bg_img from '../../assets/bg_img.svg';
import bca_logo from '../../assets/university_of_mysore.png';
import hsc_logo from '../../assets/pune-university.jpg';
import ssc_logo from '../../assets/pune-university.jpg'; 

const Education = () => {
  const educationData = [
  {
  degree: "Bachelor of Computer Applications - BCA",
  institute: "University of Mysore",
  duration: "2022 – 2025",
  description: "Completed BCA with a strong foundation in data structures, databases, and web development. Built multiple academic projects including a Task Management System (React + Node.js), Student Result Portal using PHP and MySQL, and a Portfolio Website using React.js and Tailwind CSS.",
  logo: bca_logo
},
{
  degree: "Higher Secondary Education – HSC",
  institute: "Savitribai Phule Pune University",
  duration: "2018 – 2020",
  description: "Completed HSC in Commerce stream with core subjects including Accountancy, Economics, Organization of Commerce, and Secretarial Practice. Also studied Information Technology, gaining basic skills in programming, office tools, and computer applications.",
  logo: hsc_logo
},
{
  degree: "Secondary School Certification – SSC",
  institute: "Savitribai Phule Pune University",
  duration: "2017 – 2018",
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

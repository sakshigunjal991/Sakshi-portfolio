import React from 'react'
import './About.css'
import bg_img from '../../assets/bg_img.svg'
import about_img from '../../assets/about_img (2).jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={bg_img} alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={about_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm Sakshi — a frontend developer skilled in building responsive and user-friendly web applications using React.js. I enjoy turning ideas into clean and functional code.</p>
                    <p>I'm passionate about creating meaningful user experiences, exploring modern frameworks, and working on side projects that address real-world challenges.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>03+</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>03+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>01</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
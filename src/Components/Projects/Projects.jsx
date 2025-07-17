import React from 'react'
import './Projects.css'
import bg_img from '../../assets/bg_img.svg'
import Projects_Data from '../../assets/projects_data'
import auro_icon from '../../assets/auro_icon.svg'

const Projects = () => {
  return (
    <div id='project' className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={bg_img} alt="" />
        </div>
        <div className="projects-container">
            {Projects_Data.map((project, index)=>{
                return <div key={index} className="projects-format">
                    <img src={project.p_img} alt={project.p_name} className="projects-img" />
                    <h2>{project.p_name}</h2>
                    <p>{project.p_desc}</p>
                    {/* <div className="projects-readmore">
                        <p>Read More</p>
                        <img src={auro_icon} alt="" />
                    </div> */}
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects
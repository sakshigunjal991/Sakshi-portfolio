import erp_img from '../assets/erp_img.png'
import quick_campus from '../assets/quickcampus_img.png'
import ems_img from '../assets/ems_img.webp'
import tms_img from '../assets/tms_img.webp'
import rs_app_img from '../assets/rs_app_img.webp'
import momo_img from '../assets/momo_img.webp'

const Projects_Data = [
  {
    p_name: "ERP System Interface",
    p_desc: "Developed a responsive ERP dashboard for managing employee tasks, attendance, and departments using React.js, Tailwind CSS, and REST APIs.",
    p_img: erp_img,
  },
  {
    p_name: "Student Management Portal",
    p_desc: "Developed a student management portal using React.js and Tailwind CSS with real-time data integration via REST APIs.",
    p_img: quick_campus,
  },
  {
    p_name: "Employee Management System",
    p_desc: "Built a React.js and Node.js-based web app to manage employee records with full CRUD functionality via REST APIs.",
    p_img: ems_img,
  },
  {
    p_name: "Task Management System",
    p_desc: "Created a task tracking app using React.js and Express.js with features like task creation, updates, and status management.",
    p_img: tms_img,
  },
  {
    p_name: "Royal Shetakari – Farmer Support App",
    p_desc: "Built a React Native app to help farmers check crop prices, nearby markets, and local shops with a simple and user-friendly interface.",
    p_img: rs_app_img,
  },
  {
    p_name: "The Momo Bar – Food Ordering App",
    p_desc: "Built a React Native app for browsing and ordering different types of momos, with real-time order management using Firebase backend.",
    p_img: momo_img,
  }
];

export default Projects_Data;

import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import samir_logo from "../../assets/samir_logo.png";
import underline from "../../assets/underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_icon from "../../assets/menu_icon.svg";
import close_icon from "../../assets/close_icon.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "project",
      "experience",
      "skills",
      "education",
      "contact",
    ];
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenu(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar">
      <AnchorLink className="anchor-link" href="#home">
        <img src={samir_logo} alt="Samir Logo" className="nav-logo" />
      </AnchorLink>

      <img src={menu_icon} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={close_icon}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />

        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About Me" },
          { id: "project", label: "Projects" },
          { id: "experience", label: "Experience" },
          { id: "skills", label: "Skills" },
          { id: "education", label: "Education" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item.id}`}
            >
              <p>{item.label}</p>
            </AnchorLink>
            {menu === item.id && <img src={underline} alt="" />}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

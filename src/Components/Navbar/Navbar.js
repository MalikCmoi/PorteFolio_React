import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { useState } from "react";

import discord from './Images/Discord.svg'
import github from './Images/Github.svg'
import Email from './Images/Email.svg'

export default function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }
  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        <p className="navbar-logo">Malik Tcheboun</p>
      </div>
      <div className={menuIsOpen ? "mobile-menu active active": "mobile-menu"} onClick={openMenu}></div>
      <div className={menuIsOpen ? "navbar-link-container active": "navbar-link-container"}>
        <Link className="navbar-link" to="/">
          acceuil
        </Link>
        <Link className="navbar-link" to="/projects">
          projets
        </Link>
        <a className="navbar-link" href="#contact">
          à propos
        </a>
        <div className="navbar-language-container">
          <p className="languages">FR</p>
          <div className="change-language">
            <button className="lang lang-en">EN</button>
          </div>
        </div>
      </div>
      <div className="reseau">
        <div className="reseau-line"></div>
        <div className="reseau-img">
            <img src={discord} alt="logo discord" />
            <img src={github} alt="logo github" />
            <img src={Email} alt="logo email" />
        </div>
      </div>
    </header>
  );
}

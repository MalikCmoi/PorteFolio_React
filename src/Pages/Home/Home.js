import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import ProjectContainer from "../../Components/ProjectConainer/ProjectContainer";

import malikPicture from "./Images/Malikmemoji.png";
import logo from "./Images/Logo.svg";
import dots from "./Images/Dots.svg";
import firstProject from "./Images/chertnodes.jpg";

import email from "../../Components/Navbar/Images/Email.svg";
import discord from "../../Components/Navbar/Images/Discord.svg";

export default function Home() {
  const [propos, setPropos] = useState({
    finish: false,
    data: [],
  });

  useEffect(() => {
    getApi()
      .then((data) => {
        setPropos({ finish: true, data: data });
      })
      .catch((error) => {
        console.log("Error fetching data from API:", error);
      });
  }, []);

  function getApi() {
    return fetch("http://127.0.0.1/PorteFolioApi/Api.php?propos")
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error fetching data from API:", error);
        throw error;
      });
  }

  let content;
  if (propos.data.length > 0 && propos.finish) {
    content = <p>{propos.data[0].text}</p>
  }

  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-text">
            <h1 className="hero-title">
              <strong>Etudiant</strong> développeur spécialisé dans le{" "}
              <strong>front end</strong>
            </h1>
            <p className="hero-descr">
              Je crée des sites et applications web responsives où les{" "}
              <span>technologies</span> rencontrent la <span>créativité</span>
            </p>
            <Link className="button btn-contact" to="contact">
              Contact ME <span>##</span>
            </Link>
          </div>
          <div className="hero-images">
            <img className="hero-logo" src={logo} alt="Logo" />
            <img
              className="hero-malik"
              src={malikPicture}
              alt="Picture malik"
            />
            <img className="hero-dots" src={dots} alt="dots" />
            <p className="to-work">
              <span></span> Projet en cours: Portefolio
            </p>
          </div>
        </div>
        <div className="citation-container">
          <p className="entrecote entre1">"</p>
          <h2 className="citation">
            Toute technologie suffisamment avancée est indiscernable de la
            magie.
          </h2>
          <p className="entrecote entre2">"</p>
        </div>
      </div>
      <div className="section-container project">
        <div className="title-section-container">
          <h2 className="title-section">Projets</h2>
          <Link to="projects">{"voir plus ~~>"}</Link>
        </div>
        <ProjectContainer></ProjectContainer>
      </div>

      <div className="section-container skills">
        <div className="title-section-container">
          <h2 className="title-section">Skills</h2>
        </div>
        <div className="skills-container">
          <div className="decoration">
            <img src={dots} alt="" />
            <img src={dots} alt="" />
            <img src={dots} alt="" />
            <img src={logo} alt="" />
          </div>

          <div className="skills-flex">
            <div className="skills-bloc">
              <p className="skills-bloc-title">Languages</p>
              <div className="skills-bloc-list">
                <ul>
                  <li>Javascript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Lua</li>
                </ul>
              </div>
            </div>
            <div className="skills-bloc">
              <p className="skills-bloc-title">Autres</p>
              <div className="skills-bloc-list">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>SASS</li>
                </ul>
              </div>
            </div>
            <div className="skills-bloc">
              <p className="skills-bloc-title">Base de données</p>
              <div className="skills-bloc-list">
                <ul>
                  <li>PostgreSQL</li>
                  <li>MySql</li>
                </ul>
              </div>
            </div>
            <div className="skills-bloc">
              <p className="skills-bloc-title">Frameworks / Librairies</p>
              <div className="skills-bloc-list">
                <ul>
                  <li>React</li>
                  <li>Jquery</li>
                  <li>react-spring</li>
                  <li>GSAP</li>
                  <li>Three.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container about">
        <div className="title-section-container">
          <h2 className="title-section">A propos</h2>
        </div>

        <div className="about-container">
          <div className="about-text">
            {content}
            <br />
            {/* <Link className="button" to="about">
              Viaw all -{">"}
            </Link> */}
          </div>
          <img src={malikPicture} alt="malik picture" className="about-img" />
        </div>
      </div>
      <div className="section-container contact">
        <div className="title-section-container">
          <h2 className="title-section">contact</h2>
        </div>
        <div id="contact" className="container-contact">
          <p>Tous les liens pour me contacter n'hésiter pas.</p>
          <div className="contact-link">
            <p className="contact-title">Envoyez moi un message</p>
            <div className="contact-div-link">
              <img src={discord} alt="" />
              <p>Cmoi#1828</p>
            </div>
            <div className="contact-div-link">
              <img src={email} alt="" />
              <p>malik.tcheboun@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

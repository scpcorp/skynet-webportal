import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

import { FooterOrb, FooterCube, Built } from "../../svg";
import "./Footer.scss";
import { Mailing } from "..";

export default function Footer() {
  return (
    <Reveal effect="active">
      <footer className="footer">
        <div className="width">
          <Fade duration={700} distance="40px" bottom>
            <div className="footer-column">
              <Built width={120} height={120} preserveAspectRatio={"xMinYMin"} />
            </div>
          </Fade>

          <div className="footer-column">
            <Fade duration={700} distance="40px" bottom>
              <h2>Portal List</h2>

              <ul>
                <li>
                  <a href="https://givename.net" target="_blank" rel="noopener noreferrer">
                    portal_link.net
                  </a>
                </li>
                <li>
                  <a href="https://givename.net" target="_blank" rel="noopener noreferrer">
                    portal_link.net
                  </a>
                </li>
                <li>
                  <a href="https://givename.tech" target="_blank" rel="noopener noreferrer">
                    portal_link.net
                  </a>
                </li>
                <li>
                  <a href="https://givename.com" target="_blank" rel="noopener noreferrer">
                  portal_link.net
                  </a>
                </li>
              </ul>
            </Fade>
          </div>

          <div className="footer-column">
            <Fade duration={700} distance="40px" bottom>
              <h2>Developers</h2>

              <ul>
                <li>
                  <a href="https://givename.net" target="_blank" rel="noopener noreferrer">
                    Overview
                  </a>
                </li>      
                <li>
                  <a
                    href="https://github.com/scpcorp/skynet-webportal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portal Setup
                  </a>
                </li>
                <li>
                  <a
                    href="https://scpri.me/software/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Storage Provider Setup
                  </a>
                </li>
              </ul>
            </Fade>
          </div>

          <div className="footer-column">
            <Fade duration={700} distance="40px" bottom>
              <h2>Social</h2>
              <ul>
                <li>
                  <a href="https://twitter.com/prime_sia" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/XxTjjCw" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                </li>
              </ul>
            </Fade>
          </div>

          <div className="footer-column">
            <Fade duration={700} distance="40px" bottom>
              <h2>Links</h2>

              <ul>
                <li>
                  <a href="https://scpri.me" target="_blank" rel="noopener noreferrer">
                    ScPrime
                  </a>
                </li>
                </ul>
            </Fade>
          </div>

          <div className="footer-column">
            <Fade duration={700} distance="40px" bottom>
              <h2>Stay up to date</h2>
              <Mailing id="mailing-bottom" light />
            </Fade>
          </div>
        </div>

        <FooterCube className="footer-cube fadeInUp delay2" />
        <FooterOrb className="footer-orb fadeInUp delay2" />
      </footer>
    </Reveal>
  );
}

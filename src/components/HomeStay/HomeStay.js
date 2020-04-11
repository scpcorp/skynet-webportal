import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import "./HomeStay.scss";
import { SocialLink, CircleIcon, Mailing } from "../";
import { SmallOrb, Pyramid } from "../../svg";

export default class HomeStay extends Component {
  render() {
    return (
      <div className="home-stay">
        <header className="home-stay-header">
          <Fade duration={700} distance="40px" bottom>
            <div className="home-stay-divider">
            </div>
          </Fade>
        </header>

        <div className="home-stay-flex">
          <div className="home-stay-left">
            <header className="home-stay-header">
              <Fade duration={700} distance="40px" bottom>
                <h2>
                  Stay up to date with
                  <br />
                  <strong>Public Portal updates</strong>
                </h2>
              </Fade>
            </header>
            <Fade duration={700} distance="40px" bottom>
              <Mailing id="mailing-top" />
            </Fade>
          </div>

          <ul className="home-stay-right">
            <Fade duration={700} distance="40px" bottom>
              <li>
                <SocialLink
                  icon="github"
                  url="https://github.com/scpcorp/skynet-webportal"
                  greenText="View project on Github"
                  title={<strong>/Public-Webportal</strong>}
                />
              </li>
            </Fade>
            <Fade duration={700} distance="40px" bottom>
              <li>
                <SocialLink
                  icon="discord"
                  url="https://discord.gg/VKkHeBc"
                  greenText="View project on Discord"
                  title={<strong>/ScPrime</strong>}
                />
              </li>
            </Fade>
            <Fade duration={700} distance="40px" bottom>
              <li>
                <SocialLink
                  icon="twitter"
                  url="https://twitter.com/prime_sia"
                  greenText="View project on Twitter"
                  title={<strong>@ScPrimeTech</strong>}
                />
              </li>
            </Fade>
          </ul>
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Fade from "react-reveal/Fade";

import useStats, { AVAILABLE_STATS } from "./useStats";
import "./HomeNetwork.scss";
import { CircleIcon, FAQ } from "../";
import { SmallOrb, LogoSolid, Deco6, Deco7, Deco8 } from "../../svg";

const STATS_MAP = [
  { name: "TB Used", key: AVAILABLE_STATS.STORAGE_USED_TB },
  { name: "TB Capacity", key: AVAILABLE_STATS.NETWORK_CAPACITY_TB },
  { name: "Hosts", key: AVAILABLE_STATS.ONLINE_HOSTS_COUNT },


];

export default function HomeNetwork() {
  const [visible, setVisible] = useState(false);
  const stats = useStats();
  const onChange = (isVisible) => {
    if (isVisible && !visible) {
      setVisible(true);
    }
  };

  return (
    <div className="home-network">
      <header className="home-network-header">
        <Fade duration={700} distance="40px" bottom>
          <div className="home-network-divider">
            <CircleIcon>
              <LogoSolid />
            </CircleIcon>
            <SmallOrb />
            <div className="divider"></div>
            <div className="small-divider"></div>
          </div>
        </Fade>
        <Fade duration={700} distance="40px" bottom>
          <h2>
            Scprime
            <br />
            <strong>Network</strong>
          </h2>
        </Fade>
      </header>

      <Fade duration={700} distance="40px" bottom>
        <VisibilitySensor onChange={onChange} partialVisibility offset={{ bottom: 100 }} scrollThrottle={50}>
          <React.Fragment>
            <div className="home-network-stats">
              {STATS_MAP.map((stat, i) => (
                <React.Fragment key={i}>
                  <div key={i} className="home-network-stat">
                    <div className="inner">
                      {visible && <StatValue stat={stat} value={stats[stat.key]} />}
                      <span className="network-stat-name">{stat.name}</span>
                    </div>
                  </div>
                  {i !== 4 && <div className="divider" />}
                </React.Fragment>
              ))}
              <Deco6 className="deco-6" />
              <Deco7 className="deco-7" />
              <Deco8 className="deco-8" />
            </div>
            <div className="home-network-stats-provider">
            {" "}
              <a href="https://siastats.info" target="_blank" rel="noopener noreferrer">

              </a>
            </div>
          </React.Fragment>
        </VisibilitySensor>
      </Fade>

      <div className="home-network-columns">
        <div className="home-network-column left">
          <Fade duration={700} distance="40px" bottom>
            <p>
              <strong>ScPrime Public Webportals</strong> are low cost servers that sit between everyday users,
              enabling them to access Public Portals content without needing to operate any special software. As Publiclink are
              generated, they can be shared with anyone to retrieve data from any Webportal. The original uploader does
              not need to stay online in order for the file to remain available. The ScPrime network serves as the backend
              storage layer for Publc Portals and handles all of the pinning, guaranteeing both high speeds and excellent
              uptime.
            </p>
          </Fade>

          <Fade duration={700} distance="40px" bottom>
            <p>
              <strong>ScPrime</strong> is the decentralized cloud storage platform. No signups, no servers, no
              trusted third parties. Scprime leverages blockchain technology to create a data storage marketplace that is
              more robust and more affordable than traditional cloud storage providers.
            </p>

            <p>
              <a className="more" href="https://scpri.me" target="_blank" rel="noopener noreferrer">
                Learn more about Scprime
              </a>
            </p>
          </Fade>
        </div>
        <div className="home-network-column">
          <Fade duration={700} distance="40px" bottom>
            <FAQ title="How do I use Public Portals?">
              <p>
                Anyone can access files that have been uploaded to Public Portal as long as they possess the corresponding
                Publiclinks. You can use any Webportal to download files!

              </p>
            </FAQ>
          </Fade>

          <Fade duration={700} distance="40px" bottom>
            <FAQ title="How do I integrate Public Portals into my app?">
              <p>
                Applications can be deployed in under a minute and be immediately available globally. Public Portal includes an
                API and SDKs which integrate seamlessly with existing applications.
                <a
                  href="https://skynet.helpdocs.io/article/hrshqsn9wz-integrating-skynet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more read-more"
                >
                  read more
                </a>
              </p>
            </FAQ>
          </Fade>

          <Fade duration={700} distance="40px" bottom>
            <FAQ title="How fast are Public Portals?">
              <p>
                &apos;s speeds rival centralized providers and surpass all decentralized offerings. A typical
                Public Portal download starts in under 500 ms and can stream at rates as high as 1 Gbps!
                <a
                  href="https://skynet.helpdocs.io/article/430teoxgqc-skynet-speed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more read-more"
                >
                  read more
                </a>
              </p>
            </FAQ>
          </Fade>

          <Fade duration={700} distance="40px" bottom>
            <FAQ title="How much does it cost to run a Webportal?">
              <p>
                Storage costs 10x lower than centralized providers and bandwidth costs are 100x lower – without
                sacrificing performance or reliability.
              </p>
            </FAQ>
          </Fade>

          <Fade duration={700} distance="40px" bottom>
            <a className="more more-faq" href="https://scpri.me" target="_blank" rel="noopener noreferrer">
              View more FAQ
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

function StatValue({ stat, value }) {
  const displayDollars = stat.currency && value >= 1;
  const displayCents = stat.currency && value < 1;

  return (
    <h3>
      {displayDollars && "$"}
      <CountUp end={displayCents ? value * 100 : value} duration={3.2} decimals={displayDollars ? 2 : 0} />
      {displayCents && "¢"}
    </h3>
  );
}

StatValue.propTypes = {
  stat: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.bool,
  }).isRequired,
  value: PropTypes.number.isRequired,
};

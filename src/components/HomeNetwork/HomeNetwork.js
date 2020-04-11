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
              <strong>ScPrime Public Access portals</strong> provide access to the SCP network without installing the current open source wallet software. Upload links can be shared with anyone to retrieve data from any portal. Our product model is building a truly distributed S3-compatible cloud storage for Enterprise, yet a vibrant and active community also uses the network for backup and inexpensive storage. Please follow any specific Terms of Service as posted by portal operators.

            </p>
          </Fade>

          <Fade duration={700} distance="40px" bottom>
            <p>
              <a className="more" href="https://scpri.me" target="_blank" rel="noopener noreferrer">
                Learn more about Scprime
              </a>
            </p>
          </Fade>
        </div>
        <div className="home-network-column">
          <Fade duration={700} distance="40px" bottom>

          </Fade>

          <Fade duration={700} distance="40px" bottom>

          </Fade>

          <Fade duration={700} distance="40px" bottom>

          </Fade>

          <Fade duration={700} distance="40px" bottom>

          </Fade>

          <Fade duration={700} distance="40px" bottom>

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

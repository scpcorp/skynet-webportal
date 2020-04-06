import React from "react";
import PropTypes from "prop-types";

export default function LogoSolid({ className }) {
  return (
    <svg className={className} width={0} height={0} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

    <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
    fill="#2074ee" stroke="#2074ee">

    <path d="M82 286 l-37 -34 -3 -126 -4 -126 32 0 c31 0 32 1 28 35 l-4 35 49 0
c85 0 137 49 137 130 0 36 -6 48 -39 81 -32 33 -45 39 -80 39 -33 0 -49 -7
-79 -34z"/>

    </g>
    </svg>
  );
}

LogoSolid.propTypes = {
  className: PropTypes.string,
};

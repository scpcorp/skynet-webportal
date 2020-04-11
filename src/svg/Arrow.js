import React from "react";
import PropTypes from "prop-types";

export default function Arrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 15 7" width={15} height={7} xmlns="http://www.w3.org/2000/svg">
    
    </svg>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
};

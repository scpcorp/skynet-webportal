import React from "react";

export default function Deco5(props) {
  return (
    <svg width={97} height={95} viewBox="0 0 97 95" {...props}>
      <defs>
        <filter id="prefix__a" width="133.3%" height="136.1%" x="-16.7%" y="-18.1%" filterUnits="objectBoundingBox">
          <feMorphology in="SourceAlpha" operator="dilate" radius={1} result="shadowSpreadOuter1" />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feMorphology in="SourceAlpha" radius={1} result="shadowInner" />
          <feOffset in="shadowInner" result="shadowInner" />
          <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={4} />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.341176471 0 0 0 0 0.709803922 0 0 0 0 0.376470588 0 0 0 0.3 0"
          />
        </filter>

      </defs>
      <g fill="none" fillRule="evenodd">
      
        <g strokeLinejoin="round" transform="rotate(-20 75.593 .85)">
          <use fill="#2074ee" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <use stroke="#2074ee" strokeWidth={2} xlinkHref="#prefix__b" />
        </g>
      </g>
    </svg>
  );
}

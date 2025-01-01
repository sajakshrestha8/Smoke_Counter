import React from "react";
import Svg, { Path, Line } from "react-native-svg";

const AboutApp = ({
  width = 24,
  height = 24,
  fill = "#7e7e7e",
  secondaryFill = "none",
}) => {
  return (
    <Svg fill={fill} width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Z"
        fill={secondaryFill}
        strokeWidth={2}
      />
      <Line
        x1="12.05"
        y1="8"
        x2="11.95"
        y2="8"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      />
      <Path
        d="M12,13v3M3,12a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9Z"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
};

export default AboutApp;

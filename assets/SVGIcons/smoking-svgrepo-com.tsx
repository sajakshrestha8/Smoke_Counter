import React from "react";
import Svg, { Path, Polygon, Rect, Ellipse, Circle, G } from "react-native-svg";

const SmokeIcon: React.FC = () => {
  return (
    <Svg id="Layer_1" viewBox="0 0 496.159 496.159" height={41} width={41}>
      <Path
        fill="#EDC92F"
        d="M248.083,0.003C111.071,0.003,0,111.063,0,248.085c0,137.001,111.07,248.07,248.083,248.07 c137.006,0,248.076-111.069,248.076-248.07C496.159,111.062,385.089,0.003,248.083,0.003z"
      />
      <Path
        fill="#EFEEE4"
        d="M298.379,274.588l-18.122-45.905c-10.712-1.327-54.672-1.299-65.38,0.043l12.368,49.79l24.449,48.423 l-25.519,48.104l59.519-0.074l35.455-74.576L298.379,274.588z"
      />
      <G>
        <Polygon
          fill="#E2E1D9"
          points="279.194,264.886 280.257,228.683 268.694,270.386 295.694,281.886"
        />
        <Polygon
          fill="#E2E1D9"
          points="275.194,359.386 285.694,374.969 293.444,358.636"
        />
        <Path
          fill="#E2E1D9"
          d="M288.462,305.228l-39.222-22.106l-0.713-31.377c0,0-28.621-23.648-33.65-23.018l25.806,25.157 l-13.438,24.632l49.807,37.409l-50.877,59.118l65.139-54.839l29.835-19.812L288.462,305.228z"
        />
      </G>
      <Rect
        x="214.82"
        y="50.399"
        fill="#E79E2F"
        width="65.38"
        height="179.46"
      />
      <Polygon
        fill="#D88D2B"
        points="214.756,50.42 214.878,229.875 280.259,229.83"
      />
      <Polygon
        fill="#CC8127"
        points="214.756,50.42 214.878,229.875 241.396,229.83"
      />
      <Ellipse cx="247.49" cy="50.379" rx="32.653" ry="9.895" fill="#EDD48E" />
      <Ellipse cx="247.49" cy="50.379" rx="20.887" ry="6.329" fill="#E8CB70" />
      <G>
        <Circle fill="#E5AA5C" cx="272.78" cy="218.629" r="3.686" />
        <Circle fill="#E5AA5C" cx="255.64" cy="218.639" r="3.685" />
        <Circle fill="#E5AA5C" cx="238.51" cy="218.649" r="3.686" />
        <Circle fill="#E5AA5C" cx="221.37" cy="218.669" r="3.685" />
        <Circle fill="#E5AA5C" cx="272.76" cy="186.879" r="3.686" />
        <Circle fill="#E5AA5C" cx="255.62" cy="186.899" r="3.685" />
        <Circle fill="#E5AA5C" cx="238.49" cy="186.909" r="3.685" />
        <Circle fill="#E5AA5C" cx="221.35" cy="186.919" r="3.685" />
        <Circle fill="#E5AA5C" cx="272.74" cy="155.139" r="3.686" />
        <Circle fill="#E5AA5C" cx="255.6" cy="155.149" r="3.685" />
        <Circle fill="#E5AA5C" cx="238.46" cy="155.159" r="3.686" />
        <Circle fill="#E5AA5C" cx="221.33" cy="155.169" r="3.685" />
        <Circle fill="#E5AA5C" cx="264.41" cy="202.969" r="3.685" />
        <Circle fill="#E5AA5C" cx="247.27" cy="202.979" r="3.685" />
        <Circle fill="#E5AA5C" cx="230.14" cy="202.999" r="3.685" />
        <Circle fill="#E5AA5C" cx="264.39" cy="171.229" r="3.686" />
        <Circle fill="#E5AA5C" cx="247.25" cy="171.239" r="3.686" />
        <Path
          fill="#E5AA5C"
          d="M230.111,167.563c-2.036,0.002-3.684,1.653-3.683,3.689c0.001,2.035,1.653,3.683,3.687,3.682 c2.035-0.001,3.686-1.651,3.683-3.689C233.798,169.213,232.147,167.561,230.111,167.563z"
        />
        {/* Add the remaining <Circle>, <Polygon>, and <Rect> elements similarly */}
      </G>
    </Svg>
  );
};

export default SmokeIcon;

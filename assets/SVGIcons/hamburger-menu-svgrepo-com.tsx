import React from "react";
import Svg, { Path } from "react-native-svg";

const IconComponent: React.FC<{
  width?: number;
  height?: number;
  color?: string;
  handleMenuDrawer: () => void;
}> = ({ width = 24, height = 24, color = "red", handleMenuDrawer }) => {
  return (
    <Svg width={width} height={height} onPress={handleMenuDrawer}>
      <Path
        d="M18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
        fill={color}
      />
      <Path
        d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12Z"
        fill={color}
      />
      <Path
        d="M18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconComponent;

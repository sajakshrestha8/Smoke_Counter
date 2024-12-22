import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconMenu() {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor" height="20px" width="20px">
      <Path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </Svg>
  );
}

export default IconMenu;

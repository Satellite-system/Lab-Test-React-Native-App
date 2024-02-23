import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UploadSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#10217D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5m0 0 5 5m-5-5v12"
    />
  </Svg>
);
export default UploadSVG;

import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    viewBox="0 0 7 7"
    fill="none"
    {...props}
  >
    <Path
      fill="#10217D"
      d="M5.293 2.968 3.318.89a.54.54 0 0 1-.14-.37.54.54 0 0 1 .146-.367A.488.488 0 0 1 3.673 0a.487.487 0 0 1 .352.148l2.828 2.974A.527.527 0 0 1 7 3.494a.548.548 0 0 1-.147.371L4.025 6.84A.5.5 0 0 1 3.669 7a.479.479 0 0 1-.357-.154.529.529 0 0 1-.147-.376.55.55 0 0 1 .153-.374L5.293 4.02H.5a.488.488 0 0 1-.354-.154A.54.54 0 0 1 0 3.494a.54.54 0 0 1 .146-.372.488.488 0 0 1 .354-.154h4.793Z"
    />
  </Svg>
)
export default SvgComponent

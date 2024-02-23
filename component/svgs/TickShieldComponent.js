import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const TickShieldComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M5.802.053a.4.4 0 0 1 .396 0l5.6 3.2A.4.4 0 0 1 12 3.6v.576a8.12 8.12 0 0 1-5.89 7.808.4.4 0 0 1-.22 0A8.121 8.121 0 0 1 0 4.176V3.6a.4.4 0 0 1 .202-.347l5.6-3.2Zm-.144 8.516 3.454-4.32-.624-.499-2.946 3.681-2.086-1.738-.512.614L5.658 8.57Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default TickShieldComponent

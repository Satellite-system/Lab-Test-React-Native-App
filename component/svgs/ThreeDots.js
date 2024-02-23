import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ThreeDotsSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={3}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#0D99FF"
      d="M1.184 2.368a1.184 1.184 0 1 1 0-2.368 1.184 1.184 0 0 1 0 2.368Zm1.184 11.448a1.184 1.184 0 1 0-2.368 0 1.184 1.184 0 0 0 2.368 0Zm0-6.316A1.184 1.184 0 1 0 0 7.5a1.184 1.184 0 0 0 2.368 0Z"
    />
  </Svg>
)
export default ThreeDotsSVG

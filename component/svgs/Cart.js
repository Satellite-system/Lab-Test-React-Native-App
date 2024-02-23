import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      fill="#10217D"
      d="M14.167 15a1.66 1.66 0 0 0-1.667 1.667A1.666 1.666 0 1 0 14.167 15ZM.833 1.667v1.666H2.5l3 6.325L4.367 11.7c-.125.233-.2.508-.2.8a1.667 1.667 0 0 0 1.666 1.667h10V12.5h-9.65a.208.208 0 0 1-.208-.208c0-.042.008-.075.025-.1l.75-1.359h6.208c.625 0 1.175-.35 1.459-.858L17.4 4.583c.058-.133.1-.275.1-.416a.834.834 0 0 0-.833-.834H4.342l-.784-1.666M5.833 15a1.66 1.66 0 0 0-1.666 1.667A1.666 1.666 0 1 0 5.833 15Z"
    />
  </Svg>
)
export default SvgComponent

import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.167 16 1 8.5m0 0L10.167 1M1 8.5h22"
    />
  </Svg>
)
export default BackComponent

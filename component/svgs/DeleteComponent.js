import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DeleteComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#10217D"
      d="M5.833 17.5c-.458 0-.85-.163-1.177-.49a1.602 1.602 0 0 1-.49-1.177V5h-.833V3.333H7.5V2.5h5v.833h4.167V5h-.834v10.833c0 .459-.163.851-.49 1.178-.326.326-.719.49-1.176.489H5.833ZM14.167 5H5.833v10.833h8.334V5ZM7.5 14.167h1.667v-7.5H7.5v7.5Zm3.333 0H12.5v-7.5h-1.667v7.5Z"
    />
  </Svg>
)
export default DeleteComponent

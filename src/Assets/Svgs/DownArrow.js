import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownArrow = props => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 1024 1024"
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
      fill="#000000"
    />
  </Svg>
);
export default DownArrow;

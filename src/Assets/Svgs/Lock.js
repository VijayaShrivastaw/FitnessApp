import * as React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Svg, {G, Path} from 'react-native-svg';
const Lock = props => (
  <Svg
    // fill="rgba(253, 192, 192, 0.76)"
    fill={'rgba(0, 0, 0, 0.65)'}
    height={responsiveHeight(15)}
    width={responsiveWidth(25)}
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 330 330"
    xmlSpace="preserve">
    <G id="XMLID_504_">
      <Path
        id="XMLID_505_"
        d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M207.481,219.356l-42.5,42.5 c-2.929,2.929-6.768,4.394-10.606,4.394s-7.678-1.465-10.606-4.394l-21.25-21.25c-5.858-5.858-5.858-15.354,0-21.213 c5.857-5.858,15.355-5.858,21.213,0l10.644,10.643l31.894-31.893c5.857-5.858,15.355-5.858,21.213,0 C213.34,204.002,213.34,213.498,207.481,219.356z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
      />
    </G>
  </Svg>
);
export default Lock;

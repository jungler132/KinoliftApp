import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowSVG(props) {
  return (
    <Svg
      width={12}
      height={10}
      viewBox="0 0 12 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.462.809A.5.5 0 0011 .5H1a.5.5 0 00-.354.854l5 5a.5.5 0 00.708 0l5-5a.5.5 0 00.108-.545z"
        fill="#212121"
      />
    </Svg>
  );
}

export default ArrowSVG;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusSVG(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.75 12h16.5M12 3.75v16.5"
        stroke="#BDBDBD"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlusSVG;

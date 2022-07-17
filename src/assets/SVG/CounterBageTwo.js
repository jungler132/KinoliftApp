import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function CounterBadgeTwoSVG(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.5}
        y={0.5}
        width={19}
        height={19}
        rx={3.5}
        fill="#FAFAFA"
        stroke="#BDBDBD"
      />
      <Path
        d="M10.678 14.332V12.7H6.79v-1.164l3.396-5.58h1.776v5.676h1.14V12.7h-1.14v1.632h-1.284zm-2.736-2.7h2.736v-4.44h-.084l-2.652 4.44z"
        fill="#BDBDBD"
      />
    </Svg>
  );
}

export default CounterBadgeTwoSVG;

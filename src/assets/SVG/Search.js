import * as React from 'react';
import Svg, {G, Rect, Circle, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SearchSVG(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="15 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_dddd_352_529)">
        <Rect x={32} y={8} width={40} height={40} rx={16} fill="#fff" />
        <Rect
          x={32.5}
          y={8.5}
          width={39}
          height={39}
          rx={15.5}
          stroke="#E7E7E7"
        />
      </G>
      <G
        opacity={0.75}
        stroke="#98A3B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Circle cx={50.3333} cy={26.3336} r={5.83333} />
        <Path d="M54.5 30.5l5 5" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SearchSVG;

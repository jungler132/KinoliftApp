import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';

function FilterSVG(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="15 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_dddd_352_521)">
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
        <Path d="M50.431 32.989h-6.028" />
        <Path
          clipRule="evenodd"
          d="M59.598 32.989a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z"
        />
        <Path d="M53.569 23.218h6.03" />
        <Path
          clipRule="evenodd"
          d="M44.402 23.218a2.4 2.4 0 104.799.002 2.4 2.4 0 00-4.799-.002z"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default FilterSVG;

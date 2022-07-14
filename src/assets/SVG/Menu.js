import * as React from 'react';
import Svg, {G, Rect, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MenuSVG(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="15 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_dddd_352_513)">
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
      <G opacity={0.75} fill="#98A3B1">
        <Rect
          x={42.7139}
          y={20.5714}
          width={18.5714}
          height={1.85714}
          rx={0.928571}
        />
        <Rect
          x={42.7139}
          y={27.0714}
          width={13.9286}
          height={1.85714}
          rx={0.928571}
        />
        <Rect
          x={42.7139}
          y={33.5714}
          width={18.5714}
          height={1.85714}
          rx={0.928571}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default MenuSVG;

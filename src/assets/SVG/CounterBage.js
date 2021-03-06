import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function CounterBadgeSVG(props) {
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
        d="M12.666 7.132h-3.72l-.216 2.964h.084a3.3 3.3 0 01.3-.444c.104-.136.224-.252.36-.348.136-.096.292-.168.468-.216.176-.056.384-.084.624-.084.36 0 .692.06.996.18.312.12.58.292.804.516.232.224.412.5.54.828.128.32.192.684.192 1.092 0 .416-.068.8-.204 1.152-.128.352-.32.656-.576.912a2.761 2.761 0 01-.948.588 3.62 3.62 0 01-1.26.204c-.376 0-.708-.044-.996-.132a3.04 3.04 0 01-.768-.324 3.397 3.397 0 01-.576-.48 5.563 5.563 0 01-.432-.564l.984-.78c.104.168.212.32.324.456.112.136.24.256.384.36.144.104.304.184.48.24.184.056.392.084.624.084.496 0 .876-.136 1.14-.408.272-.272.408-.648.408-1.128v-.144c0-.48-.136-.856-.408-1.128-.264-.272-.644-.408-1.14-.408-.36 0-.648.068-.864.204-.216.136-.4.288-.552.456l-1.116-.156.312-4.668h4.752v1.176z"
        fill="#BDBDBD"
      />
    </Svg>
  );
}

export default CounterBadgeSVG;

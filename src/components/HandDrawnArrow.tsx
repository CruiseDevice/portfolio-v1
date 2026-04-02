import styled from 'styled-components';

const ArrowSVG = styled.svg<{ $color: string; $rotation: number }>`
  position: absolute;
  width: 40px;
  height: 40px;
  fill: none;
  stroke: ${props => props.$color};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(${props => props.$rotation}deg);
  opacity: 0.7;
  pointer-events: none;
`;

interface HandDrawnArrowProps {
  from: 'left' | 'right';
  rotation?: number;
  color?: 'red' | 'blue' | 'green' | 'pencil';
}

export function HandDrawnArrow({ from, rotation = 0, color = 'pencil' }: HandDrawnArrowProps) {
  const colorMap = {
    red: '#A52A2A',
    blue: '#1E90FF',
    green: '#228B22',
    pencil: '#6B6560'
  };

  return (
    <ArrowSVG $color={colorMap[color]} $rotation={rotation} viewBox="0 0 40 40">
      <path d="M 5 35 Q 20 20, 35 5" />
      <path d="M 28 8 L 35 5 L 32 12" />
    </ArrowSVG>
  );
}

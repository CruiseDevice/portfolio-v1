import styled from 'styled-components';
import { ReactElement } from 'react';

const UnderlineWrapper = styled.span<{ $color: string; $wave: boolean }>`
  position: relative;
  display: inline;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: ${props => props.$wave ? '3px' : '2px'};
    background: ${props => props.$color};
    ${props => props.$wave && `
      border-radius: 50%;
      transform: scaleY(0.5);
    `}
    opacity: 0.6;
    transform-origin: left center;
  }
`;

interface HandUnderlineProps {
  children: ReactElement;
  color?: 'red' | 'blue' | 'green' | 'pencil';
  wave?: boolean;
}

export function HandUnderline({ children, color = 'pencil', wave = false }: HandUnderlineProps) {
  const colorMap = {
    red: '#A52A2A',
    blue: '#1E90FF',
    green: '#228B22',
    pencil: '#6B6560'
  };

  return (
    <UnderlineWrapper $color={colorMap[color]} $wave={wave}>
      {children}
    </UnderlineWrapper>
  );
}

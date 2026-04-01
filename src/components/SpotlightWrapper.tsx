import React from 'react';
import styled from 'styled-components';
import { useMousePosition } from '../hooks/useMousePosition';

const SpotlightContainer = styled.div<{ $mouseX: number; $mouseY: number }>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle 150px at ${({ $mouseX }) => $mouseX}% ${({ $mouseY }) => $mouseY}%',
      rgba(139, 69, 19, 0.08),
      transparent 100%
    );
    pointer-events: none;
    transition: background 0.3s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      display: none;
    }
  }
`;

interface SpotlightWrapperProps {
  children: React.ReactNode;
}

export function SpotlightWrapper({ children }: SpotlightWrapperProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { relativeX, relativeY } = useMousePosition(ref);

  return (
    <SpotlightContainer ref={ref} $mouseX={relativeX} $mouseY={relativeY}>
      {children}
    </SpotlightContainer>
  );
}

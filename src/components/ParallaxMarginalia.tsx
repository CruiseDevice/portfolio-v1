import styled from 'styled-components';
import { useParallax } from '../hooks/useParallax';
import { Marginalia, MarginaliaProps } from './Marginalia';

const ParallaxWrapper = styled.div<{ $offset: number }>`
  position: absolute;
  ${props => props.$offset !== 0 ? `
    transform: translateY(${props.$offset}px);
    transition: transform 0.1s linear;
  ` : ''}
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }

  /* Re-enable pointer events for the marginalia itself */
  & > * {
    pointer-events: auto;
  }
`;

interface ParallaxMarginaliaProps extends MarginaliaProps {
  speed?: number; // Parallax speed (0.1 = slow, 0.5 = medium, 1.0 = normal)
}

export function ParallaxMarginalia({
  speed = 0.2,
  ...marginaliaProps
}: ParallaxMarginaliaProps) {
  const offset = useParallax(speed);

  return (
    <ParallaxWrapper $offset={offset}>
      <Marginalia {...marginaliaProps} position="parallax" />
    </ParallaxWrapper>
  );
}

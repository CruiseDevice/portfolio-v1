import styled from 'styled-components';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { SCROLL_THRESHOLD } from '../constants/scroll';

const Wrapper = styled.div<{ $isVisible: boolean; $delay?: number }>`
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transform: translateY(${({ $isVisible }) => $isVisible ? '0' : '12px'});
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${({ $delay }) => $delay ? `${$delay}ms` : '0'};

  @media (prefers-reduced-motion: reduce) {
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    transform: none;
    transition-delay: 0ms;
  }
`;

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useFadeInOnScroll(SCROLL_THRESHOLD);

  return (
    <Wrapper ref={ref} $isVisible={isVisible} $delay={delay}>
      {children}
    </Wrapper>
  );
}

export default FadeInSection;

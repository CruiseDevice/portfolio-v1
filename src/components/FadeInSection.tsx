import styled from 'styled-components';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { SCROLL_THRESHOLD } from '../constants/scroll';

const Wrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transform: translateY(${({ $isVisible }) => $isVisible ? '0' : '8px'});
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useFadeInOnScroll(SCROLL_THRESHOLD);

  return (
    <Wrapper ref={ref} $isVisible={isVisible}>
      {children}
    </Wrapper>
  );
}

export default FadeInSection;

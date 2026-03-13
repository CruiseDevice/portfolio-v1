import styled from 'styled-components';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Wrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transform: translateY(${({ $isVisible }) => $isVisible ? '0' : '20px'});
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useFadeInOnScroll(0.1);

  return (
    <Wrapper ref={ref} $isVisible={isVisible}>
      {children}
    </Wrapper>
  );
}

export default FadeInSection;

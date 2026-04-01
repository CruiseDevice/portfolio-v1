import styled from 'styled-components';
import { useParallax } from '../hooks/useParallax';

const ParallaxQuoteContainer = styled.blockquote<{ $offset: number }>`
  grid-column: 1 / -1;
  margin: ${({ theme }) => theme.spacing.section} 0;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  border-top: 2px solid ${({ theme }) => theme.colors.border.medium};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border.medium};
  transform: translateY(${props => props.$offset}px);
  transition: transform 0.1s linear;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }

  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: ${({ theme }) => theme.typography.fontFamily.display};
    font-size: 80px;
    color: ${({ theme }) => theme.colors.accent.primary};
    opacity: 0.3;
  }
`;

const QuoteText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.hero};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin: 0;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
`;

const QuoteAttribution = styled.cite`
  display: block;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-style: normal;

  &::before {
    content: '— ';
  }
`;

interface PullQuoteProps {
  text: string;
  attribution?: string;
}

export function PullQuote({ text, attribution }: PullQuoteProps) {
  const offset = useParallax(0.3); // Slower = more gravitas

  return (
    <ParallaxQuoteContainer $offset={offset}>
      <QuoteText>"{text}"</QuoteText>
      {attribution && <QuoteAttribution>{attribution}</QuoteAttribution>}
    </ParallaxQuoteContainer>
  );
}

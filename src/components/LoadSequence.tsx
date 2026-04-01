import React from 'react';
import styled from 'styled-components';

interface LoadSequenceItem {
  id: string;
  delay: number;
}

const SequencedItem = styled.div<{ $delay: number; $hasLoaded: boolean }>`
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${props => props.$delay}ms;

  ${props => props.$hasLoaded && `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (prefers-reduced-motion: reduce) {
    ${props => props.$hasLoaded && `
      opacity: 1;
      transform: none;
    `}
  }
`;

interface LoadSequenceProps {
  items: LoadSequenceItem[];
  hasLoaded: boolean;
  render: (id: string) => React.ReactNode;
}

export function LoadSequence({ items, hasLoaded, render }: LoadSequenceProps) {
  return (
    <>
      {items.map(item => (
        <SequencedItem key={item.id} $delay={item.delay} $hasLoaded={hasLoaded}>
          {render(item.id)}
        </SequencedItem>
      ))}
    </>
  );
}

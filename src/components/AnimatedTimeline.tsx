import React from 'react';
import styled from 'styled-components';
import { useScrollProgress } from '../hooks/useScrollProgress';

const TimelineWrapper = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};
`;

const TimelineLine = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.accent.primary} 0%,
    ${({ theme }) => theme.colors.accent.primary} ${props => props.$progress}%,
    ${({ theme }) => theme.colors.border.medium} ${props => props.$progress}%,
    ${({ theme }) => theme.colors.border.medium} 100%
  );

  @media (prefers-reduced-motion: reduce) {
    background: ${({ theme }) => theme.colors.border.medium};
  }
`;

interface AnimatedTimelineProps {
  children: React.ReactNode;
}

export function AnimatedTimeline({ children }: AnimatedTimelineProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);

  return (
    <TimelineWrapper ref={ref}>
      <TimelineLine $progress={progress} />
      {children}
    </TimelineWrapper>
  );
}

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
`;

const ExperienceItemWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

const TimelineTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  flex-shrink: 0;
  width: 20px;
`;

const TimelineDot = styled.div<{ $isCurrent: boolean }>`
  width: ${({ $isCurrent }) => $isCurrent ? '12px' : '10px'};
  height: ${({ $isCurrent }) => $isCurrent ? '12px' : '10px'};
  border-radius: 50%;
  background: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.colors.accent.primary : theme.colors.border.medium};
  border: 2px solid ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.colors.accent.primary : theme.colors.border.light};
  flex-shrink: 0;
  z-index: 1;
  animation: ${({ $isCurrent }) => $isCurrent ? pulse : 'none'} 2s ease-in-out infinite;
`;

const TimelineLine = styled.div`
  width: 2px;
  flex: 1;
  background: ${({ theme }) => theme.colors.border.light};
  margin-top: 4px;
`;

const Content = styled.div`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing.md};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Organization = styled.h3`
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const Duration = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Designation = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
`;

const CurrentBadge = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.accent.primary};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.accent.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 1px 8px;
  margin-left: 8px;
`;

function ExperienceItem({ organization, designation, duration, isCurrent = false, isLast = false }: {
  organization: string;
  designation: string;
  duration: string;
  isCurrent?: boolean;
  isLast?: boolean;
}) {
  return (
    <ExperienceItemWrapper>
      <TimelineTrack>
        <TimelineDot $isCurrent={isCurrent} />
        {!isLast && <TimelineLine />}
      </TimelineTrack>
      <Content>
        <Header>
          <Organization>
            {organization}
            {isCurrent && <CurrentBadge>Current</CurrentBadge>}
          </Organization>
          <Duration>{duration}</Duration>
        </Header>
        <Designation>{designation}</Designation>
      </Content>
    </ExperienceItemWrapper>
  );
}

export default ExperienceItem;

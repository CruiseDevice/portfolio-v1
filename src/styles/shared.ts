import styled from 'styled-components';

// Shared section wrapper
export const SectionWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

// Academic section title with bottom border - like a paper subsection
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.medium};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  letter-spacing: -0.01em;
`;

// Academic paper card style
export const PaperCard = styled.div<{ $accent?: 'primary' | 'secondary' }>`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-left: 3px solid ${({ theme, $accent }) =>
    $accent === 'secondary' ? theme.colors.accent.secondary : theme.colors.accent.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: background ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundCard};
  }
`;

// Timeline item for experience/education - designed to work with AnimatedTimeline
export const TimelineItem = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  // Dot marker that aligns with AnimatedTimeline line
  &::before {
    content: '';
    position: absolute;
    left: -38px; // Centered on timeline line (accounts for dot width and TimelineItem padding)
    top: 6px;
    width: 9px;
    height: 9px;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.accent.primary};
    border-radius: 50%;
    z-index: 1;
  }
`;

// Timeline header
export const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

// Timeline title
export const TimelineTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

// Timeline date - monospace
export const TimelineDate = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Timeline subtitle (organization/institution)
export const TimelineSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.accent.primary};
  margin-top: 2px;
`;

// Timeline description
export const TimelineDescription = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

// Academic tag style - rectangular, not pill
export const Tag = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  color: ${({ theme }) => theme.colors.text.muted};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

// Paper type badge
export const PaperType = styled.span<{ $variant?: 'primary' | 'secondary' }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.accent.secondary : theme.colors.accent.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: inline-block;
`;

// Paper title
export const PaperTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
    transition: border-color ${({ theme }) => theme.transitions.fast};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent.primary};
    }
  }
`;

// Paper abstract/summary
export const PaperAbstract = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
`;

// Paper meta info
export const PaperMeta = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.sm};

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid currentColor;

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent.primary};
    }
  }
`;

// Info grid for about section
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

// Info label - monospace uppercase
export const InfoLabel = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Info value
export const InfoValue = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// Bio text with serif font for academic feel
export const BioText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.paper};
  line-height: ${({ theme }) => theme.typography.lineHeight.paper};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Link button style - more subdued
export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.accent.primary};
    text-decoration: none;
  }
`;

// Tags container
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

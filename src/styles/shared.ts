import styled from 'styled-components';

// Shared section wrapper
export const SectionWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

// Shared section title with accent underline
export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: 2px;
  }
`;

// Card wrapper with hover effects
export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.border.medium};
    transform: translateY(-2px);
  }
`;

// Badge component for tags/skills
export const Badge = styled.span<{ $variant?: 'primary' | 'secondary' | 'default' }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${theme.colors.accent.primary};
          color: ${theme.colors.text.inverse};
        `;
      case 'secondary':
        return `
          background: ${theme.colors.accent.secondary};
          color: ${theme.colors.text.inverse};
        `;
      default:
        return `
          background: ${theme.colors.backgroundAlt};
          color: ${theme.colors.text.muted};
        `;
    }
  }}

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

// Link button style
export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    text-decoration: none;
  }
`;

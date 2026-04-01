import styled from 'styled-components';

const HighlightWrapper = styled.span<{ $color: string }>`
  position: relative;
  display: inline;
  background: ${props => props.$color};
  padding: 2px 4px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

interface HighlightProps {
  children: React.ReactNode;
  color?: 'yellow' | 'green' | 'blue' | 'pink';
}

export function Highlight({ children, color = 'yellow' }: HighlightProps) {
  const colorMap = {
    yellow: 'rgba(255, 215, 0, 0.4)',
    green: 'rgba(144, 238, 144, 0.4)',
    blue: 'rgba(173, 216, 230, 0.4)',
    pink: 'rgba(255, 182, 193, 0.4)'
  };

  return (
    <HighlightWrapper $color={colorMap[color]}>
      {children}
    </HighlightWrapper>
  );
}

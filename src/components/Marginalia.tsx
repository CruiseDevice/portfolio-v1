import styled from 'styled-components';

type MarginaliaType = 'question' | 'highlight' | 'emphasis' | 'definition' | 'note' | 'arrow';
type MarginaliaColor = 'red' | 'blue' | 'green' | 'pencil';
type HandwritingStyle = 'casual' | 'formal' | 'playful';
type MarginaliaPosition = 'normal' | 'bleed' | 'overlap' | 'parallax';

const MarginaliaContainer = styled.aside<{
  $side: 'left' | 'right';
  $type: MarginaliaType;
  $color: MarginaliaColor;
  $handwritingStyle: HandwritingStyle;
  $hasConnector: boolean;
  $position: MarginaliaPosition;
  $overlapIndex?: number;
}>`
  position: absolute;
  ${props => {
    // EDGE-BLEEDING: Notes partially off-screen
    if (props.$position === 'bleed') {
      return props.$side === 'right'
        ? 'right: -200px; max-width: 180px;'
        : 'left: -200px; max-width: 180px;';
    }
    // OVERLAPPING: Staggered positions for layered effect
    if (props.$position === 'overlap') {
      const offset = (props.$overlapIndex || 0) * 15;
      return props.$side === 'right'
        ? `right: ${-160 - offset}px;`
        : `left: ${-160 - offset}px;`;
    }
    // PARALLAX: Normal position but will animate on scroll
    return props.$side === 'right' ? 'right: -160px;' : 'left: -160px;';
  }}
  top: 0;
  width: ${props => props.$position === 'bleed' ? 'auto' : '140px'};
  font-family: ${props => {
    switch(props.$handwritingStyle) {
      case 'casual': return '"Caveat", cursive';
      case 'formal': return '"Kalam", cursive';
      case 'playful': return '"Architects Daughter", cursive';
      default: return '"Caveat", cursive';
    }
  }};
  font-size: ${({ theme }) => theme.typography.fontSize.marginalia};
  color: ${props => {
    switch(props.$color) {
      case 'red': return props.theme.colors.ink.red;
      case 'blue': return props.theme.colors.ink.blue;
      case 'green': return props.theme.colors.ink.green;
      case 'pencil': return props.theme.colors.ink.pencil;
    }
  }};
  font-weight: ${props => props.$type === 'emphasis' ? '700' : '400'};
  transform: rotate(${props => props.$side === 'right' ? '-2deg' : '2deg'});
  opacity: 0.85;
  transition: all 0.3s ease;
  cursor: default;
  position: relative;
  z-index: ${props => props.$overlapIndex ? 10 + (props.$overlapIndex || 0) : 10};

  ${props => props.$type === 'question' && `
    &::before {
      content: '?';
      font-size: 1.5em;
      margin-right: 4px;
    }
  `}

  ${props => props.$type === 'definition' && `
    &::before {
      content: 'def.';
      font-size: 0.7em;
      text-transform: uppercase;
      margin-right: 6px;
      opacity: 0.7;
    }
  `}

  /* Connection line to content */
  ${props => props.$hasConnector && `
    &::after {
      content: '';
      position: absolute;
      ${props.$side === 'right' ? 'left: -20px;' : 'right: -20px;'}
      top: 50%;
      width: 20px;
      height: 1px;
      background: currentColor;
      opacity: 0.4;
    }
  `}

  /* Edge-bleeding visual effect */
  ${props => props.$position === 'bleed' && `
    mask-image: linear-gradient(
      ${props.$side === 'right' ? 'to left' : 'to right'},
      transparent 0%,
      black 15%
    );
    -webkit-mask-image: linear-gradient(
      ${props.$side === 'right' ? 'to left' : 'to right'},
      transparent 0%,
      black 15%
    );
  `}

  &:hover {
    opacity: 1;
    transform: rotate(0deg) scale(1.08);
  }

  @media (max-width: 1200px) {
    position: relative;
    ${props => props.$side === 'right' ? 'right: auto;' : 'left: auto;'}
    ${props => props.$side === 'right' ? 'margin-left: auto;' : 'margin-right: auto;'}
    margin-top: ${({ theme }) => theme.spacing.sm};
    text-align: ${props => props.$side === 'right' ? 'right' : 'left'};
    width: 100%;
    max-width: 200px;
    transform: none;
    mask-image: none;
    -webkit-mask-image: none;

    ${props => props.$hasConnector && `
      &::after {
        display: none;
      }
    `}

    &:hover {
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    &:hover {
      transform: none;
    }
  }
`;

interface MarginaliaProps {
  text: string;
  side?: 'left' | 'right';
  type?: MarginaliaType;
  color?: MarginaliaColor;
  handwritingStyle?: HandwritingStyle;
  hasConnector?: boolean;
  position?: MarginaliaPosition;
  overlapIndex?: number;
}

export function Marginalia({
  text,
  side = 'right',
  type = 'note',
  color = 'pencil',
  handwritingStyle = 'casual',
  hasConnector = true,
  position = 'normal',
  overlapIndex
}: MarginaliaProps) {
  return (
    <MarginaliaContainer
      $side={side}
      $type={type}
      $color={color}
      $handwritingStyle={handwritingStyle}
      $hasConnector={hasConnector}
      $position={position}
      $overlapIndex={overlapIndex}
    >
      {text}
    </MarginaliaContainer>
  );
}

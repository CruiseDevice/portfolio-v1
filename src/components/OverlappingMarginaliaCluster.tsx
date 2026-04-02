import styled from 'styled-components';
import { Marginalia, MarginaliaProps } from './Marginalia';

const ClusterWrapper = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${props => props.$side === 'right' ? 'right: -180px;' : 'left: -180px;'}
  top: 0;
  width: 200px;
  height: 100%;
  pointer-events: none;

  @media (max-width: 1200px) {
    position: relative;
    ${props => props.$side === 'right' ? 'right: auto;' : 'left: auto;'}
    margin-top: ${({ theme }) => theme.spacing.md};
    width: 100%;
  }
`;

interface ClusterItem extends MarginaliaProps {
  id: string;
}

interface OverlappingMarginaliaClusterProps {
  items: ClusterItem[];
  side: 'left' | 'right';
}

export function OverlappingMarginaliaCluster({
  items,
  side
}: OverlappingMarginaliaClusterProps) {
  return (
    <ClusterWrapper $side={side}>
      {items.map((item, index) => (
        <div key={item.id} style={{ position: 'absolute', top: `${index * 20}px` }}>
          <Marginalia
            {...item}
            side={side}
            position="overlap"
            overlapIndex={index}
          />
        </div>
      ))}
    </ClusterWrapper>
  );
}

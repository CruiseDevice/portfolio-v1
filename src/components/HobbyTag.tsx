import styled from 'styled-components';

const Tag = styled.span<{ color: string }>`
  display: inline-block;
  background: ${props => `linear-gradient(135deg, ${props.color}, ${props.color}CC)`};
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 3px 6px ${props => `${props.color}33`};
  transition: all 0.3s ease;
  cursor: default;
  user-select: none;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 10px ${props => `${props.color}66`};
  }
`;

const HobbyTag = ({ text, color }: { text: string; color: string }) => {
  return <Tag color={color}>{text}</Tag>;
};

export default HobbyTag;
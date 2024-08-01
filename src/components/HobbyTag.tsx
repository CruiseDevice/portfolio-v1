// src/components/HobbyTag.tsx
import React from 'react';
import styled from 'styled-components';

const Tag = styled.span<{ color: string }>`
  display: inline-block;
  background-color: ${props => props.color};
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 5px;
  font-size: 14px;
`;

const HobbyTag = ({ text, color }: { text: string; color: string }) => {
  return <Tag color={color}>{text}</Tag>;
};

export default HobbyTag;

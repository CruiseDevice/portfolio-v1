// src/components/HireMe.tsx
import React from 'react';
import styled from 'styled-components';

const HireMeWrapper = styled.div`
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HireMeButton = styled.button`
  background-color: #00C853;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: #00a743;
  }
`;

const HireMe = () => {
  return (
    <HireMeWrapper>
      <SectionTitle>Hire Me</SectionTitle>
      <ButtonContainer>
        <HireMeButton>Hire Me</HireMeButton>
      </ButtonContainer>
    </HireMeWrapper>
  );
};

export default HireMe;

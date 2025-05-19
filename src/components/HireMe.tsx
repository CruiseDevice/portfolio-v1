import styled from 'styled-components';

const HireMeWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(120deg, #0062E6, #33AEFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  height: 2px;
  background: linear-gradient(to right, #0062E6, transparent);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const HireMeButton = styled.button`
  background: linear-gradient(to right, #00C853, #4CAF50);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 200, 83, 0.2);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 200, 83, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2));
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover:before {
    transform: translateX(100%);
  }
`;

const HireMe = () => {
  return (
    <HireMeWrapper>
      <SectionHeader>
        <Title>Hire Me</Title>
      </SectionHeader>
      <Divider />
      <ButtonContainer>
        <HireMeButton>Hire Me</HireMeButton>
      </ButtonContainer>
    </HireMeWrapper>
  );
};

export default HireMe;
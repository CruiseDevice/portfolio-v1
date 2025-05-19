import styled from "styled-components";

const AboutSection = styled.div`
  margin: 10px;
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.8);
  }
`;

const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  height: 2px;
  background: linear-gradient(to right, #0062E6, transparent);
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 25px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const InfoValue = styled.div`
  font-size: 15px;
  color: #333;
  font-weight: 500;
`;

const Label = styled.div`
  background: linear-gradient(to right, #0062E6, #33AEFF);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  width: 110px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 5px rgba(0, 123, 255, 0.3);
`;

function AboutMe () {
  return (
    <AboutSection>
      <h3>About Me</h3>
      <Divider />
      <Bio>Hello! I’m Akash Chavan. I'm a programmer living in California. I code using Python.</Bio>
      <Info>
        <Label>Residence: </Label> <InfoValue>San Jose, CA, USA</InfoValue>
      </Info>
      <Info>
        <Label>Availability: </Label> <InfoValue>9AM - 5PM PST</InfoValue>
      </Info>
      <Info>
        <Label>Address: </Label> <InfoValue>130 Descanso Dr, San Jose, CA, USA</InfoValue>
      </Info>
    </AboutSection>
  );
}

export default AboutMe
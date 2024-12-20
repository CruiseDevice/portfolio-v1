import styled from "styled-components";

const AboutSection = styled.div`
  margin: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

`;

const Label = styled.div`
  background-color: #007BFF;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  `;

function AboutMe () {
  return (
    <AboutSection>
      <h3>About Me</h3>
      <hr />
      <p>Hello! I’m Akash Chavan. I'm a programmer living in California. I code using Python.</p>
      <Info>
        <Label>Residence: </Label> <span>San Jose, CA, USA</span>
      </Info>
      <Info>
        <Label>Availability: </Label> <span>9AM - 5PM PST</span>
      </Info>
      <Info>
        <Label>Address: </Label> <span>130 Descanso Dr, San Jose, CA, USA</span>
      </Info>
    </AboutSection>
  );
}

export default AboutMe
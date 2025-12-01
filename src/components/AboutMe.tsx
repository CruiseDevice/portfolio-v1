import styled from "styled-components";

const AboutSection = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 16px;
  text-align: justify;
`;

const InfoGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px 24px;
  font-size: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const InfoLabel = styled.div`
  color: #666666;
  font-weight: 500;
`;

const InfoValue = styled.div`
  color: #333333;
`;

function AboutMe () {
  return (
    <AboutSection id="about">
      <SectionTitle>About</SectionTitle>
      <Bio>
        I am a Computer Science graduate student and software developer based in California.
        My research interests include natural language processing, machine learning, and deep learning.
        I have experience developing full-stack applications and working with modern web technologies.
      </Bio>
      <InfoGrid>
        <InfoLabel>Location:</InfoLabel>
        <InfoValue>San Jose, California</InfoValue>
        <InfoLabel>Email:</InfoLabel>
        <InfoValue>akash@example.com</InfoValue>
        <InfoLabel>Interests:</InfoLabel>
        <InfoValue>NLP, Machine Learning, Web Development</InfoValue>
      </InfoGrid>
    </AboutSection>
  );
}

export default AboutMe
import styled from "styled-components";
import profileData from "../data/profile.json";
import { SectionTitle, BioText, InfoGrid, InfoLabel, InfoValue } from "../styles/shared";

const AboutSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

function AboutMe() {
  return (
    <AboutSection id="about">
      <SectionTitle>About</SectionTitle>
      <BioText>{profileData.bio}</BioText>
      <InfoGrid>
        <InfoLabel>Location</InfoLabel>
        <InfoValue>{profileData.location}</InfoValue>
        <InfoLabel>Email</InfoLabel>
        <InfoValue>{profileData.email}</InfoValue>
        <InfoLabel>Interests</InfoLabel>
        <InfoValue>{profileData.interests}</InfoValue>
      </InfoGrid>
    </AboutSection>
  );
}

export default AboutMe;

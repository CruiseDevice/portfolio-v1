import styled from "styled-components";
import profileData from "../data/profile.json";
import { SectionTitle } from "../styles/shared";

const AboutSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

const Bio = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: justify;
`;

const InfoGrid = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const InfoLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.muted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const InfoValue = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

function AboutMe() {
  return (
    <AboutSection id="about">
      <SectionTitle>About</SectionTitle>
      <Bio>{profileData.bio}</Bio>
      <InfoGrid>
        <InfoLabel>Location:</InfoLabel>
        <InfoValue>{profileData.location}</InfoValue>
        <InfoLabel>Email:</InfoLabel>
        <InfoValue>{profileData.email}</InfoValue>
        <InfoLabel>Interests:</InfoLabel>
        <InfoValue>{profileData.interests}</InfoValue>
      </InfoGrid>
    </AboutSection>
  );
}

export default AboutMe;

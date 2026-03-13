import styled from "styled-components";
import profileData from "../data/profile.json";

const AboutSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: 2px;
  }
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

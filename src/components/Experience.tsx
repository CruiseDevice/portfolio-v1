import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import experienceData from "../data/experience.json";

const ExperienceWrapper = styled.section`
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

const ExperienceItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

function Experience() {
  return (
    <ExperienceWrapper id="experience">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceItems>
        {experienceData.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            organization={exp.organization}
            designation={exp.designation}
            duration={exp.duration}
            isCurrent={exp.duration.includes('Present')}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </ExperienceItems>
    </ExperienceWrapper>
  );
}

export default Experience;

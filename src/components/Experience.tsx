import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import experienceData from "../data/experience.json";

const ExperienceWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ExperienceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

function Experience() {
  return (
    <ExperienceWrapper id="experience">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceItems>
        {experienceData.map((exp) => (
          <ExperienceItem
            key={exp.id}
            organization={exp.organization}
            designation={exp.designation}
            duration={exp.duration}
          />
        ))}
      </ExperienceItems>
    </ExperienceWrapper>
  );
}

export default Experience;

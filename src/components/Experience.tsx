import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import experienceData from "../data/experience.json";
import { SectionTitle } from "../styles/shared";

const ExperienceWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
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

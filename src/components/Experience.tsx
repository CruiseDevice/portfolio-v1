import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import experienceData from "../data/experience.json";
import { SectionTitle } from "../styles/shared";
import { AnimatedTimeline } from "./AnimatedTimeline";

const ExperienceWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

function Experience() {
  return (
    <ExperienceWrapper id="experience">
      <SectionTitle>Experience</SectionTitle>
      <AnimatedTimeline>
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
      </AnimatedTimeline>
    </ExperienceWrapper>
  );
}

export default Experience;

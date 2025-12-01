import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import experienceData from "../data/experience.json";

const ExperienceWrapper = styled.section`
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

const ExperienceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
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
import styled from "styled-components";
import EducationItem from "./EducationItem";
import educationData from "../data/education.json";
import { SectionTitle } from "../styles/shared";
import { AnimatedTimeline } from "./AnimatedTimeline";

const EducationWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

function Education() {
  return (
    <EducationWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <AnimatedTimeline>
        {educationData.map((edu, index) => (
          <EducationItem
            key={edu.id}
            degree={edu.degree}
            institution={edu.institution}
            duration={edu.duration}
            isLast={index === educationData.length - 1}
          />
        ))}
      </AnimatedTimeline>
    </EducationWrapper>
  );
}

export default Education;

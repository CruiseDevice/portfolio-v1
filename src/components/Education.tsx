import styled from "styled-components";
import EducationItem from "./EducationItem";
import educationData from "../data/education.json";
import { SectionTitle } from "../styles/shared";

const EducationWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

const EducationItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

function Education() {
  return (
    <EducationWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <EducationItems>
        {educationData.map((edu) => (
          <EducationItem
            key={edu.id}
            degree={edu.degree}
            institution={edu.institution}
            duration={edu.duration}
          />
        ))}
      </EducationItems>
    </EducationWrapper>
  );
}

export default Education;

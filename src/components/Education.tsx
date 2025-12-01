import styled from "styled-components";
import EducationItem from "./EducationItem";
import educationData from "../data/education.json";

const EducationWrapper = styled.section`
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

const EducationItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
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
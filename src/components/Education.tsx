import styled from "styled-components";
import EducationItem from "./EducationItem";
import educationData from "../data/education.json";

const EducationWrapper = styled.section`
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

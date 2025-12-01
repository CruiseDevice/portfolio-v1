import styled from "styled-components"
import skillsData from "../data/skills.json";

const SkillsSection = styled.section`
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

const SkillCategory = styled.div`
  margin-bottom: 16px;
`;

const CategoryTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const SkillsList = styled.p`
  font-size: 15px;
  color: #333333;
  line-height: 1.6;
  margin: 0;
`;

function Skills () {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      {skillsData.map((skillCategory) => (
        <SkillCategory key={skillCategory.id}>
          <CategoryTitle>{skillCategory.category}</CategoryTitle>
          <SkillsList>{skillCategory.skills}</SkillsList>
        </SkillCategory>
      ))}
    </SkillsSection>
  )
}

export default Skills
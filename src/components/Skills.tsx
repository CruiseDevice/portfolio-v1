import styled from "styled-components";
import skillsData from "../data/skills.json";
import { SectionTitle } from "../styles/shared";

const SkillsSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.section};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const SkillCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryHeader = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SkillList = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

function Skills() {
  const parseSkills = (skillsString: string): string[] => {
    return skillsString.split(',').map(skill => skill.trim()).filter(Boolean);
  };

  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsGrid>
        {skillsData.map((skillCategory) => (
          <SkillCategory key={skillCategory.id}>
            <CategoryHeader>{skillCategory.category}</CategoryHeader>
            <SkillList>
              {parseSkills(skillCategory.skills).join(', ')}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;

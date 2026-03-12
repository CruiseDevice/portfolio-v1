import styled from "styled-components";
import skillsData from "../data/skills.json";

const SkillsSection = styled.section`
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

const SkillCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillBadge = styled.span<{ $variant?: 'primary' | 'secondary' | 'default' }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.colors.accent.primary
      : $variant === 'secondary'
        ? theme.colors.backgroundAlt
        : theme.colors.backgroundAlt};
  color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.colors.text.inverse
      : theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  border: 1px solid transparent;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

function Skills() {
  // Parse skills string into array
  const parseSkills = (skillsString: string): string[] => {
    return skillsString.split(',').map(skill => skill.trim()).filter(Boolean);
  };

  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      {skillsData.map((skillCategory, categoryIndex) => (
        <SkillCategory key={skillCategory.id}>
          <CategoryHeader>
            <CategoryTitle>{skillCategory.category}</CategoryTitle>
          </CategoryHeader>
          <SkillsGrid>
            {parseSkills(skillCategory.skills).map((skill, skillIndex) => (
              <SkillBadge
                key={`${skillCategory.id}-${skillIndex}`}
                $variant={categoryIndex % 3 === 0 ? 'primary' : 'default'}
              >
                {skill}
              </SkillBadge>
            ))}
          </SkillsGrid>
        </SkillCategory>
      ))}
    </SkillsSection>
  );
}

export default Skills;

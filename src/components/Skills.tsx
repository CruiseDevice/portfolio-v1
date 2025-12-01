import styled from "styled-components"

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
      <SkillCategory>
        <CategoryTitle>Programming Languages</CategoryTitle>
        <SkillsList>Python, JavaScript, TypeScript</SkillsList>
      </SkillCategory>
      <SkillCategory>
        <CategoryTitle>Frameworks & Libraries</CategoryTitle>
        <SkillsList>React, Vue, Django, Node.js</SkillsList>
      </SkillCategory>
      <SkillCategory>
        <CategoryTitle>Machine Learning & AI</CategoryTitle>
        <SkillsList>PyTorch, TensorFlow, Hugging Face Transformers, BERT, LLM Fine-tuning</SkillsList>
      </SkillCategory>
      <SkillCategory>
        <CategoryTitle>Tools & Technologies</CategoryTitle>
        <SkillsList>Git, Docker, AWS, SQL, MongoDB</SkillsList>
      </SkillCategory>
    </SkillsSection>
  )
}

export default Skills
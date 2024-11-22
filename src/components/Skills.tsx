import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsSection = styled.div`
  margin: 10px;
  max-width: 1200px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const SkillName = styled.div`
  margin-top: 5px;
  font-weight: bold;
`;

const skillsData = [
  { name: "Python", progress: 90, color: "#FF5733" },
  { name: "JavaScript", progress: 80, color: "#33B5FF" },
  { name: "TypeScript", progress: 60, color: "#FFD700" },
  { name: "React", progress: 70, color: "#5F27CD" },
  { name: "Vue", progress: 70, color: "#3498DB" },
  { name: "Django", progress: 50, color: "#E74C3C" },
];

function Skills () {
  return (
    <SkillsSection>
      <h3>My Skills</h3>
      <hr />
      <SkillsGrid>
        {skillsData.map((skill) => (
          <Skill key={skill.name}>
            <div style={{width: 180, height: 180}}>
              <CircularProgressbar
                value={skill.progress}
                text={`${skill.progress}%`}
                styles={buildStyles({
                  pathColor: skill.color,
                  textColor: skill.color,
                  trailColor: "#d6d6d6",
                })}/>
            </div>
              <SkillName>{skill.name}</SkillName>
          </Skill>
        ))}
      </SkillsGrid>
    </SkillsSection>
  )
}

export default Skills
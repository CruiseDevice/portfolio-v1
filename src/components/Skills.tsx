import React from "react"
import styled from "styled-components"

const SkillsSection = styled.div`
  margin: 20px;
`;  

const Skill = styled.div`
  margin-top: 10px;
`;

const ProgressBar = styled.div<{progress: number}>`
  background-color: #007BFF;
  width: ${({progress}) => progress}%;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
`;

function Skills () {
  return (
    <SkillsSection>
      <h3>My Skills</h3>
      <Skill>
        <span>HTML</span>
        <ProgressBar progress={90}>90%</ProgressBar>
      </Skill>
      <Skill>
        <span>CSS</span>
        <ProgressBar progress={80}>80%</ProgressBar>
      </Skill>
      <Skill>
        <span>JavaScript</span>
        <ProgressBar progress={60}>60%</ProgressBar>
      </Skill>
    </SkillsSection>
  )
}

export default Skills
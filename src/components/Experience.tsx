import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const ExperienceWrapper = styled.div`
  margin: 20px;
`

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`

function Experience () {
  return (
    <ExperienceWrapper>
      <SectionTitle>My Experience</SectionTitle>
      <ExperienceItem 
        organization="Aeonture"
        designation="Software Engineer Intern"
        duration="May 2023 - April 2024"
      />
      <ExperienceItem 
        organization="Aeonture"
        designation="Software Engineer Intern"
        duration="May 2023 - April 2024"
      />
      <ExperienceItem 
        organization="Aeonture"
        designation="Software Engineer Intern"
        duration="May 2023 - April 2024"
      />
      <ExperienceItem 
        organization="Aeonture"
        designation="Software Engineer Intern"
        duration="May 2023 - April 2024"
      />
      <ExperienceItem 
        organization="Aeonture"
        designation="Software Engineer Intern"
        duration="May 2023 - April 2024"
      />
    </ExperienceWrapper>
  )
}

export default Experience;
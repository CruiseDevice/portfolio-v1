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
      <hr />
      <ExperienceItem 
        organization="FOSSEE"
        designation="Senior Software Engineer"
        duration="Feb 2019 - May 2022"
      />
      <ExperienceItem 
        organization="IEOR, IIT Bombay"
        designation="Software Engineer"
        duration="Jun 2020 - Oct 2020"
      />
      <ExperienceItem 
        organization="Virtual Labs, IIT Bombay"
        designation="Software Engineer"
        duration="Oct 2017 - Feb 2019"
      />
      <ExperienceItem 
        organization="Tudip Technologies"
        designation="Software Engineer"
        duration="Aug 2016 - Sept 2017"
      />
    </ExperienceWrapper>
  )
}

export default Experience;
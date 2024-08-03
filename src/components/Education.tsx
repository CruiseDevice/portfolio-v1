import React from "react"
import styled from "styled-components";
import EducationItem from "./EducationItem";

const EducationWrapper = styled.div`
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-botton: 20px;
`;

function Education () {
  return (
    <EducationWrapper>
      <SectionTitle>My Education</SectionTitle>
      <hr />
      <EducationItem 
        degree="Master of Computer Science"
        institution="California State University, Los Angele"
        duration="Aug 2022 - May 2024"
      />
      <EducationItem 
        degree="Bachelor of Computer Science"
        institution="Dr. Babsaheb Ambedkar Marathwada University, Aurangabad"
        duration="July 2012 - Jun 2016"
      />
    </EducationWrapper>
  )
}

export default Education;
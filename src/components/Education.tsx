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
      <EducationItem 
        degree="Bachelor of Computer Science"
        institution="Pepperdine University at Malibu"
        duration="Aug 2004 - May 2008"
      />
      <EducationItem 
        degree="Master of Computer Science"
        institution="University of California, Los Angeles"
        duration="Aug 2008 - May 2010"
      />

    </EducationWrapper>
  )
}

export default Education;
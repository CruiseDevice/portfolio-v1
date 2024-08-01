import React from "react";
import styled from "styled-components";

const EducationItemWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Degree = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const Institution = styled.p`
  margin: 5px 0;
`;

const Duration = styled.p`
  margin: 0;
  color: #757575;
`;

function EducationItem ({degree, institution, duration}: {degree: string, institution: string; duration: string}) {
  return (
    <EducationItemWrapper>
      <Degree>{degree}</Degree>
      <Institution>{institution}</Institution>
      <Duration>{duration}</Duration>
    </EducationItemWrapper>
  )
}

export default EducationItem;
import React from "react";
import styled from "styled-components";

const ExperienceItemWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Organization = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const Designation = styled.p`
  margin: 5px 0;
`;

const Duration = styled.p`
  margin: 0;
  color: #757575;
`;

function ExperienceItem ({organization, designation, duration}: {
  organization: string; designation: string; duration: string
}) {
  return (
    <ExperienceItemWrapper>
      <Organization>{organization}</Organization>
      <Designation>{designation}</Designation>
      <Duration>{duration}</Duration>
    </ExperienceItemWrapper>
  )
}

export default ExperienceItem;
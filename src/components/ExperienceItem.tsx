import React from "react";
import styled from "styled-components";

const ExperienceItemWrapper = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 20px 25px;
  margin-bottom: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, #0062E6, #33AEFF);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    
    &:before {
      opacity: 1;
    }
  }
`;

const Organization = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 600;
  color: #333;
  font-size: 18px;
`;

const Designation = styled.p`
  margin: 5px 0 10px 0;
  font-size: 16px;
  color: #555;
  font-weight: 500;
`;

const Duration = styled.p`
  margin: 0;
  color: #757575;
  font-size: 14px;
  display: inline-block;
  background-color: #f5f7fa;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 500;
`;

function ExperienceItem({organization, designation, duration}: {
  organization: string, designation: string, duration: string
}) {
  return (
    <ExperienceItemWrapper>
      <Organization>{organization}</Organization>
      <Designation>{designation}</Designation>
      <Duration>{duration}</Duration>
    </ExperienceItemWrapper>
  );
}

export default ExperienceItem;
import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const ExperienceWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(120deg, #0062E6, #33AEFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  height: 2px;
  background: linear-gradient(to right, #0062E6, transparent);
`;

const ExperienceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

function Experience() {
  return (
    <ExperienceWrapper>
      <SectionHeader>
        <Title>My Experience</Title>
      </SectionHeader>
      <Divider />
      <ExperienceItems>
        <ExperienceItem
          organization="Better Angels"
          designation="Full Stack Developer"
          duration="Jul 2024 - Current"
        />
        <ExperienceItem
          organization="FOSSEE"
          designation="Senior Software Engineer"
          duration="Feb 2019 - May 2022"
        />
        <ExperienceItem
          organization="Virtual Labs, IIT Bombay"
          designation="Software Engineer"
          duration="Oct 2017 - Feb 2019"
        />
      </ExperienceItems>
    </ExperienceWrapper>
  );
}

export default Experience;
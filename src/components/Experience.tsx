import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const ExperienceWrapper = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;

const ExperienceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
`;

function Experience() {
  return (
    <ExperienceWrapper id="experience">
      <SectionTitle>Experience</SectionTitle>
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
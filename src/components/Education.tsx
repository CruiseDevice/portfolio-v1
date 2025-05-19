import styled from "styled-components";
import EducationItem from "./EducationItem";

const EducationWrapper = styled.div`
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

const EducationItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

function Education() {
  return (
    <EducationWrapper>
      <SectionHeader>
        <Title>My Education</Title>
      </SectionHeader>
      <Divider />
      <EducationItems>
        <EducationItem
          degree="Master of Computer Science"
          institution="California State University, Los Angeles"
          duration="Aug 2022 - May 2024"
        />
        <EducationItem
          degree="Bachelor of Computer Science"
          institution="Dr. Babsaheb Ambedkar Marathwada University, Aurangabad"
          duration="July 2012 - Jun 2016"
        />
      </EducationItems>
    </EducationWrapper>
  );
}

export default Education;
import styled from "styled-components";

const EducationItemWrapper = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 20px 25px;
  margin-bottom: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    border-left: 3px solid #0062E6;
  }
`;

const Degree = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 600;
  color: #333;
  font-size: 18px;
`;

const Institution = styled.p`
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

function EducationItem({degree, institution, duration}: {
  degree: string, institution: string, duration: string
}) {
  return (
    <EducationItemWrapper>
      <Degree>{degree}</Degree>
      <Institution>{institution}</Institution>
      <Duration>{duration}</Duration>
    </EducationItemWrapper>
  );
}

export default EducationItem;
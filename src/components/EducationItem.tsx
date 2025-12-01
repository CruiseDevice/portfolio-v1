import styled from "styled-components";

const EducationItemWrapper = styled.div`
  margin-bottom: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Degree = styled.h3`
  margin: 0;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 16px;
`;

const Duration = styled.span`
  color: #666666;
  font-size: 14px;
`;

const Institution = styled.p`
  margin: 0;
  font-size: 15px;
  color: #333333;
  font-style: italic;
`;

function EducationItem({degree, institution, duration}: {
  degree: string, institution: string, duration: string
}) {
  return (
    <EducationItemWrapper>
      <Header>
        <Degree>{degree}</Degree>
        <Duration>{duration}</Duration>
      </Header>
      <Institution>{institution}</Institution>
    </EducationItemWrapper>
  );
}

export default EducationItem;
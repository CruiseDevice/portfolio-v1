import styled from "styled-components";

const ExperienceItemWrapper = styled.div`
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

const Organization = styled.h3`
  margin: 0;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 16px;
`;

const Duration = styled.span`
  color: #666666;
  font-size: 14px;
`;

const Designation = styled.p`
  margin: 0;
  font-size: 15px;
  color: #333333;
  font-style: italic;
`;

function ExperienceItem({organization, designation, duration}: {
  organization: string, designation: string, duration: string
}) {
  return (
    <ExperienceItemWrapper>
      <Header>
        <Organization>{organization}</Organization>
        <Duration>{duration}</Duration>
      </Header>
      <Designation>{designation}</Designation>
    </ExperienceItemWrapper>
  );
}

export default ExperienceItem;
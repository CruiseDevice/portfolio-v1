import styled from "styled-components";

const ExperienceItemWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Organization = styled.h3`
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const Duration = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Designation = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
`;

function ExperienceItem({ organization, designation, duration }: {
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

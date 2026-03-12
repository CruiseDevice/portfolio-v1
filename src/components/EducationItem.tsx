import styled from "styled-components";

const EducationItemWrapper = styled.div`
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

const Degree = styled.h3`
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const Duration = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Institution = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
`;

function EducationItem({ degree, institution, duration }: {
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

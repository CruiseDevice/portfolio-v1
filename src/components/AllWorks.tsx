import worksData from '../data/works.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Breadcrumb = styled.nav`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;

  a {
    color: #007BFF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 5px;
    color: #999;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const WorksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
`;

const WorkCard = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const WorkTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #007BFF;
  margin-bottom: 10px;
`;

const WorkDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

// Component
const AllWorks = () => {
  return (
    <Container>
      <Title>All Works</Title>
      <Breadcrumb>
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <span>All Works</span>
      </Breadcrumb>
      <WorksList>
        {worksData.map((work) => (
          <WorkCard key={work.id}>
            <WorkTitle>{work.title}</WorkTitle>
            <WorkDescription>{work.description}</WorkDescription>
          </WorkCard>
        ))}
      </WorksList>
    </Container>
  );
};

export default AllWorks;
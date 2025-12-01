import projectsData from '../content/projects/index.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WorkItem from './WorkItem';

const Container = styled.div`
  margin-top: 40px;
`;

const Breadcrumb = styled.nav`
  font-size: 14px;
  color: #666666;
  margin-bottom: 24px;

  a {
    color: #333333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 8px;
    color: #999999;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;

const WorksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AllWorks = () => {
  return (
    <Container>
      <Breadcrumb>
        <Link to="/">← Back to home</Link>
      </Breadcrumb>
      <Title>All Projects</Title>
      <WorksList>
        {projectsData.map((project) => (
          <WorkItem
            key={project.id}
            title={project.title}
            description={project.summary}
            tags={project.tags}
          />
        ))}
      </WorksList>
    </Container>
  );
};

export default AllWorks;